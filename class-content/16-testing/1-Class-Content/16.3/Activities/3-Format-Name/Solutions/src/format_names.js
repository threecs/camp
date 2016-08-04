'use strict';

function format_names (name_list) {
  if (!Array.isArray(name_list))
    throw new Error("format_names expects an array. " + name_list + " is not an array.");
  else if (!name_list.length)
    // Hm. Can we get rid of this?
    return '';
  else if (name_list.length === 1)
    // Hm. Can we get rid of this?
    return name_list[0];
  else if (name_list.length === 2)
    // Hm. Can we get rid of this?
    return name_list[0] + ' & ' + name_list[1];
  else {
    var names = "";

    var length = name_list.length;
    for (var i = 0; i < length; i += 1) {
      var separator;

      if (i === 0)
        separator = '';
      else if (i == length - 1)
        separator = ' & ';
      else
        separator = ', ';
      
      names += separator + name_list[i];
    }

   return names;
  }
}

module.exports = format_names;
