module.exports = (function () {
    'use strict';

    var Utils = require('alchemy.js/lib/Utils');
    var potionB = require('./PotionB');
    var potionD = require('./PotionD');

    return Utils.extend(potionB, {

        name: 'Potion A',

        otherName: 'Potion A (other name)',

        getName: function () {
            return potionB.getName.call(this) + ' (extended A)';
        },

        getOtherName: function () {
            return potionD.getName.call(this);
        }
    });
}());
