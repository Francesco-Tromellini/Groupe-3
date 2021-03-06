import './login.html';
import '../signup/signup.js';

import { Meteor } from 'meteor/meteor';


Template.login.events({
    'submit .form-signin'(event) {
      //récupérer les données de l'email et du password 
      //trimInput: enlever les espaces blanc des inputs
      const email = trimInput(event.target.email.value);
      const password = trimInput(event.target.password.value);
      
      //recupérer le rôle de l'utilisateur : consommateur ou producteur
      let identite = Meteor.user().profile.role;

      //vérifier que les champs sont bien remplis 
      if (isNotEmpty(email)
              && isNotEmpty(password)
              && isEmail(email)
              && isValidPassword(password)) {
        Meteor.loginWithPassword(email, password, function(err) {
          if (err) {
            Bert.alert(err.reason, 'danger', 'growl-top-right');
            return false;
          }
          
          //gérer le routing en fonction du role des utilisateurs 
          if (identite == "producteur") {
            setTimeout(() => FlowRouter.go('visualisation'), 200);
          } else if (identite == "consommateur") {
            setTimeout(() => FlowRouter.go('consVisualisation'), 200)
          }
        });
      }
  
      return false; // Prevent Submit
    },
  
  });
  
  
  // Règles de validation pour le formulaire
  let trimInput = function(val) {
    return val.replace(/^\s*|\s*$/g, '');
  };
  
  let isNotEmpty = function(value) {
    if (value && value !== '') {
      return true;
    }
    Bert.alert("S'il-vous-plaît remplissez tous les champs !", 'danger', 'growl-top-right');
    return false;
  };
  
  // Validation de l'email
  isEmail = function(value) {
    const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (filter.test(value)) {
      return true;
    }
    Bert.alert("S'il-vous-plaît utilisez une adresse E-mail valide !", 'danger', 'growl-top-right');
    return false;
  };
  
  // Vérification du password
  isValidPassword = function(password) {
    if (password.length < 6) {
      Bert.alert("Le mot de passe doit contenir 6 charactères au minimum", 'danger', 'growl-top-right');
      return false;
    }
    return true;
  };
  
  // Vérification de la correspondance du password
  areValidPasswords = function(password, confirm) {
    if (!isValidPassword(password)) {
      return false;
    }
    if (password !== confirm) {
      Bert.alert("Les mots de passe ne correspondent pas", 'danger', 'growl-top-right');
      return false;
    }
    return true;
  };