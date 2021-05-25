import './navigation.html';
//event 1er sous menu
Template.navigation.events({
    'mouseover .mesannonces': function() {
            const a = document.getElementsByClassName('mesannonces_sous');
            for (let i = 0; i <= 2; i++) {
                a[i].style.display = 'block';
            }
    }
});

Template.navigation.events({
    'mouseout .mesannonces': function() {
            const a = document.getElementsByClassName('mesannonces_sous');
            for (let i = 0; i <= 2; i++) {
                a[i].style.display = 'none';
            }
    }
});