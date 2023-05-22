let num1 = prompt("input first number", 2); // declared an input variable for the first number with default 2
let num2 =  prompt("input second number", 3); // input variable for the second number with default 3
let num3 = prompt("input third number", 4); // third number with default 4
if (num1 == num2 && num2 == num3) {           // first condition to evaluate if all numbers are equal
	console.log("All numbers are equal");
} else if (num1 != num2 && num2 != num3) {	// second condition that will execute if the first condition is false
	console.log("All numbers are different");  
} else {
	console.log("Neither all are equal or different");  // default statement will execute if the first and the second conditions are false
}

