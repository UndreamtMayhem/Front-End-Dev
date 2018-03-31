/*import * as helperModule from './my-helper-module';*/
import greet from './greeter';

import * as _ from 'lodash';
import './../css/app.css';
import './../styles/appStyles.scss';
/*
import homeIcon from '../images/icon.gif';
var homeImg = document.getElementById('icon');
homeImg.src = homeIcon;
import natureImg from '../images/autumn.jpg';
var frontImg = document.getElementById('frontImg');
frontImg.src = natureImg;
*/


console.log("Welcome! Greetings from app.js. Let's learn Webpack2");
console.log(greet());

var arr=[ 1, 2, 3];
_.each(arr, function(val) {
 console.log('Output from Lodash _.each for Element ' + val);

});