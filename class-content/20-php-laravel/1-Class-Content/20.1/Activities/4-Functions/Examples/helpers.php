<?php
function println($string){
	echo "$string\n";
	//Alternate
	//echo $string . '\n';
}

function separate($separator = '=', $numTimes = 12){
	echo str_repeat($separator, $numTimes) . "\n";
}

function is_long_name($name){
	if(strlen($name) > 7){
		println("'$name 'is a long name");
	}
}

is_long_name('Justin LeBlanc');