var secretCode = [];
var buttonColours = ["red", "blue", "green", "yellow", "orange", "pink"];
var playerGuess = [];

function startGame() {

}

// funcao para gerar numero aleatorio e criar a sequencia da senha
function generateSecretPattern() {
    for (var i = 0; i < 4; i++) {
        var secretCode = [];
        var randomNumber = Math.floor(Math.random() * buttonColours.length);
        secretCode.push(buttonColours[randomNumber]);
    }
    return secretCode;
  }

  

// evento de pressionamento de tecla em que o jogador seleciona a cor para a tecla
$("peg").click(function (e) { 
    e.preventDefault();
    
});



//funcao que roda o jogo (for de 10 repeticoes, e no final exibe as cores no "secret-peg")

function Play() {
    generateSecretPattern();

}

//funcao que verifica se a sequencia do jogador esta igual a da senha
function checkGuess(guess, secret) {
    var blackPegs = 0;
    var whitePegs = 0;
  
    // Percorre a lista do palpite do jogador
    for (var i = 0; i < guess.length; i++) {
      // Verifica se a cor está no código secreto
      if (secret.includes(guess[i])) {
        // Se a cor estiver no código secreto, verifica se está na posição correta
        if (guess[i] === secret[i]) {
          // Se a cor e a posição estiverem corretas, adiciona um blackPeg
          blackPegs++;
        } else {
          // Se a cor estiver correta, mas a posição estiver incorreta, adiciona um whitePeg
          whitePegs++;
        }
      }
    }
  
    // Atualiza o feedback do jogo
    updateFeedback(blackPegs, whitePegs);
  }
  


//funcao que armazena o palpite do jogador
function playerGuess() {

}

/*
funcao
*/