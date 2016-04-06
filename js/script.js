var p1icon = "X"
var nextTurn = p2icon;
var p2icon = "O";
var square = document.getElementsByClassName('square');
for( var i = 0; i<square.length; i++){
  square[i].squareVal=0;
  square[i].addEventListener('click', addIcon);
}
function addIcon(){
  if(this.hasChildNodes()) {
    console.log('sorry, occupied');
    return;
  }
  else{
    this.innerHTML="<p class='marked'>" + nextTurn + "</p>";
    if(nextTurn === p1icon){
      this.squareVal = 1;
    }
    else if(nextTurn === p2icon){
      this.squareVal= -1;
    }
    changeTurn();
  }  
};
 function changeTurn(){
      if(nextTurn === p1icon){
          nextTurn = p2icon;
          checkWinner();
      } else {
           nextTurn = p1icon;
           checkWinner();
      }
  }
function checkWinner() {
  var winningCombos = [
    [square[0].squareVal,square[1].squareVal,square[2].squareVal], 
    [square[3].squareVal,square[4].squareVal,square[5].squareVal], 
    [square[6].squareVal,square[7].squareVal,square[8].squareVal], 
    [square[0].squareVal,square[4].squareVal,square[8].squareVal], 
    [square[2].squareVal,square[4].squareVal,square[6].squareVal], 
    [square[0].squareVal,square[3].squareVal,square[6].squareVal], 
    [square[1].squareVal,square[4].squareVal,square[7].squareVal], 
    [square[2].squareVal,square[5].squareVal,square[8].squareVal]
  ];
  for(var j=0; j<8; j++){
    var checker = winningCombos[j].reduce(function(a,b){return a+b});
    var p1ScoreAdd = parseInt(document.getElementById('p1score').innerHTML);
    var p2ScoreAdd = parseInt(document.getElementById('p2score').innerHTML);

    if (checker === 3) {
      p1ScoreAdd = p1ScoreAdd += 1;
      document.getElementById('p1score').innerHTML = p1ScoreAdd;
      alert("X Wins! The score is now:\n " + "Player 1 (X): " + p1ScoreAdd + "\n Player 2 (O): " + p2ScoreAdd);
      clearBoard();
    };
    if(checker === -3) {
      p2ScoreAdd = p2ScoreAdd += 1;
      document.getElementById('p2score').innerHTML = p2ScoreAdd;
      alert("O Wins! The score is now:\n " + "Player 2 (X): " + p2ScoreAdd + "\n Player 1 (X): " + p1ScoreAdd);
      clearBoard();
    };
    if(checker === 2 && nextTurn === p2icon) {
      console.log('inside 2checker')
      for(var l = 0; l<3; l++){
        //ADD BLOCKER AI FOR 2 IN A ROWS
        console.log(winningCombos[j][l]);
      }
    }
  }
}

function computerAI() {
  if(square[4].innerHTML===""){
    square[4].innerHTML = p2icon;
    changeTurn();
  }

}

function clearBoard() {
  for(var k = 0; k<square.length; k++){
    square[k].squareVal=0;
    square[k].innerHTML="";
  }
}

