var nextTurn, p1icon, p2icon;
var p1turnCount = 0;
var p2turnCount = 0;
var square = document.getElementsByClassName('square');
for( var i = 0; i<square.length; i++){
  square[i].squareVal=0;
  square[i].addEventListener('click', addIcon);
}
function selectX() {
  p1icon = document.getElementById('exes').innerHTML;
  p2icon = document.getElementById('ohs').innerHTML;
  nextTurn = p1icon;
  document.getElementById('ohs').disabled=true;
}
function selectO() {
  p1icon = document.getElementById('ohs').innerHTML;
  p2icon = document.getElementById('exes').innerHTML;
  nextTurn = p1icon;
  document.getElementById('exes').disabled=true;
}
function addIcon(){
  if(this.hasChildNodes()) {
    return;
  }
  else{
    if(p1icon === undefined || p2icon === undefined){
      alert('please select X or O first!');
      return;
    }
    if(nextTurn === p1icon && nextTurn !== undefined){
    this.innerHTML="<p class='marked'>" + nextTurn + "</p>";
      this.squareVal = 1;
    }
    else if(nextTurn === p2icon && nextTurn !== undefined){
      this.innerHTML="<p class='marked'>" + nextTurn + "</p>"
      this.squareVal= -1;
    }
    changeTurn();
  }  
};
 function changeTurn(){
      if(nextTurn === p1icon){
          nextTurn = p2icon;
          p1turnCount += 1;
          computerAI();
          checkWinner();
      } else {
           nextTurn = p1icon;
           computerAI();
           p2turnCount +=1;
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
    if(p1turnCount>=5 || p2turnCount>4) { 
      alert('ITS A CATS GAME! MEOWWW')
      clearBoard();
    }
  }
}
function computerAI() {
  var random = (Math.floor(Math.random() * 9) + 1)-1;
  if(square[4].innerHTML==="" && nextTurn === p2icon){
    square[4].innerHTML = p2icon;
    square[4].squareVal= -1;
    nextTurn = p1icon;
    return;
  }
  if(square[random].innerHTML==="" && nextTurn === p2icon){
    console.log('if random' + random);
    square[random].innerHTML = p2icon;
    square[random].squareVal= -1;
    nextTurn = p1icon;
    return;
  }  
  if(square[random].innerHTML!=="" && nextTurn === p2icon){
    random = (Math.floor(Math.random() * 9) + 1)-1;
    console.log('elseif random'+ random);
    square[random].innerHTML = p2icon;
    square[random].squareVal= -1;
    nextTurn = p1icon;
    return;
  }
}
function clearBoard() {
  for(var k = 0; k<square.length; k++){
    square[k].squareVal=0;
    square[k].innerHTML="";
    document.getElementById('exes').disabled=false;
    document.getElementById('ohs').disabled=false;
    p1turnCount = 0;
    p2turnCount = 0;
  }
}

