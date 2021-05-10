import './navigation.html';
//event 1er sous menu
Template.navigation.events({
    'mouseover .mesannonces': function() {
            const a = document.getElementsByClassName('mesannonces_sous');
            for (let i = 0; i <= 1; i++) {
                a[i].style.display = 'block';
            }
    }
});

Template.navigation.events({
    'mouseout .mesannonces': function() {
            const a = document.getElementsByClassName('mesannonces_sous');
            for (let i = 0; i <= 1; i++) {
                a[i].style.display = 'none';
            }
    }
});

// event 2e sous menu
/*Template.navigation.events({
    'mouseover .denr': function() {
            const d = document.getElementsByClassName('denr_sous');
            for (let i = 0; i <= 1; i++) {
                d[i].style.display = 'block';
            }
    }
});

Template.navigation.events({
    'mouseout .denr': function() {
            const d = document.getElementsByClassName('denr_sous');
            for (let i = 0; i <= 1; i++) {
                d[i].style.display = 'none';
            }
    }
});*/