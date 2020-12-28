import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { MLService } from 'src/app/services/ml.service';

@Component({
  templateUrl: './generate-tfrecord.component.html',
  styleUrls: ['./generate-tfrecord.component.scss']
})
export class GenerateTFRecordComponent implements OnInit {

  constructor(private ml: MLService, private toast: NbToastrService, private dialog: NbDialogRef<GenerateTFRecordComponent>) { }

  /**
   *      path_to_annotation: str
          path_to_images: str
          path_to_label_map: str
          path_to_tfrecord: str
   */

  annotationControl: FormControl;
  imagesControl: FormControl;
  labelMapControl: FormControl;
  tfrecordControl: FormControl;

  ngOnInit(): void {
    this.annotationControl = new FormControl();
    this.imagesControl = new FormControl();
    this.labelMapControl = new FormControl();
    this.tfrecordControl = new FormControl();
  }

  createTFRecord() {
    this.ml.generateTFRecord(this.annotationControl.value, this.imagesControl.value, this.labelMapControl.value, this.tfrecordControl.value)
      .then(() => {
        this.toast.success("Generating TF Record", "Success");
        this.dialog.close();
      })
      .catch((err) => {
        this.toast.danger(err.error.message, "Cannot generate TF Record");
      });
  }

}
