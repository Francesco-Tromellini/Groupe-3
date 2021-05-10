import './profil.html';
import './profil.css';


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