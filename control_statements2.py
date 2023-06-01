x = int(input("Input first number: "))   # variable turned integer for the first input
y = int(input("Input second number: "))	# second input
z = int(input("Input third number: "))   # third input
if x<y and y<z:	# first if statement setting a condition that first number is smaller than the second number and that the second number is smaller than the third
	print("Increasing order")	# prints a string
elif x>y and y>z:		# condition that first number is bigger than the second number and that the second number is bigger than the third
	print("Decreasing order") # prints a string
else:					# condition that catches all other cases if the conditions above are false
	print("Neither increasing or decreasing order") # prints a string
