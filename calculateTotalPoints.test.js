const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {
    it('should calculate distance points, style points and sum it up with windFactor and gateFactor', () => {
        const actual = calculateTotalPoints(227.5, "mamut", 200, [18, 18.5, 17.5, 18.5, 18.5], -8.4, 8.7);

        const expected = 208.3;

        assert.equal(actual, expected);
    });
});