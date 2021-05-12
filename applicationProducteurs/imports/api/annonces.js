import { Mongo } from 'meteor/mongo';


// Variable DB
export const ObjetAnnonce = new Mongo.Collection('ObjetAnnonce');



/*
//nouvelle FS collection en lien avec notre package
 const ProfileImages = new FilesCollection({
     collectionName: "ProfileImages",
     allowClientCode: true,
     onBeforeUpload(file) {
        // Allow upload files under 10MB, and only in png/jpg/jpeg formats
        if (file.size <= 10485760 && /png|jpg|jpeg/i.test(file.extension)) {
          return true;
        }
        return 'Please upload image, with size equal or less than 10MB';
      }
    });
    
    if (Meteor.isClient) {
      Meteor.subscribe('files.images.all');
    }
    
    if (Meteor.isServer) {
      Meteor.publish('files.images.all', function () {
        return ProfileImages.find().cursor;
      });
    }
    */