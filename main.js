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

        jogador2 = true; // quando uma pessoa ira jogar
    }
    if (modoJogo === 2){
        saidaLabel.innerHTML = "Computador | O";

        jogador.style.visibility = 'hidden';
        document.getElementById('cadastro2').style.visibility = 'hidden';

        jogador2 = false; // quando o computador ira jogar
    }
}

function jogoRobo(){
    if (jogador2 == false){
        var tabuleiro = document.querySelectorAll(".cell");
        tabuleiro = tabuleiro[Math.floor(Math.random() * (8 - 0)) + 0];
        
        if (cell.innerText === '' && !checkWinner())
            cellClick(tabuleiro);
    }
}

function mostrarJogadorAtual(){
    document.getElementById('jogadorAtual').innerHTML = 'Jogador atual: ' + currentPlayer;
}

let currentPlayer = 'X';
let tabuleiro = null;
let validarPosi = null;

function cellClick(cell, pos) { // posiciona o simbulo na cédula selecionada, além de armazenar a jogada no array do tabuleiro e permitir que o robô jogue quando possível
    if (jogadorCadastrado == true){
        console.log(pos);
        if (cell.innerText === '' && !checkWinner()){
            cell.innerText = currentPlayer;
            posiCell[pos] = currentPlayer;

            mostrarJogadorAtual();

            permitirRobo = true;

            checkWinner();  
            checkEmpate();

            // robo escolhe uma posição aleatória que não esteja ocupada
            if (jogador2 == false && currentPlayer == 'X'){
                tabuleiro = document.querySelectorAll(".cell");

                numPosiRobo = Math.floor(Math.random() * (8 - 0)) + 0;
                validarPosi = tabuleiro[numPosiRobo];
                
                while(validarPosi.innerText !== ''){
                    numPosiRobo = Math.floor(Math.random() * (8 - 0)) + 0;
                    validarPosi = tabuleiro[numPosiRobo];
                    
                }
                console.log(numPosiRobo);
            }

            currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // ? -> operador ternário
            
            // robo joga na posição aleatória que tinha escolhido anteriormente
            if (permitirRobo == true && currentPlayer == 'O'){
                setTimeout(() => {
                    validarPosi.innerText = 'O';
                    posiCell[numPosiRobo] = currentPlayer;
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                }, [500]);
            }
        }
    }
    else{
        alert("Jogador 1 não foi cadastrado!");
    }
}

function resetPagina(){
    window.location.reload();
}

function resetJogo(){
    setTimeout(() => {
        currentPlayer = 'X';
        mostrarJogadorAtual();
        var limpar = document.querySelectorAll('.cell');
        for (var i = 0; i <= limpar.length; i++)
            limpar[i].innerText = '';
    }, [2000]);
    delete posiCell;
    posiCell = new Array(9);
}

/* Fazer a verificação do vencedor.
   Pode ocorrer vitória do jogador 1 ou 2, bem como empate.
   Incrementar contador do vencedor
 */

let posiCell = new Array(9);

let contVitoria1 = 0;
let contVitoria2 = 0;

let permitirRobo = true;

function checkEmpate(){
    var cellPreenchidos = 0;

    for (var i = 0; i < posiCell.length; ++i){
        if(posiCell[i] != undefined)
            cellPreenchidos++;
    }
    if(cellPreenchidos == 9){
        alert("Empate!");
        resetJogo();
        cellPreenchidos = 0;
    }
    return cellPreenchidos == posiCell.length;
}

function checkWinner(){
    checkLinha();
    checkColuna();
    checkDiagonal();
}

function checkLinha(){
    for (var i = 0; i < 7; i += 3){
        if(posiCell[i] == 'X' && posiCell[i + 1] == 'X' && posiCell[i + 2] == 'X'){
            ++contVitoria1;
            document.getElementById('player1-wins').innerHTML = 'Vitórias: ' + contVitoria1;

            document.getElementById('jogadorAtual').innerHTML = "Vitória do Jogador 1!";
            permitirRobo = false;
            resetJogo();
        }
        if(posiCell[i] == 'O' && posiCell[i + 1] == 'O' && posiCell[i + 2] == 'O'){
            ++contVitoria2;
            document.getElementById('player2-wins').innerHTML = 'Vitórias: ' + contVitoria2;

            document.getElementById('jogadorAtual').innerHTML = "Vitória do Jogador 2!";
            permitirRobo = false;
            resetJogo();
        }
    }
}

function checkColuna(){
    for (var i = 0; i < 3; ++i){
        if(posiCell[i] == 'X' && posiCell[i + 3] == 'X' && posiCell[i + 6] == 'X'){
            ++contVitoria1;
            document.getElementById('player1-wins').innerHTML = 'Vitórias: ' + contVitoria1;

            document.getElementById('jogadorAtual').innerHTML = "Vitória do Jogador 1!";
            permitirRobo = false;
            resetJogo();
        }
        if(posiCell[i] == 'O' && posiCell[i + 3] == 'O' && posiCell[i + 6] == 'O'){
            ++contVitoria2;
            document.getElementById('player2-wins').innerHTML = 'Vitórias: ' + contVitoria2;

            document.getElementById('jogadorAtual').innerHTML = "Vitória do Jogador 2!";
            permitirRobo = false;
            resetJogo();
        }
    }
}

function checkDiagonal(){
    if((posiCell[0] == 'X' && posiCell[4] == 'X' && posiCell[8] == 'X') || (
        posiCell[2] == 'X' && posiCell[4] == 'X' && posiCell[6] == 'X')){
            ++contVitoria1;
        document.getElementById('player1-wins').innerHTML = 'Vitórias: ' + contVitoria1;

        document.getElementById('jogadorAtual').innerHTML = "Vitória do Jogador 1!";
        permitirRobo = false;
        resetJogo();
    }
    if((posiCell[0] == 'O' && posiCell[4] == 'O' && posiCell[8] == 'O') || (
        posiCell[2] == 'O' && posiCell[4] == 'O' && posiCell[6] == 'O')){
            ++contVitoria2;
        document.getElementById('player2-wins').innerHTML = 'Vitórias: ' + contVitoria2;

        document.getElementById('jogadorAtual').innerHTML = "Vitória do Jogador 2!";
        permitirRobo = false;
        resetJogo();
    }
}
