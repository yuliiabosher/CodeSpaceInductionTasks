let number = parseInt(prompt("input a number"));	//declared a variable with number input
for (i=1; i<=10; i++) {				// iterate a loop from 1 to 10
	let result = i*number;			// declared a variable that is the result of multiplication of i variable and input number
	console.log(`${number}x${i}=${result}`)   // output a string with i and number variables as a multiplication statement
}
