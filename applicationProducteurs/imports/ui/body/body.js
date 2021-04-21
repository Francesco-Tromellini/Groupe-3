import { Template } from 'meteor/templating';

import { ObjetAnnonce } from '../../api/annonces.js';

import './body.html';

Template.body.helpers({
    annonces() {
        return ObjetAnnonce.find({});
    }
})
