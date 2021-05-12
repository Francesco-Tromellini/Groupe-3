import './profil.html';
import './profil.css';
import './images.js';
import Images from '../../../api/images.js';


Template.profil.helpers({
    imageFile() {
        const image = Images.find({});
        console.log(image);
        return Images.findOne();
    }
});

