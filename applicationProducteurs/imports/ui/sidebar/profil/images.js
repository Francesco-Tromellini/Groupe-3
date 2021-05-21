import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';
import Images from '../../../api/images.js';
import './images.html';


Template.uploadedFiles.helpers({
  file: function () {
    return Images.findOne({_id: this.idProfil});
  },
});

Template.uploadForm.onCreated(function () {
  this.currentUpload = new ReactiveVar(false);
});

Template.uploadForm.helpers({
  currentUpload: function () {
    return Template.instance().currentUpload.get();
  },
});

Template.uploadForm.events({
  'change #fileInput': function (e, template) {
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      // We upload only one file, in case
      // there was multiple files selected
      var file = e.currentTarget.files[0];
      if (file) {
        var uploadInstance = Images.insert(
          {
            file: file,
            chunkSize: 'dynamic',
          },
          false
        );

        uploadInstance.on('start', function () {
          template.currentUpload.set(this);
        });

        uploadInstance.on('end', function (error, fileObj) {
          if (error) {
            window.alert('Error during upload: ' + error.reason);
          } else {
            window.alert('File "' + fileObj.name + '" successfully uploaded');
          }
          template.currentUpload.set(false);
        });

        uploadInstance.start();
        Session.set("idProfil", uploadInstance.config.fileId);
        console.log('Bonjour')
        console.log(file)
      }
    }
  },
});
