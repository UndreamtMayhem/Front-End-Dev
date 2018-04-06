module.exports = (function () {
    'use strict';

    var potionA = require('../potions/PotionA');

    return {
        getPotionA: function () {
            return potionA;
        },
    };
}());
