import './visualisation.css';
import './visualisation.html';
import '../annonce/annonce.js';
import '../sidebar/sidebar.js';

import ImagesAnnonces from '../../api/annonces.js';

// Mots clef
import { Template } from 'meteor/templating';

// Importer DB
import { ObjetAnnonce } from '../../api/annonces.js';



//afficher l'image
Template.visualisation.helpers({
    imageFile() {
        return ImagesAnnonces.findOne();
    }
});

Template.visualisation.helpers({
    objet () {
        return ObjetAnnonce.find({}, { sort: { createdAt: 1}});
    },
});

Template.visualisation.events({
    'submit .annonce-post' : function (event){

        // Prevent default element
        event.preventDefault();

        // Get value from form element
        const target = event.target;
        let descriptionVal =  target.annoncePost.value;
        let titreVal = target.annonceName.value;
        let codePostalVal = target.annonceCode.value;
        let imgVal = target['annonceImage'].value;
        
        
        console.log(imgVal)

        // Insert the Annonce in the collection
        if(titreVal != '' && descriptionVal != '' && codePostalVal != ''){
            ObjetAnnonce.insert({
                title : titreVal,
                description : descriptionVal,
                postalCode : codePostalVal,
                photo : imgVal,
                createdAt : new Date(),
            });
            
            // Clear form
            target.annonceName.value = '';
            target.annoncePost.value = '';
            target.annonceCode.value='';
            alert('Votre annonce est publiéee');
        } else { 
            alert('Veuillez remplir tous les champs');
        }
    },
});

Template.visualisation.onCreated(function () {
    this.currentUpload = new ReactiveVar(false);
  });

  Template.visualisation.helpers({
    currentUpload: function () {
      return Template.instance().currentUpload.get();
    }
  });
  
  Template.visualisation.events({
    'change #fileInput': function (e, template) {
      if (e.currentTarget.files && e.currentTarget.files[0]) {
        // We upload only one file, in case
        // there was multiple files selected
        var file = e.currentTarget.files[0];
        if (file) {
          var uploadInstance = ImagesAnnonces.insert({
            file: file,
            chunkSize: 'dynamic'
          }, false);
  
          uploadInstance.on('start', function() {
            template.currentUpload.set(this);
          });
  
          uploadInstance.on('end', function(error, fileObj) {
            if (error) {
              window.alert('Error during upload: ' + error.reason);
            } else {
              window.alert('File "' + fileObj.name + '" successfully uploaded');
            }
            template.currentUpload.set(false);
          });
  
          uploadInstance.start();
        }
      }
    }
  });
