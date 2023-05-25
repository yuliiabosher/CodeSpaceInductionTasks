let choices = ["rock", "paper", "scissors"];

function rock() {
	let inpr = document.getElementById("rock");
	let cont = document.getElementsByClassName("container")[0];
	let row = document.createElement("row");
	let par = document.createElement("h3");
	let text = document.createTextNode("Your choice: rock");
	par.append(text);
	row.append(par);
	cont.append(row);
	let index = Math.floor(Math.random() * choices.length);
	let row2 = document.createElement("row");
	let par2 = document.createElement("h3");
	let text2 = document.createTextNode(`Computer choice: ${choices[index]}`);
	par2.append(text2);
	row2.append(par2);
	cont.append(row2);
	switch (choices[index]) {
		case choices[0]:
			let row11 = document.createElement("row");
			let par11 = document.createElement("h3");
			let text11 = document.createTextNode("It's a draw");
			par11.append(text11);
			row11.append(par11);
			cont.append(row11);
			break;
		case choices[1]:
			let row22 = document.createElement("row");
			let par22 = document.createElement("h3");
			let text22 = document.createTextNode("Computer won");
			par22.append(text22);
			row22.append(par22);
			cont.append(row22);
			break;
			
		case choices[2]:
			let row33 = document.createElement("row");
			let par33 = document.createElement("h3");
			let text33 = document.createTextNode("You won");
			par33.append(text33);
			row33.append(par33);
			cont.append(row33);
			break;
		}
	
			
}
function paper() {
	let inpp = document.getElementById("paper");
	let cont = document.getElementsByClassName("container")[0];
	let row = document.createElement("row");
	let par = document.createElement("h3");
	let text = document.createTextNode("Your choice: paper");
	par.append(text);
	row.append(par);
	cont.append(row);
	let index = Math.floor(Math.random() * choices.length);
	let row3 = document.createElement("row");
	let par3 = document.createElement("h3");
	let text3 = document.createTextNode(`Computer choice: ${choices[index]}`);
	par3.append(text3);
	row3.append(par3);
	cont.append(row3); 
	switch (choices[index]) {
		case choices[0]:
			let row11 = document.createElement("row");
			let par11 = document.createElement("h3");
			let text11 = document.createTextNode("You won");
			par11.append(text11);
			row11.append(par11);
			cont.append(row11);
			break;
		case choices[1]:
			let row22 = document.createElement("row");
			let par22 = document.createElement("h3");
			let text22 = document.createTextNode("It's a draw");
			par22.append(text22);
			row22.append(par22);
			cont.append(row22);
			break;
			
		case choices[2]:
			let row33 = document.createElement("row");
			let par33 = document.createElement("h3");
			let text33 = document.createTextNode("Computer won");
			par33.append(text33);
			row33.append(par33);
			cont.append(row33);
			break;
		}
}
function scissors() {
	let inps = document.getElementById("scissors");
	let cont = document.getElementsByClassName("container")[0];
	let row = document.createElement("row");
	let par = document.createElement("h3");
	let text = document.createTextNode("Your choice: scissors");
	par.append(text);
	row.append(par);
	cont.append(row);
	let index = Math.floor(Math.random() * choices.length);
	let row4 = document.createElement("row");
	let par4 = document.createElement("h3");
	let text4 = document.createTextNode(`Computer choice: ${choices[index]}`);
	par4.append(text4);
	row4.append(par4);
	cont.append(row4);
	switch (choices[index]) {
		case choices[0]:
			let row11 = document.createElement("row");
			let par11 = document.createElement("h3");
			let text11 = document.createTextNode("Computer won");
			par11.append(text11);
			row11.append(par11);
			cont.append(row11);
			break;
		case choices[1]:
			let row22 = document.createElement("row");
			let par22 = document.createElement("h3");
			let text22 = document.createTextNode("You won");
			par22.append(text22);
			row22.append(par22);
			cont.append(row22);
			break;
			
		case choices[2]:
			let row33 = document.createElement("row");
			let par33 = document.createElement("h3");
			let text33 = document.createTextNode("It's a draw");
			par33.append(text33);
			row33.append(par33);
			cont.append(row33);
			break;
		}
}















