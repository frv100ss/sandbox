var resultDiv;

function affiche(texte){
	console.log(texte);
	resultDiv.innerText += texte + '\n';
}

function affine(x){
	return somme(3*x,2);
}

function somme(a, b){
	return a+b;
}

function main(){
	resultDiv = document.getElementById("result");

	affiche("bonjour");
	affiche(affine(3));
}