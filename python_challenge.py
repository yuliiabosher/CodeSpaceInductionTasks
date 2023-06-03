u=[]
c=[]
def game():
	import random
	ent = input("Enter a choice (Rock(r), Paper(p), Scissors(s)): ")
	if ent == "r":
		x = random.randint(1,3)
		if x == 1:
			print("You chose Rock, the computer chose Rock. It's a tie!")
			u.append(0)
			c.append(0)
		elif x==2:
			print("You chose Rock, the computer chose Paper. Paper covers Rock. You lose!")
			c.append(1)
		else:
			print("You chose Rock, the computer chose Scissors. Rock smashes Scissors. You win!")
			u.append(1)
	elif ent == "p":
		a = random.randint(1,3)
		if a == 1:
			print("You chose Paper, the computer chose Rock. Paper covers Rock. You win!")
			u.append(1)
		elif a == 2:
			print("You chose Paper, the computer chose Paper. It's a tie!")
			u.append(0)
			c.append(0)
		else:
			print("You chose Paper, the computer chose Scisscors. Scissors cut Paper. You lose!")
			c.append(1)
	elif ent == "s":
		z = random.randint(1,3)
		if z == 1:
			print("You chose Scissors, the computer chose Rock. Rock smashes Scissors. You lose!")
			c.append(1)
		elif z == 2:
			print("You chose Scissors, the computer chose Paper. Scissors cut paper. You win!")
			u.append(1)
		else:
			print("You chose Scissors, the computer chose Scissors. It's a tie!")
			u.append(0)
			c.append(0)
	inp = input("Play again? (y/n):")
	if inp=="y":
		game()
	else:
		print("Final score")
		us=0
		for i in u:
			us+=i
		print("Player: "+str(us))
		cs=0
		for b in c:
			cs+=b
		print("Computer:"+str(cs))
game()










	
