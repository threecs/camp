'use strict';

function format_names (name_list) {
  if (!Array.isArray(name_list))
    throw new Error("format_names expects an array. " + name_list + " is not an array.");
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
