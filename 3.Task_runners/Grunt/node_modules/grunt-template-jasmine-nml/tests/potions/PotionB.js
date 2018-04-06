module.exports = (function () {
    'use strict';

    var Utils = require('alchemy.js/lib/Utils');
    var potionC = require('./PotionC');

    return Utils.extend(potionC, {

        name: 'Potion B',

        getName: function () {
            return potionC.getName.call(this) + ' (extended B)';
        },
    });
}());
