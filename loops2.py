x = int(input("Input a number: "))	# assign a variable that takes an input and turns it into an integer
for i in range (1, 11):			# create a range from 1 to 11, where 11 is not included
	y = str(x*i)		# assign a new variable that stores the result of the multiplication of the range number and the input integer, turned into a string
	print(str(x)+"x"+str(i)+"="+y)	# concatenate and print a string that consists of the input variable turned into a string, the range number turned into a string and the multiplication variable
	
