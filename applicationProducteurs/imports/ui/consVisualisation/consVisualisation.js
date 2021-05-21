import './consVisualisation.html';
import './consVisualisation.css';
import '../annonce/annonce.js';
import './cons_sidebar/cons_side.js';
import '../../api/annonces.js';

// Mots clef
import { Template } from 'meteor/templating';

import { ObjetAnnonce } from '../../api/annonces.js';

Template.consVisualisation.helpers({
  objet() {
    return ObjetAnnonce.find({}, { sort: { createdAt: 1 } });
  },
  imageFile() {
    return ImagesAnnonces.findOne();
  },
});
