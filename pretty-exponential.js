/*!
 *  pretty-exponential 1.0.2 (https://github.com/bmcustodio/pretty-exponential)
 *  Copyright 2014 Bruno M. Custódio
 *  MIT License
 */

(function () {

    'use strict';

    var exponents = {
        '0': '⁰',
        '1': '¹',
        '2': '²',
        '3': '³',
        '4': '⁴',
        '5': '⁵',
        '6': '⁶',
        '7': '⁷',
        '8': '⁸',
        '9': '⁹',
        '-': '⁻'
    };

    var regex = /(\-?\d(?:\.\d+)?)e\+?(\-?\d+)/;

    var prettyExponential = function (number, precision) {
        if (number === null) {
            throw new TypeError('Non-numerical or non-finite value found');
        }

        var matches = Number(number).toExponential(precision).match(regex);

        if (!matches) {
            throw new TypeError('Non-numerical or non-finite value found');
        }

        var significand = matches[1], oldExponent = matches[2];

        if (parseInt(oldExponent, 10) === 0) {
            return significand;
        }

        var exponent = '';

        for (var index = 0; index < oldExponent.length; index += 1) {
            exponent += exponents[oldExponent[index]];
        }

        return significand + '×' + '10' + exponent;
    };

    if (typeof module !== 'undefined') {
        module.exports = prettyExponential;
    } else {
        window.prettyExponential = prettyExponential;
    }

}());
