var resultDiv;

function affiche(texte){
	console.log(texte);
	resultDiv.innerText += texte + '\n';
}

function affine(x){
	return 3*x + 2;
}


function affinebis (k,y){
	return 6*k - 6*y + 3;
}

function main(){
	resultDiv = document.getElementById("result");

	affiche("bonjour");
	affiche(affine(3));
	affiche(affinebis (9,4));
	
	for (var k = 9, y = 4;affinebis(k,y) <= 330; k = k*(-3), y = y*2){
		affiche(affinebis(k,y));
		affiche("finis");
	}
}



