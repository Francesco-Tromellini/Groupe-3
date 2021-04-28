import './navigation.html';
import './navigation.css';

Template.navigation.events({
    'mouseover .deroulant': function(event) {
        console.log(event.target.children)
    }
});