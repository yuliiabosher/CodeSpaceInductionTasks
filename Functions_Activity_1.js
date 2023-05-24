const array = [10, 2, 3, 4, 7]; 						// declared and initialised an array named constant
function max_value() {							// created a function named max_value
	let max = array[0];			       			// declared and initialised a variable max within the function 
	for (i=0; i<array.length; i++) {					// created a for loop iterating throught the array
		if (array[i] > max) {					// made a condition reassigning the max variable value 
			max = array[i]				
		}
	}
	console.log(`The max value in the array is: ${max}`) 		// output a string with the final max value
}
function content() {							// created a function named content outputting a string with the elements of an array 
	console.log(`The content of the array is: ${array}`);		
}	
content()								// called the content fucntion
max_value()								// called the max_value function
			


