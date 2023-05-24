let num = prompt("write a number")    					 // declare a variable in which the input is stored
function prime(num) {		    					 // declare a function named prime
	if (num>1) {		     					// make a condition - input number is over 1
		for (i=2; i<num; i++) {					// parse through whole numbers between 2 and the input number
			if (num % i == 0) {				// condition - divide input by whole numbers between 2 and the input number
				console.log("it is not a prime number")   // if one of the remainers is 0, output "not prime"
				break;					// break the loop and end the fuction execution
			} else {
				console.log("it is a prime number");	// if one of the remainders ends up a number other than 0, output "prime number"
				break;
			}
			
		}
	}
	else {
		console.log("it is not a prime number")			// if numbers are less than 1, then output "not prime"
	}
		
}
prime(num)								// call the function
