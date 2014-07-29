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
    var args = Array.prototype.slice.call(arguments);
    return arg.reduce(function(prev, current){
      return prev + current
    }, 0);
  };

  Cat.prototype.copyArray = function(array) {
    return array.slice(0);
  };

  module.exports = Cat;
}(module || this));
