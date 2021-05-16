
import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import './filtre.html';
import { ObjetAnnonce } from '../../api/annonces';

Template.filtres.events({
    'submit .form-filtres' : function (event) {
        event.preventDefault();

        let bijoux = document.getElementById('bijoux');
        let vêtements = document.getElementById('vêtements');
        let maraîcher = document.getElementById('maraîcher');
        let poissonier = document.getElementById('poissonier');
        console.log("template filtres activé")

        let bijouxTableau = [];
        console.log(bijouxTableau);
        let vêtementsTableau = [];
        let maraîcherTableau = [];
        let poissonierTableau = [];

        if (bijoux.checked == true) {
            bijouxTableau.push(bijoux.value);
            console.log("réussi")

        } else if (vêtements.checked == true) {
            vêtementsTableau.push(vêtements.value);
        } else if (maraîcher.checked == true) {
            maraîcherTableau.push(maraîcher.value);
        } else if (poissonier.checked == true) {
            poissonierTableau.push(vêtments.value);
        }

        let tableauFiltres = {
            bijouxTableau,
            vêtementsTableau,
            maraîcherTableau,
            poissonierTableau,
        };

    
       Meteor.call('ObjetAnnonce.add', tableauFiltres, (err) => {
            if (err) {
                alert(err);
            }
            else {
                console.log(tableauFiltres);
                console.log("réussi");
            }
            
        });

    }
});

