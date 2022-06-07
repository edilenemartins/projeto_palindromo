function verificaPalindromo(){

    verificaPalindromo2();
    
    let texto = document.getElementById('input').value;

    if (!texto) return document.getElementById('output').innerHTML = "Não foi informado nenhum valor";

    let textoSeparado = texto.split(''); // separa a string (ex: abc -> ['a', 'b', 'c'])
    let textoReverso = textoSeparado.reverse(); // coloca a string de trás pra frente ['c', 'b', 'a']
    let textoJunto = textoReverso.join(''); // junta a string novamente (ex: ['c', 'b', 'a'] -> cba)

    if (texto === textoJunto) {
        return document.getElementById('output').innerHTML = "Palavra informada é um Palindromo: " + 
        " input: " + texto + " output: " + textoJunto;        
    } else {
        return document.getElementById('output').innerHTML = "Palavra informada NÃO é um Palindromo: " + 
        " input: " + texto + " output: " + textoJunto;               
    }   
}

function verificaPalindromo2() {

    let texto = document.getElementById('input').value;

	if (!texto) return;
	if (!texto.length) return;

	for (let i = 0; i < texto.length / 2; i++) {
		if (texto[i] !== texto[texto.length - 1 - i]) {
			return document.getElementById('output2').innerHTML = "É Palindromo? não";
		}
	}
	return document.getElementById('output2').innerHTML = "É Palindromo? sim";
}