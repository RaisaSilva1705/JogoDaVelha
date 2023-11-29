let currentPlayer = 'X';
var excluirElemento = document.getElementById("side-panel");

function cellClick(cell) {
    if (cell.innerText === '' && !checkWinner()) {
        cell.innerText = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // ? -> operador ternário
    }
}

function cadastrarJogador(player){
    if (player == 1){
        var jogador = document.getElementById("player1");
        document.getElementById("saida1").innerHTML = jogador.value;
    }
    else {
        var jogador = document.getElementById("player2");
        document.getElementById("saida2").innerHTML = jogador.value;
    }
}

/* Fazer a verificação do vencedor.
   Pode ocorrer vitória do jogador 1 ou 2, bem como empate.
   Incrementar contador do vencedor
 */
function checkWinner() {
    
    return false;
}