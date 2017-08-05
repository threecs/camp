'use strict';

/**
 * Create an array of length _length filled with
 *   pseudo-random values.
 */
 function generate (_length) {

   const arr = [];

   for (let i = 0; i < _length; i += 1) {
     arr.push(Math.ceil(Math.random() * _length));
   }

   return arr;
 }

module.exports = generate;
