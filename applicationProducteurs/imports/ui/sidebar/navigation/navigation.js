import './navigation.html';
import './navigation.css';

Template.navigation.events({
    'mouseover': function() {
        if (this.id = 'art') {
            const art = document.getElementById('art_sous');
            art.style.display = 'block';
        }
        
    }
});

Template.navigation.events({
    'mouseout': function() {
        if (this.id = 'art') {
            const art = document.getElementById('art_sous');
            art.style.display = 'none';
        }
        
    }
});