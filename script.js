var numero = Math.floor(Math.random() * 101);

function verificar() {
    var input_prompt = Number(prompt('Tente adivinhar o número entre 0 e 100'));
    var saida = document.getElementById('saida');
    if (input_prompt > numero) {
        saida.innerHTML += `<p> Não é <strong>${input_prompt}</strong>! O número que estou pensando é <strong>MENOR</strong>.</p>`;
    } else if (input_prompt === numero) {
        saida.innerHTML = `<strong>PARABÉNS</strong>, você acertou, o número que eu havia escolhido era <strong>${numero}!</strong>`;
    } else {
        saida.innerHTML += `<p> Não é <strong>${input_prompt}</strong>! O número que estou pensando é <strong>MAIOR</strong>.</p>`;
    }
}       if(elseif == true) {
        saida.innerHTML = ''
}
