let num1 = prompt("input first number", 1524); // declared an input variable for the first number with default 1524
let num2 =  prompt("input second number", 2345); // input variable for the second number with default 2345
let num3 = prompt("input third number", 3321); // third number with default 3321
if (num1 < num2 && num2 < num3) {           /* first condition to evaluate if the first number is lower than the second number 
                                            and the second number lower than the third one */
	console.log("Increasing order");
} else if (num1 > num2 && num2 > num3) {	// second condition that will execute if the first condition is false
	console.log("Decreasing order");  
} else {
	console.log("Neither increasing or decreasing order");  // default statement will execute if the first and the second conditions are false
}

