#!/bin/env node
(function(module) {
  'use strict';

  var Cat = function(name) { // everybody loves cats
    this.name = name;
  };

  Cat.prototype.meow = function() {
    return 'meow';
  };

  Cat.prototype.sum = function() {
    var args = Array.prototype.slice.call(arguments),
      buffer = 0;
    args.forEach(function(number) {
      var parsed = parseInt(number, 10);
      if (!isNaN(parsed)) {
        buffer += number;
      }
    });
    return buffer;
  };

  Cat.prototype.copyArray = function(array) {
    return array.slice(0);
  };

  module.exports = Cat;
}(module || this));