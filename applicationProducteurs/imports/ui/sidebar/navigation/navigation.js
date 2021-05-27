import './navigation.html';

//event qui déroule les sous menus
Template.navigation.events({
    'mouseover .mesannonces': function() {
            const a = document.getElementsByClassName('mesannonces_sous');
            for (let i = 0; i <= 2; i++) {
                a[i].style.display = 'block';
            }
    }
});
// event qui cache le sous menu
Template.navigation.events({
    'mouseout .mesannonces': function() {
            const a = document.getElementsByClassName('mesannonces_sous');
            for (let i = 0; i <= 2; i++) {
                a[i].style.display = 'none';
            }
    }
});