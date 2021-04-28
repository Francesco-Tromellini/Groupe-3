import './navigation.html';
import './navigation.css';

Template.navigation.events({
    'mouseover .deroulant': function() {
        console.log('over');
    }
});