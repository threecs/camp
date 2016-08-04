'use strict';

function PageUtilities (post_count, pagination_limit) {

  // Set instance page_count
  this.posts = post_count;

  // Set instance pagination limit
  this.pagination = pagination_limit;

}

PageUtilities.prototype.posts_on_page = function posts_on_page (page_number) {
  if (page_number <= 0 || page_number > this.total_pages())
    return -1;
  else if (page_number < this.total_pages())
    return this.pagination;
  else if (page_number === this.total_pages())
    return this.posts - (this.pagination * this.init());
}


PageUtilities.prototype.init = function init () {
  return this.total_pages() - 1;
}

PageUtilities.prototype.total_pages = function total_pages () {
  return Math.ceil(this.posts / this.pagination);
}

module.exports = PageUtilities;
