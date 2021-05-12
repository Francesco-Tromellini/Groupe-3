import './profil.html';
import './profil.css';
import './images.js';
import Images from '../../../api/images.js';

//afficher l'image
Template.profil.helpers({
    imageFile() {
        const image = Images.find({});
        return Images.findOne();
    }
});

