import { Mongo } from 'meteor/mongo';
import { FilesCollection } from 'meteor/ostrio:files';


// Variable DB
export const ObjetAnnonce = new Mongo.Collection('ObjetAnnonce');

const ImagesAnnonces = new FilesCollection({
    debug: true,
    collectionName: 'ImagesAnnonces',
    allowClientCode: false, // Disallow remove files from Client
    onBeforeUpload: function (file) {
      // Allow upload files under 10MB, and only in png/jpg/jpeg formats
      if (file.size <= 1024 * 1024 * 10 && /png|jpe?g/i.test(file.extension)) {
        return true;
      }
      return 'Please upload image, with size equal or less than 10MB';
    }
  });

export default ImagesAnnonces;
