
import { getRegresion1 } from './getRegresion1'


describe('getRegresion', () => {
  it('should return the fact of the numbers', () => {
    const getResultRegresion = getRegresion1([130,650,99,150,128,302,95,945,368,961],[186,699,132,272,291,331,199,1890,788,1601]);
    expect(getResultRegresion).toEqual([-22.552532752034267, 1.727932426206986 , 0.9545]);

    
  });
});
