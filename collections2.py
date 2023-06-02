list = [20, 30, 25, 35, -16, 60, -100]	# assign a variable with the value of the sample list
sum = 0					# assign a value of 0 to a new variable that will be used to calculate the sum
for x in list:				# create a for loop to parse through the values of a list
	sum += x			# add each value of a list to the sum variable
print(sum/len(list))			# print the result of the calculation of the final sum variable divided by the list length
