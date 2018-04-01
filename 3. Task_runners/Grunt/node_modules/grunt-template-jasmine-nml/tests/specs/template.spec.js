describe('node module loader template', function () {
    'use strict';

    it('can require potions', function () {
        expect(require('../../tests/potions/PotionA').getName()).toBe(
            'Potion A (extended B) (extended A)'
        );

        expect(require('../../tests/potions/PotionA').getOtherName()).toBe(
            'Potion A (other name)'
        );

        expect(require('../../tests/potions/PotionB').getName()).toBe(
            'Potion B (extended B)'
        );
    });

    it('allows helper to require potions', function () {
        // prepare
        var helper = require('../../tests/helpers/SomeHelper');

        // execute
        var potion = helper.getPotionA();

        // verify
        expect(typeof potion).toBe('object');
        expect(typeof potion.getName).toBe('function');
        expect(potion.getName()).toBe('Potion A (extended B) (extended A)');
    });
});

