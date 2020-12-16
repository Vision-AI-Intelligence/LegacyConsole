import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { BucketService } from 'src/app/services/bucket.service';

@Component({
  templateUrl: './download-dialog.component.html',
  styleUrls: ['./download-dialog.component.scss']
})
export class DownloadDialogComponent implements OnInit {

  constructor(private bucket: BucketService, private dialogRef: NbDialogRef<DownloadDialogComponent>, private toast: NbToastrService) { }

  urlControl: FormControl;
  filenameControl: FormControl;

  dir = "";

  ngOnInit(): void {
    this.urlControl = new FormControl();
    this.filenameControl = new FormControl();
  }

  createDownloadJob() {

    this.bucket.downloadJob(this.urlControl.value, this.dir + this.filenameControl.value).then(() => {
      this.toast.success("Download job started", "Success");
      this.dialogRef.close();
    })
      .catch((err) => {
        this.toast.danger(err.error.message, "Cannot create new download job");
      });
  }

}
