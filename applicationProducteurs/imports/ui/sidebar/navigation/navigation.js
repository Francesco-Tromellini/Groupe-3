import './navigation.html';

//event qui déroule les sous menus
Template.navigation.events({
    'mouseover .mesannonces': function() {
            const a = document.getElementsByClassName('mesannonces_sous');
            for (let i = 0; i <= 2; i++) {
                a[i].style.display = 'block';
            }
    },
    'mouseout .mesannonces': function() { // cache le sous menu
        const a = document.getElementsByClassName('mesannonces_sous'); 
        for (let i = 0; i <= 2; i++) {
            a[i].style.display = 'none';
        }
}
});