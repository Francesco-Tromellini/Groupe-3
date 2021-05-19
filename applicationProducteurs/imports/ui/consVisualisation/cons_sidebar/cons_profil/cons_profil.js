import './cons_profil.html';
import '../../../sidebar/profil/images.js';
import Images from '../../../../api/images.js';

//afficher l'image
Template.profil.helpers({
    imageFile() {
        
        return Images.findOne();
        
    }
});