def fact():					#define a function
	num = int(input("write a number "))	# assign a variable that takes input and turns it into an integer
	if num == 0:				# set a condition if the integer is 0
		print("0!=1")			# print a sting
	elif num>0:				# if the first condition is false check for another condition if the integer is bigger than 0
		f = 1				# assign a new variable with initial value of 1
		for x in range(2, num+1):	# loop through a range between 2 and the input integer plus 1
			f*=x			# multiply the variable by the range values
		print(str(num)+"!="+str(f))	# print a string concatenated of the input value and the the multiplication final result
	else:					# set the condition if the value is negative
		print("the factorial is not defined by negative numbers") # print a string
fact()						# call the function
