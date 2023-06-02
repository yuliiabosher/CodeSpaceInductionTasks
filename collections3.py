list = [25, 14, 56, 15, 36, 56, 77, 18, 29, 49]	# assign a variable with the value of the sample list
min = list[0]					# assign a new min variable to the first element of the list
for x in list:					# create a for loop to parse through the values of a list
	if x < min:				# make a condition if an element of the loop is smaller than the first element of the loop
		min = x				# assign that element's value to the min variable
print(min)					# print the final min variable
max = list[0]					# assign a new max variable to the first element of the list
for y in list:					# create a for loop to parse through the values of a list
	if y > max:				# make a condition if an element of the loop is bigger than the first element of the loop
		max = y				# assign that element's value to the max variable
print(max)					# print the final max variable
