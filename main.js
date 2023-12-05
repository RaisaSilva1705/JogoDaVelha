let jogadorCadastrado = false;

function cadastrarJogador(player){
    if (player == 1){
        var jogador = document.getElementById("player1");
        document.getElementById("saida1").innerHTML = jogador.value + ' | X';

        jogadorCadastrado = true;

        jogador.style.visibility = 'hidden';
        document.getElementById("cadastro1").style.visibility = 'hidden';
    }
    if (player == 2){
        var jogador = document.getElementById("player2");
        document.getElementById("saida2").innerHTML = jogador.value + ' | O';

        jogador.style.visibility = 'hidden';
        document.getElementById("cadastro2").style.visibility = 'hidden';
    }

    mostrarJogadorAtual();
}

/* let jogoModo = 0; */
let jogador2 = false;

function ModoDeJogo(modoJogo){
    document.getElementById("side-panel-1").style.visibility = 'visible';
    document.getElementById("side-panel-2").style.visibility = 'visible';

    var saidaLabel = document.getElementById("saida2");
    var jogador = document.getElementById("player2");

    if (modoJogo === 1){
        saidaLabel.innerHTML = "Jogador 2:";

        jogador.style.visibility = 'visible';
        document.getElementById("cadastro2").style.visibility = 'visible';

        jogador2 = true // quando uma pessoa ira jogar
    }
    if (modoJogo === 2){
        saidaLabel.innerHTML = "Computador";

        jogador.style.visibility = 'hidden';
        document.getElementById('cadastro2').style.visibility = 'hidden';

        jogador2 = false; // quando o computador ira jogar
    }
}

function mostrarJogadorAtual(){
    document.getElementById('jogadorAtual').innerHTML = 'Jogador atual: ' + currentPlayer;
}

let currentPlayer = 'X';

function cellClick(cell, pos) {
    if (jogadorCadastrado == true){
        if (cell.innerText === '' && posiCell[pos] == undefined){
            cell.innerText = currentPlayer;
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // ? -> operador ternário

            mostrarJogadorAtual();
            checkWinner();
        }
    }
    else{
        alert("Jogador 1 não foi cadastrado!");
    }
}

function resetPagina(){
    window.location.reload();
}

/* Fazer a verificação do vencedor.
   Pode ocorrer vitória do jogador 1 ou 2, bem como empate.
   Incrementar contador do vencedor
 */

let posiCell = new Array(9);
/* 
    0 1 2
    3 4 5
    6 7 8
*/
let vitLinha = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
let vitColuna = [[0, 3, 6], [1, 4, 7], [2, 5, 8]];
let vitDiagonal = [[0, 4, 8], [2, 4, 6]];

let contVitoria1 = 0;
let contVitoria2 = 0;

function checkEmpate(){
    var cellPreenchidos = 0;

    for (var i = 0; i < posiCell.length; ++i){
        if(posiCell[i] != undefined)
            cellPreenchidos++;
    }
    return cellPreenchidos == posiCell.length;
}

function checkLinha(){
    if(posiCell[vitLinha] == 'X'){
        contVitoria1++;
        document.getElementById('player1-wins').innerHTML = 'Vitórias: ' + contVitoria1; 
    }
    if(posiCell[vitLinha] == '0'){
        contVitoria2++;
        document.getElementById('player2-wins').innerHTML = 'Vitórias: ' + contVitoria2;
    }
}

function checkColuna(){
    if(posiCell[vitColuna] == 'X'){
        contVitoria1++;
        document.getElementById('player1-wins').innerHTML = 'Vitórias: ' + contVitoria1;
        return true;
    }
    else if(posiCell[vitColuna] == '0'){
        contVitoria2++;
        document.getElementById('player2-wins').innerHTML = 'Vitórias: ' + contVitoria2;
        return true;
    }
    else if(null){
        return false;
    }
}

function checkDiagonal(){
    if(posiCell[vitDiagonal] == 'X'){
        contVitoria1++;
        document.getElementById('player1-wins').innerHTML = 'Vitórias: ' + contVitoria1;
    }
    if(posiCell[vitDiagonal] == '0'){
        contVitoria2++;
        document.getElementById('player2-wins').innerHTML = 'Vitórias: ' + contVitoria2;
    }
}

function checkWinner(){
    checkLinha();
    checkColuna();
    checkDiagonal();
    checkEmpate();

    if (checkLinha() == true || checkColuna() == true || checkDiagonal() == true || checkEmpate() == true){
        resetPagina();
    }    
}
