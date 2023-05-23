const array = [20, 30, 25, 35, -16, 60, -100];    // declared and initialised an array constant
let sum = 0;      				// declared and initialised sum variable
for (i=0; i<array.length; i++) {			// created a for loop to iterate through the array
	sum += array[i];			// loop adds each new element to the sum
}
let average = sum/array.length;			// declared and initialised an average variable - sum divided by the number of array elements
console.log(average)				// output the average to the console
