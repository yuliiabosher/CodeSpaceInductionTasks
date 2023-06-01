x = int(input("Input first number: "))   # variable turned integer for the first input
y = int(input("Input second number: "))	# second input
z = int(input("Input third number: "))   # third input
if x==y and y==z:			# first if statement setting a condition that all numbers are equal
	print("All numbers are equal")	# prints a string
elif x!=y and y!=z and x!=z:		# condition that all numbers are different
	print("All numbers are different") # prints a string
else:					# condition that catches all other cases if the conditions above are false
	print("Neither all are equal or different") # prints a string
