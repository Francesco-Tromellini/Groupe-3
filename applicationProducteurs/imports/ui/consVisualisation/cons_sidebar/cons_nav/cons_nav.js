import './cons_nav.html';
import './cons_nav.css';


// event qui déroule le sous menu de "Artisanat"
Template.cons_navigation.events({
  'mouseover .art': function () {
    const a = document.getElementsByClassName('art_sous');
    for (let i = 0; i <= 1; i++) {
      a[i].style.display = 'block';
    }
  },
});

// event qui masque le sous menu de "artisanat"
Template.cons_navigation.events({
  'mouseout .art': function () {
    const a = document.getElementsByClassName('art_sous');
    for (let i = 0; i <= 1; i++) {
      a[i].style.display = 'none';
    }
  },
});

// event qui déroule le sous menu "denrée"
Template.cons_navigation.events({
  'mouseover .denr': function () {
    const d = document.getElementsByClassName('denr_sous');
    for (let i = 0; i <= 1; i++) {
      d[i].style.display = 'block';
    }
  },
});

// event qui masque le sous menu "denrée"
Template.cons_navigation.events({
  'mouseout .denr': function () {
    const d = document.getElementsByClassName('denr_sous'); // récuper les div dans un tableau
    for (let i = 0; i <= 1; i++) { // itérer sur tous les div
      d[i].style.display = 'none'; // changer le style du display pour le masquer (même logique au dessus)
    }
  },
});
