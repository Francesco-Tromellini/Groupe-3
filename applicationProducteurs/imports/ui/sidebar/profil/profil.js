import './profil.html';
import './profil.css';
import './images.js';
import '../sidebar.js'

import Images from '../../../api/images.js';

//afficher l'image
Template.profil.helpers({
  imageFile() {
    console.log(Images.findOne())
    return Images.findOne();
    
  },
});
