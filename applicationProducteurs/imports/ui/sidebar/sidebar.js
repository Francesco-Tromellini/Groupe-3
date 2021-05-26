import './sidebar.html'
import './sidebar.css';
import './profil/profil.js';
import './navigation/navigation.js';
import './likes/likes.js';
import './profil/images.js';


import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Meteor } from 'meteor/meteor'

import Images from '../../api/images.js';

Template.sidebar.helpers({
    imageFile(){
        return Images.findOne();
    },
});

Template.sidebar.events({
    'change .profilPicture': function () {
        let idProfil = Session.get('idProfil');

        Session.set('idProfil', '');

        Meteor.users.update({_id: Meteor.userId() }, { $set: { 'profile.idProfil': idProfil } });

        console.log(Meteor.user().profile.idProfil);

    

    }
})