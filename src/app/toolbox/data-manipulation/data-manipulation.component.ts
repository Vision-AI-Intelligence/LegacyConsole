import { HostListener } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NbContextMenuDirective, NbDialogService, NbMenuService, NbPosition, NbToastrService } from '@nebular/theme';
import { AuthService } from 'src/app/services/auth.service';
import { BucketService } from 'src/app/services/bucket.service';
import { DownloadDialogComponent } from './dialogs/download-dialog/download-dialog.component';

@Component({
  selector: 'app-data-manipulation',
  templateUrl: './data-manipulation.component.html',
  styleUrls: ['./data-manipulation.component.scss']
})
export class DataManipulationComponent implements OnInit {

  constructor(private auth: AuthService, private bucket: BucketService, private toast: NbToastrService, private menuService: NbMenuService, private dialog: NbDialogService) { }

  ngOnInit(): void {
    this.walk();
    this.menuService.onItemClick().subscribe((item) => {
      if (item.item.title == "Delete") {
        this.bucket.deleteFile(this.dirArrayToString() + this.selectedFile).then(() => {
          this.walk();
        }).catch(err => {
          this.toast.danger(err.error.message, `Cannot delete ${this.selectedFile}`);
        });
      }
    });
  }

  @ViewChild(NbContextMenuDirective) contextMenu: NbContextMenuDirective;

  selectedFile = null;

  fileMenu = [{ title: "Delete" }, { title: "Zip" }, { title: "Unzip" }, { title: "Download" }]

  currentDir = [];
  files = [];
  folders = [];
  historyDir = [];

  public dirArrayToString() {
    let result = "";
    for (let i = 0; i < this.currentDir.length; i++) {
      result += this.currentDir[i] + "/";
    }
    return result;
  }

  public walk() {
    let dir = this.dirArrayToString();
    this.bucket.walk(dir).then((res) => {
      this.files = res['files'];
      this.folders = res['folders'];
    })
      .catch((err) => {
        this.toast.warning(err.error.message, "Drive reading warning");
      });
  }
  public openFolder(folder) {
    this.currentDir.push(folder);
    this.walk();
  }
  public undo() {
    this.historyDir.push(this.currentDir.pop());
    this.walk();
  }
  public redo() {
    this.currentDir.push(this.historyDir.pop());
    this.walk();
  }

  open(file) {
    this.contextMenu.position = NbPosition.BOTTOM
    this.contextMenu.show();
    this.selectedFile = file;
    return false;
  }

  public openDownloadDialog() {
    this.dialog.open(DownloadDialogComponent, { context: { dir: this.dirArrayToString() } });
  }

  @HostListener('document:click')
  close() {
    if (this.contextMenu != undefined) {
      this.contextMenu.hide();
    }
  }
}
