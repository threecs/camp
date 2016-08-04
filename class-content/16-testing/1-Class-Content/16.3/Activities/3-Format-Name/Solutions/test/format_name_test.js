'use strict';

var format_names = require('../src/format_names_clean.js'),
  should = require('chai').should();

describe("format_names", function () {

  it("should throw if it doesn't receive an array", function () {
    (function () { format_names("HAHAHA!") }).should.throw(Error);
  })

  it("should return empty string when it gets an empty list", function () {
    (format_names([])).should.equal('');
  });

  it("should print a single name if it only receives one", function () {
    (format_names(['Pushkin'])).should.equal('Pushkin');
  });

  it("should print names separated with an ampersand if it receives two", function () {
    (format_names(['Pushkin', 'Gogol'])).should.equal('Pushkin & Gogol');
  });

  it("should separate initial names with commas and last with ampersand for long lists", function () {
    (format_names(['Pushkin', 'Gogol', 'Dostoevsky'])).should.equal('Pushkin, Gogol & Dostoevsky');
  });

})
