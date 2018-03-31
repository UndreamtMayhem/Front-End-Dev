// Process js
import greet from './greeter';

// Bring in a node module
import * as _ from 'lodash';
// Process css
import './../css/app.css';
// Process sass
import './../styles/appStyles.scss';

/* Adding images to a project via js */
import natureImg from '../images/autumn.jpg';

var frontImg = document.getElementById('frontImg');
frontImg.src = natureImg;

var timeContainer = document.getElementById('.time');
timeContainer.innerHTML("Welcome! Greetings from app.js. Let's learn Webpack2 " + greet());


// Using node module
var arr=[ 1, 2, 3];
_.each(arr, function(val) {
 console.log('Output from Lodash _.each for Element ' + val);

});