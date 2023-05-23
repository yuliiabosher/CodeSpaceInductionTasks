const array = [25, 14, 56, 15, 36, 56, 77, 18, 29, 49];  // declared and initialised an array constant
let max = array[0];				       // declared and initialised a max variable that is initially equal to the first element of the array
for (i=0; i<array.length; i++) {				// created a loop that iterates through the array
	if (array[i] > max) {				// made a condition - if an array element is bigger than max
		max = array[i]				// max is assigned the value of this element
	}
}
let min = array[0];					// declared a min variable that is originally equal to the first element of the array
for (i=0; i<array.length; i++) {				// created a loop that iterates through the array
	if (array[i] < min) {				// set a condition - if an array element is less min
		min = array[i]				// min is assigned the value of this element
	}
}
console.log(`Original Array: ${array}`);			// output the array values within a string
console.log(`Maximum value for the above array = ${max}`); // output a max value within a string
console.log(`Minimum value for the above array = ${min}`); // output a min value within a string

