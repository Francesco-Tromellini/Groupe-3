//Base de données pour les images de profil 
import { FilesCollection } from 'meteor/ostrio:files';

//création de la collection
const Images = new FilesCollection({
  debug: true,
  collectionName: 'Images',
  allowClientCode: false, 
  onBeforeUpload: function (file) {
    // Autorisation du téléchargement de fichiers de taille 10MB et seulement en formats png/jpg/jpeg
    if (file.size <= 1024 * 1024 * 10 && /png|jpe?g/i.test(file.extension)) {
      return true;
    }
    //Message si le fichier est trop important
    return 'S\'il vous plaît, téléchargez une image de taille égale ou inférieure à 10MB';
  },
});

export default Images;
