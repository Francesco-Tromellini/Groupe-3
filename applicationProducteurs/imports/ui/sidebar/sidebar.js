import './sidebar.html'
import './sidebar.css';
import './profil/profil.js';
import './navigation/navigation.js';
import './likes/likes.js';
import './profil/images.js';

// Mots clef
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Meteor } from 'meteor/meteor'

//importer BD
import Images from '../../api/images.js';

//retourner l'image de profil de l'utilisateur
Template.sidebar.helpers({
    imageFile(){
        return Images.findOne();
    },
});

Template.sidebar.events({
    'change .profilPicture': function () {
        //récupérer le contenu qui a été stocké dans images.js
        let idProfil = Session.get('idProfil');

        Session.set('idProfil', '');

        //changer la valeur de la photo de profil dans la BD de l'utilisateur
        Meteor.users.update({_id: Meteor.userId() }, { $set: { 'profile.idProfil': idProfil } });


    }
})