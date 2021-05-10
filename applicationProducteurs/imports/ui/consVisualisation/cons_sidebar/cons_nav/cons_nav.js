import './cons_nav.html';
import './cons_nav.css';

Template.cons_navigation.events({
    'mouseover .art': function() {
            const a = document.getElementsByClassName('art_sous');
            for (let i = 0; i <= 1; i++) {
                a[i].style.display = 'block';
            }
    }
});

Template.cons_navigation.events({
    'mouseout .art': function() {
            const a = document.getElementsByClassName('art_sous');
            for (let i = 0; i <= 1; i++) {
                a[i].style.display = 'none';
            }
    }
});

// event 2e sous menu
Template.cons_navigation.events({
    'mouseover .denr': function() {
            const d = document.getElementsByClassName('denr_sous');
            for (let i = 0; i <= 1; i++) {
                d[i].style.display = 'block';
            }
    }
});

Template.cons_navigation.events({
    'mouseout .denr': function() {
            const d = document.getElementsByClassName('denr_sous');
            for (let i = 0; i <= 1; i++) {
                d[i].style.display = 'none';
            }
    }
});