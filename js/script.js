var p1icon = "X"
var nextTurn = p1icon;
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
  for(var j=0; j<7; j++){
    var checker = winningCombos[j].reduce(function(a,b){return a+b});
    if (checker === 3) {
      console.log('x winner');
    };
    if(checker === -3) {
      console.log('o winner');
    };
  }
}

