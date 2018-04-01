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

var timeContainer = document.getElementById('time');

var h2 = document.createElement("h2");        // Create a <h2> element
var t = document.createTextNode("Greetings from app.js. Let\'s learn Webpack2 " + greet());       // Create a text node
h2.appendChild(t);                                // Append the text to <h2>
timeContainer.appendChild(h2);                  // Append <h2> to timeContainer

// Using node module
var arr=[ 1, 2, 3];
_.each(arr, function(val) {
 console.log('Output from Lodash _.each for Element ' + val);

});