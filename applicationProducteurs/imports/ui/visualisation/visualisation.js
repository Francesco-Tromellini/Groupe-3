import './visualisation.css';
import './visualisation.html';
import '../annonce/annonce.js';
import '../sidebar/sidebar.js';



// Mots clef
import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';


// Importer DB
import { ObjetAnnonce } from '../../api/annonces.js';



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
