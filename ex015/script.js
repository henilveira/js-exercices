let contadorCliques = 0; // Variável para registrar o número de cliques

function clique() {
  contadorCliques++; // Incrementa o contador de cliques
  document.getElementById('botao1').innerText = `Cliques: ${contadorCliques}`
}
