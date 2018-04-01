'use strict';
// Importing SASS files
import c from './src/scss/foundation/foundation.scss';
import appStyles from './src/scss/appStyles.scss';

// Importing CSS files
import css from './src/css/index.css';
// Importing TS files. Parcel can deal with ts files by default
import ts from './src/ts/index.ts';

// Import Js file and use
var $ = require('./src/js/jquery-3.3.1');
$('body').append('<h1>Jquery works </h1>');