/*Written by Ron Yonker, Tuesday, March 13th 2018*/

/*I had thought I would restrict myself to basic methods (without functions), but that was too tedious, and I've written too many basic fizzbuzz snippets in different languages. So instead, I wrote it using functions and utilizing parameterization. Better, would be using ES6 array methods (map, filter, reduce could all be used as a solution), predicates, or writing constructor functions.*/

/*length is the ending number you're counting to, and params is an array of objects that make key/value pairs. This allows you to call the function for any numbers, and use any words you like, instead of being limited to 3, 5, fizz, buzz*/

function fizzBuzz(length, params){ 
	var output;
	for(var i=1;i<=length;i++){
		output = ''; /*building from an empty string*/
		var number; /*keeps track of what number in the count we're on*/
		var term; /*applies the correct word for the number in the count*/
		for(var j=0;j<params.length;j++){ /*iterates across the key/value pairs*/
			number = params[j].number; /*assign to variables to test*/
			term = params[j].term;
			if(i%number === 0){ /*if the counter matches 3 or 5, add its word*/
				output+=term; /*this lets you build the fizzbuzz string*/
			}
		}
		if(output === '') {
			output+=i; /*output the number if the params don't match*/
		}
		console.log(output);
	}
}

fizzBuzz(100,[{number: 3,term: 'Fizz'},{number: 5, term: 'Buzz'}]);