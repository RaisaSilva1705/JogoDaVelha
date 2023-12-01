let currentPlayer = 'X';
let jogadorCadastrado = false;

function cellClick(cell) {
    if (jogadorCadastrado = true){
        if (cell.innerText === '' && !checkWinner()) {
            cell.innerText = currentPlayer;
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // ? -> operador ternário
        }
    }
    else{
        alert("Jogador 1 não foi cadastrado!");
    }
}

function cadastrarJogador(player){
    if (player == 1){
        var jogador = document.getElementById("player1");
        document.getElementById("saida1").innerHTML = jogador.value;

        jogadorCadastrado = true;
    }
    else {
        var jogador = document.getElementById("player2");
        document.getElementById("saida2").innerHTML = jogador.value;
    }
}

function ModoDeJogo(modoJogo){

    if (modoJogo === 1){
        document.getElementById("side-panel-1").style.visibility = 'visible';
        document.getElementById("side-panel-2").style.visibility = 'visible';

    }
    if (modoJogo === 2){
        document.getElementById("side-panel-1").style.visibility = 'visible';

    }
}

/* Fazer a verificação do vencedor.
   Pode ocorrer vitória do jogador 1 ou 2, bem como empate.
   Incrementar contador do vencedor
 */
function checkWinner() {
    
    return false;
}
