function add(value1) {
  return function doAdd(value2) {
    return value1 + value2;
  };
}

var increment = add(3);
var foo = increment(4);


//what does foo equal to? Explain why to your partners

































/*

Solution:

foo is 7

There are a number of things to note about this example.

The add() function returns its inner function doAdd(). 

By returning a reference to an inner function, a closure is created.

“value1″ is a local variable of add(), and a non-local variable of doAdd(). Non-local variables refer to variables that are neither in the local nor the global scope.  “value2″ is a local variable of doAdd().

When add(1) is called, a closure is created and stored in “increment”. In the closure’s referencing environment, “value1″ is bound to the number 3.  Variables that are bound are also said to be closed over. This is where the name closure comes from.
When increment(4) is called, the closure is entered. 

This means that doAdd() is called, with the “value1″ variable holding the number 3. The closure can essentially be thought of as creating the following function.

	function increment(value2) {
	  return 3 + value2;
	}

	increment(4)

*/