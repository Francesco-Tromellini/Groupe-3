import './signup.html';
import '../choice/choice.js';


//récupérer le contenu des inputs 
Template.signup.events({
  'submit .form-signup'(event) {
    const username = trimInput(event.target.username.value);
    const email = trimInput(event.target.email.value);
    const password = trimInput(event.target.password.value);
    const password2 = trimInput(event.target.password2.value);
    const identite = trimInput(event.target.formControlSelect.value);

    //conditions de validation : les champs sont tous remplis
    if (
      isNotEmpty(email) &&
      isNotEmpty(username) &&
      isNotEmpty(password) &&
      isEmail(email) &&
      areValidPasswords(password, password2) &&
      isNotEmpty(identite)
    ) {
      Accounts.createUser(
        {
          username: username,
          email: email,
          password: password,
          profile: {
            //consommateur ou producteur 
            role: identite, 
            //nombre de likes du producteur
            likes: 0,
            //image de profil
            idProfil: '', 
          },
        },
        function (err) {
          if (err) {
            Bert.alert(err.reason, 'danger', 'growl-top-right');
          } else {
            Bert.alert(
              'Compte créé ! Vous êtes maintenant connecté',
              'success',
              'growl-top-right'
            );
            //la condition qui définit le routing
            if (identite == 'producteur') {
              setTimeout(() => FlowRouter.go('visualisation'), 200);
            } else if (identite == 'consommateur') {
              setTimeout(() => FlowRouter.go('consVisualisation'), 200);
            }
          }
        }
      );
    }

    return false;
  },
});

// Règles de validation pour le formulaire

// Trim Helper
let trimInput = function (val) {
  return val.replace(/^\s*|\s*$/g, '');
};

let isNotEmpty = function (value) {
  if (value && value !== '') {
    return true;
  }
  Bert.alert(
    "S'il-vous-plaît remplissez tous les champs !",
    'danger',
    'growl-top-right'
  );
  return false;
};

// Validate Email
isEmail = function (value) {
  const filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (filter.test(value)) {
    return true;
  }
  Bert.alert(
    "S'il-vous-plaît utilisez une adresse E-mail valide !",
    'danger',
    'growl-top-right'
  );
  return false;
};

// Check Password Field
isValidPassword = function (password) {
  if (password.length < 6) {
    Bert.alert(
      'Le password doit contenir 6 charactères au minimum',
      'danger',
      'growl-top-right'
    );
    return false;
  }
  return true;
};

// Match password
areValidPasswords = function (password, confirm) {
  if (!isValidPassword(password)) {
    return false;
  }
  if (password !== confirm) {
    Bert.alert(
      'Les passwords ne correspondent pas',
      'danger',
      'growl-top-right'
    );
    return false;
  }
  return true;
};
