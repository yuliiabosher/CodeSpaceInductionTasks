def prime():					# define a function name
	x = int(input("write a number "))	# define a variable that takes inout and turns it into an integer
	if x<0 or x==0 or x==1:			# first condition if the integer is negative or 0 or 1
		print("not a prime number")
	elif x>0:				# if first condition is false and the number is positive test a second condition
		for i in range(2,x):		# create a for loop with range between 2 and the input integer
			if x%i!=0:		# if at no point the mudulus of the integer divided by the number from the range is 0 
				print("a prime number") # print "a prime number" and break the loop
				break			
	else:
		print("not a prime number")	# if the above conditions false print "not prime number"
prime()						# call the function
