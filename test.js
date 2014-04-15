var chai   = require('chai');
var exp    = require('./pretty-exponential');

var expect = chai.expect;

describe('prettyExponential', function () {
    it('outputs \'0\' when \'number\' is zero', function () {
        var result1 = exp(0.0);
        expect(result1).to.equal('0');

        var result2 = exp('0.0');
        expect(result2).to.equal('0');

        var result3 = exp('0');
        expect(result3).to.equal('0');

        var result4 = exp('0.00');
        expect(result4).to.equal('0');
    });

    it('omits base and exponent when exponent is zero', function () {
        var result1 = exp(1.23456);
        expect(result1).to.equal('1.23456');

        var result2 = exp(-3.2134);
        expect(result2).to.equal('-3.2134');
    });

    it('outputs results in normalized scientific notation', function () {
        var result1 = exp(0.31382);
        expect(result1).to.equal('3.1382×10⁻¹');

        var result2 = exp(-0.1823);
        expect(result2).to.equal('-1.823×10⁻¹');

        var result3 = exp(123.152);
        expect(result3).to.equal('1.23152×10²');

        var result4 = exp(-13.241);
        expect(result4).to.equal('-1.3241×10¹');

        var result5 = exp(0.00000000000000000000000000000091093822);
        expect(result5).to.equal('9.1093822×10⁻³¹');

        var result6 = exp(5973600000000000000000000);
        expect(result6).to.equal('5.9736×10²⁴');
    });

    it('outputs results with the specified precision', function () {
        var result1 = exp(0.021452, 2);
        expect(result1).to.equal('2.15×10⁻²');

        var result2 = exp(231.55236, 6);
        expect(result2).to.equal('2.315524×10²');
    });

    it('accepts numerical string values as \'number\'', function () {
        var result1 = exp('0.31382');
        expect(result1).to.equal('3.1382×10⁻¹');

        var result2 = exp('-0.1823');
        expect(result2).to.equal('-1.823×10⁻¹');

        var result3 = exp('123.152');
        expect(result3).to.equal('1.23152×10²');

        var result4 = exp('-13.241');
        expect(result4).to.equal('-1.3241×10¹');

        var result5 = exp('0.00000000000000000000000000000091093822');
        expect(result5).to.equal('9.1093822×10⁻³¹');

        var result6 = exp('5973600000000000000000000');
        expect(result6).to.equal('5.9736×10²⁴');
    });

    it('rejects non-numerical string values as \'number\'', function () {
        expect(function () { exp(null); }).to.throw(TypeError);
        expect(function () { exp(); }).to.throw(TypeError);
        expect(function () { exp('1.2a3'); }).to.throw(TypeError);
        expect(function () { exp(/1.013/); }).to.throw(TypeError);
        expect(function () { exp([1,2,3]); }).to.throw(TypeError);
    });

    it('rejects non-finite numerical values as \'number\'', function () {
        expect(function () { exp(NaN); }).to.throw(TypeError);
        expect(function () { exp(-Infinity); }).to.throw(TypeError);
        expect(function () { exp(+Infinity); }).to.throw(TypeError);
    });
});
