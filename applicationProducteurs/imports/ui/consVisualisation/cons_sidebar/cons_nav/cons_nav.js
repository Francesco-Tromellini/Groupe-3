import './cons_nav.html';
import './cons_nav.css';


// event qui déroule les sous menu
Template.cons_navigation.events({
  'mouseover .art': function () {
    const a = document.getElementsByClassName('art_sous');
    for (let i = 0; i <= 1; i++) {
      a[i].style.display = 'block';
    }
  },
  'mouseout .art': function () {
    const a = document.getElementsByClassName('art_sous');
    for (let i = 0; i <= 1; i++) {
      a[i].style.display = 'none';
    }
  },
  'mouseover .denr': function () {
    const d = document.getElementsByClassName('denr_sous');
    for (let i = 0; i <= 1; i++) {
      d[i].style.display = 'block';
    }
  },
  'mouseout .denr': function () {
    const d = document.getElementsByClassName('denr_sous'); // récuper les div dans un tableau
    for (let i = 0; i <= 1; i++) { // itérer sur tous les div
      d[i].style.display = 'none'; // changer le style du display pour le masquer (même logique au dessus)
    }
  }

});