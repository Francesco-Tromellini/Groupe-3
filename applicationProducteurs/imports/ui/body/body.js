import { Template } from 'meteor/templating';

import { ObjetAnnonce } from '../../api/annonces.js';

import './body.html';
import '../imports/ui/body/body.js';

Template.body.helpers({
    annonces() {
        return ObjetAnnonce.find({});
    }
})
