var Cat = require('./cat'),
  pelos = new Cat('Pelos');

exports.test_meow = function(test) {
  test.expect(2);
  test.equal(pelos.meow(), 'meow', 'should return a "meow"');
  test.strictEqual(pelos.meow(), 'meow', 'should return a "meow"');
  test.done();
};

exports.test_sum = function(test) {
  test.expect(3);
  test.equal(pelos.sum(1, 2), 3, 'should return the sum of all params');
  test.equal(pelos.sum(5, 5, 10, 13), 33, 'should return the sum of all params');
  test.equal(pelos.sum(2 * 8, 3 * 9), 43, 'should return the sum of all params');
  test.done();
};

exports.test_copyArray = function(test) {
  var myArray = [],
    myOtherArray = [1,2,3],
    myLastArray = [
      { name: 'pancho' },
      { name: 'maria' },
      { name: 'pepe' }
    ];
  test.expect(3);
  test.deepEqual(pelos.copyArray(myArray), myArray, 'should copy the given array');
  test.deepEqual(pelos.copyArray(myOtherArray), myOtherArray, 'should copy the given array');
  test.deepEqual(pelos.copyArray(myLastArray), myLastArray, 'should copy the given array');
  test.done();
};
