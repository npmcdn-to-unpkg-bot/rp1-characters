import {expect} from 'chai';
import lib from './index';

describe('rp1-characters', () => {
  describe('all', () => {
    it('should be an array of characters', () => {
      expect(lib.all).to.satisfy(isArrayOfCharacters);

      function isArrayOfCharacters(array) {
        return array.every((item) => {
          return  typeof item === 'object' &&
                  item.name !== undefined &&
                  item.avatar !== undefined;
        });
      }
    });

    it('should contain Parzival', () => {
      expect(lib.all).to.include({name: 'Wade Owen Watts', avatar: 'Parzival'});
    });
  });

  describe('random', () => {
    it('should return a random item from lib.all', () => {
      const randomItem = lib.random();

      expect(lib.all).to.include(randomItem);
    });

    it('should return an array of random items if passed a number', () => {
      const randomItems = lib.random(3);

      expect(randomItems).to.have.length(3);

      randomItems.forEach((item) => {
        expect(lib.all).to.include(item);
      });
    });
  });
});
