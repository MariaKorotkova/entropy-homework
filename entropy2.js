let fs = require('fs');
let arg = process.argv;
let inputData;
let entropy = 0;
let alph = new Array();
let i = 0, n = 0;


inputData = fs.readFileSync('input.txt');
inputData = inputData.toString();

for (i = 0; i < inputData.length; i++){
	alph[inputData.charAt(i)] = 0;
}

for (i = 0; i < inputData.length; i++){
	alph[inputData.charAt(i)]++;
}

for (i in alph){
	alph[i] /= inputData.length;
	n++;
}

if (n == 1){
	console.log(0);
	return 0;
}
for (i in alph){
	entropy -= alph[i] * (Math.log(alph[i]) / Math.log(n));
}
console.log(entropy)	
