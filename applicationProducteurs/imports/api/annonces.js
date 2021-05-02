import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

// Variable DB
export const ObjetAnnonce = new Mongo.Collection('ObjetAnnonce');

// Ecriture des methodes
Meteor.methods({
    'annonce.insert'(text){
        ObjetAnnonce.insert({
            text,
        });
        console.log('success');
    },
});