import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

// Variable DB
export const ObjetAnnonce = new Mongo.Collection('ObjetAnnonce');

// Ecriture des methodes
/*
Meteor.methods({
    'annonce.insert'(text){
        let ajout = ObjetAnnonce.insert({
            text : text,
            titre : text,
        });
        console.log(`success: ${text}`);
        return ajout;
    },
});
*/