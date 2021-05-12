import './profil.html';
import './profil.css';
import './images.js';


/* CODE POUR L'INSTANT QUI NE MARCHE PAS EN LIEN AVEC L'IMAGE
Template.profil.events({
    //commit to the db
    "submit .edit-profile": function(event) {
        var file = $('#profileImage').get(0).files[0];

        if (file) {
            //faire un nouveau fs file avec le package que l'on a téléchargé
            fsFile = new FS.File(file);
        }
    }
})
*/