function calcular() {
    var input_prompt = Number(prompt('Escola seu primeiro número:'));
    var input_prompt2 = Number(prompt('Escolha seu segundo número:'))
    var saida = document.getElementById('saida');
    var menu = Number(prompt(`Valores informados ${input_prompt} e ${input_prompt2}.
    O que vamos fazer? 
    [1] Somar
    [2] Subtrair
    [3] Multiplicar
    [4] Dividir`))

    var somar = input_prompt + input_prompt2
    var subtrair = input_prompt - input_prompt2
    var multiplicar = input_prompt * input_prompt2
    var dividir = input_prompt + input_prompt2
    if (menu == 1) {
        saida.innerHTML = `<p>Somando ${input_prompt} e ${input_prompt2} resulta em: <strong>${somar}</strong> </p>`
    } else if (menu == 2) {
        saida.innerHTML = `<p>Subtraindo ${input_prompt} e ${input_prompt2} resulta em: <strong>${subtrair}</strong> </p>`
    } else if (menu == 3) {
        saida.innerHTML = `<p>Multiplicando ${input_prompt} e ${input_prompt2} resulta em: <strong>${multiplicar}</strong> </p>`
    } else if (menu == 4){
        saida.innerHTML = `<p>Dividindo ${input_prompt} e ${input_prompt2} resulta em: <strong>${dividir}</strong> </p>`
    } else {
        saida.innerHTML = 'Digite um número <strong> válido </strong>'
    }
} 
