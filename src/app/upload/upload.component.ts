import { Component, OnInit } from '@angular/core';
import { UploadService } from '../services/upload.service';
import { Upload } from '../models/upload.model';
import * as _ from 'lodash'; // to help loop over files more succinctly
import * as firebase from 'firebase';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  emailVerify = false;
  files: FileList;
  upload: Upload;
  choseImg: any = [];

  constructor(private uploadService: UploadService) { }

  ngOnInit() {
    this.emailVerify = firebase.auth().currentUser.emailVerified;
  }

  handleFiles(event) {
    for (var key in event.target.files) {
      if (event.target.files.hasOwnProperty(key)) {
        this.choseImg.push(event.target.files[key].name);
      }
    }
    this.files = event.target.files;
  }
  SendVerification() {
    firebase.auth().currentUser.sendEmailVerification();
  }
  uploadFiles() {
    const filesToUpload = this.files;
    const filesIdx = _.range(filesToUpload.length);
    _.each(filesIdx, (idx) => {
      // console.log(filesToUpload[idx]);
      this.upload = new Upload(filesToUpload[idx]);
      this.uploadService.uploadFile(this.upload);
    });
  }
}
