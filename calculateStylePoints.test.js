const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
    it('should remove max score and min score ', () => {
        const actual = calculateStylePoints([10, 11, 12, 13, 13.5]);

        const expected = 36;

        assert.equal(actual, expected);
    });

    it('should remove only one min and one max score', () => {
        const actual = calculateStylePoints([9, 9, 12, 13, 13]);

        const expected = 34;

        assert.equal(actual, expected);
    });

    it('should sum up three numbers out of five in an array', () => {
        const actual = calculateStylePoints([10, 11, 11, 15, 17]);

        const expected = 37;

        assert.equal(actual, expected);
    });
});