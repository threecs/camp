'use strict';

var PageUtilities = require('../src/PageUtilities.js'),
  should = require('chai').should();

describe('page_utilities', function () {

  var page_utilities = new PageUtilities(10, 3);

  it('should keep track of how many pages are in the blog', function () {
    page_utilities.posts.should.equal(10); 
  });

  it('should keep track of the blog\'s pagination limit', function () {
    page_utilities.pagination.should.equal(3);
  });

  it('should keep track of the blog\'s total page count', function () {
    (page_utilities.total_pages()).should.equal(4);
  });

  describe('should determine how many posts are on page number n', function () {

    it('should determine how many posts are on a middle page', function () {
      // Third page has 3 items.
      page_utilities.posts_on_page(3).should.equal(3);
    });


    it('should determine how many posts are on the last page', function () {
      // Fourth page has 1 item.
      page_utilities.posts_on_page(4).should.equal(1);
    });


    it('should handle the error case gracefully', function () {
      // Fifth page does not exist. You could also choose to throw, or return 0.
      page_utilities.posts_on_page(5).should.equal(-1);
    });
  });

});
