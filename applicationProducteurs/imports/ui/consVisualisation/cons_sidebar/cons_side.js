import './cons_side.html';
import './cons_side.css';
import './cons_profil/cons_profil.js';
import './cons_nav/cons_nav.js';
import '../../sidebar/profil/images.js';
import '../../sidebar/profil/images.js';


import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Meteor } from 'meteor/meteor'

//importer BD
import Images from '../../../api/images.js';

//retourner l'image de profil de l'utilisateur
Template.cons_sidebar.helpers({
    imageFile(){
        return Images.findOne();
    },
});

Template.cons_sidebar.events({
    'change .profilPicture': function () {
        //récupérer le contenu qui a été stocké dans images.js
        let idProfil = Session.get('idProfil');

        Session.set('idProfil', '');

        //changer la valeur de la photo de profil dans la BD 
        Meteor.users.update({_id: Meteor.userId() }, { $set: { 'profile.idProfil': idProfil } });


    }
})