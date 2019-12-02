const assert = require('assert');
const calculateDistancePoints = require ('./calculateDistancePoints');

describe('calculateDistancePoints', () => {

    describe('mamut', () => {
        it('should add 120 points if the hillSize is "mamut" ', () => {
            const actual = calculateDistancePoints(227.5, "mamut", 200);
        
                const expected = 153;
        
                assert.equal(actual, expected);
        });
        it('should add 1.2 points for every meter of distance more then kPoint', () => {
            const actual = calculateDistancePoints(226, "mamut", 200);
        
                const expected = 151.2;
        
                assert.equal(actual, expected);
        });
        it('should subtract 1.2 points for every meter of distance less than kPoint', () => {
            const actual = calculateDistancePoints(194, "mamut", 200);
        
                const expected = 112.8;
        
                assert.equal(actual, expected);
        });
    });

    describe('big', () => {
        it('should add 60 point if the hillsize is "big" ', () => {
            const actual = calculateDistancePoints(132, "big", 120);
          
            const expected = '81.6';
      
            assert.equal(actual, expected);  
          });
        it('should add 1.8 points for every meter of distance more then kPoint', () => {
            const actual = calculateDistancePoints(131, "big", 120);
        
                const expected = 79.8;
        
                assert.equal(actual, expected);
        });
        it('should subtract 1.8 points for every meter of distance less than kPoint', () => {
            const actual = calculateDistancePoints(119.5, "big", 120);
        
                const expected = 59.1;
        
                assert.equal(actual, expected);
        }); 
    });

    describe('normal', () => {
        it('should add 60 point if the hillsize is "normal" ', () => {
            const actual = calculateDistancePoints(100.5, "normal", 98);
          
            const expected = '65';
      
            assert.equal(actual, expected);  
          });
        it('should add 2 points for every meter of distance more then kPoint', () => {
            const actual = calculateDistancePoints(111, "normal", 98);
        
                const expected = 86;
        
                assert.equal(actual, expected);
        });
        it('should subtract 2 points for every meter of distance less than kPoint', () => {
            const actual = calculateDistancePoints(97, "normal", 98);
        
                const expected = 58;
        
                assert.equal(actual, expected);
        });    
    });
    
});