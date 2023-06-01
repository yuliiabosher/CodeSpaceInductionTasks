x = 0			# assign an initial value to the first variable
y = 1			# assign initial value to the second variable
print(x)		# output the first variable
print(y)		# output the second variable
while (x+y)<=50:		# create a while loop with the condition that the sum of two variable is less than or equals 50
	z = x+y		# if true assign a new variable with the value that equals the sum of the first two variables
	print(z)	# print the sum
	x=y		# reassign the first variable so that it equals the second variable
	y=z		# reassign the second variable so that it equals the sum
	
