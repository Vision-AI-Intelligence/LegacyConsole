import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { MLService } from 'src/app/services/ml.service';

@Component({
  templateUrl: './create-model.component.html',
  styleUrls: ['./create-model.component.scss']
})
export class CreateModelComponent implements OnInit {

  constructor(private ml: MLService, private toast: NbToastrService, private dialog: NbDialogRef<CreateModelComponent>) { }

  models = [
    { name: "EfficientDet D0", url: "https://github.com/Vision-AI-Intelligence/Runner/releases/download/v1.0/efficientdet_d0_coco17_tpu-32.zip" },
    { name: "EfficientDet D1", url: "http://download.tensorflow.org/models/object_detection/tf2/20200711/efficientdet_d1_coco17_tpu-32.tar.gz" },
    { name: "EfficientDet D2", url: "http://download.tensorflow.org/models/object_detection/tf2/20200711/efficientdet_d2_coco17_tpu-32.tar.gz" },
    { name: "EfficientDet D3", url: "http://download.tensorflow.org/models/object_detection/tf2/20200711/efficientdet_d3_coco17_tpu-32.tar.gz" },
    { name: "EfficientDet D4", url: "http://download.tensorflow.org/models/object_detection/tf2/20200711/efficientdet_d4_coco17_tpu-32.tar.gz" },
    { name: "EfficientDet D5", url: "http://download.tensorflow.org/models/object_detection/tf2/20200711/efficientdet_d5_coco17_tpu-32.tar.gz" },
    { name: "EfficientDet D6", url: "http://download.tensorflow.org/models/object_detection/tf2/20200711/efficientdet_d6_coco17_tpu-32.tar.gz" },
    { name: "EfficientDet D7", url: "http://download.tensorflow.org/models/object_detection/tf2/20200711/efficientdet_d7_coco17_tpu-32.tar.gz" },
    { name: "SSD MobileNet v2", url: "http://download.tensorflow.org/models/object_detection/tf2/20200711/ssd_mobilenet_v2_320x320_coco17_tpu-8.tar.gz" }
  ];

  urlControl = new FormControl();
  nameControl = new FormControl();

  selectedModel = { url: "" };

  ngOnInit(): void {
  }

  createModel() {
    if (this.urlControl.value == "") {
      this.toast.danger("Require model url", "Model URL");
    }
    if (this.nameControl.value == "") {
      this.toast.danger("Require model name", "Model name");
    }
    this.ml.createModel(this.selectedModel['url'], this.nameControl.value).then(() => {
      this.toast.success(`Created [${this.nameControl.value}]`, "Success");
      this.dialog.close();
    }).catch((err) => {
      this.toast.danger(err.error.message, "Cannot create new model");
    });
  }

}
