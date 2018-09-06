/*l'alert*/
alert("bienvenu dans le jeu!");
//au niveau de la console
var solution = Math.floor(Math.random() * 100) + 1;
console.log("(La solution est " + solution + ")");

//champ de saisie (prompt)

for (var i = 0; i < 6; i++) {
		
	var chiffre = prompt("Entrez un chiffre :");
	var nombre = parseInt(chiffre,10);
	if (nombre == solution) {
		console.log("vous avez gagnez");
		break;
	}
	else if (nombre < solution)
	 {
	 	alert("le nombre est trop petit");
	}
	else if (nombre > solution) 
	{
		alert("le nombre est trop grand");
	}

}
if (i == 6) {
	console.log("bonne réponse");
}