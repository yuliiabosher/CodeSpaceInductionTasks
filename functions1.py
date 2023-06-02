def plist(list0):						# define a function that prints lists
	print("The content of the list is: "+ str(list0))	# the function prints the object when called

def mvalue(value):						# define the function that find the maximum value
	maxv = value[0]						# assign a new variable with the value that equal to the value of the fist element of the list
	for y in value:						# loop through the list
		if y>maxv:					# set condition if element of the list is more than the first value of the list
			maxv=y					# change the variable value to this new value
	print("The max value in the list: " + str(maxv))		# print a string of text concatenated with another string that contains a final maximum value
		
list1 = [10, 2, 3, 4, 7]					# assign a variable, type list
plist(list1)							# call the first function
mvalue(list1)							# call the second function
