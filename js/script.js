var p1icon = "X"
var nextTurn = p1icon;
var p2icon = "O";
var square = document.getElementsByClassName('square');
for( var i = 0; i<square.length; i++){
  square[i].addEventListener('click', addIcon);
}
function addIcon(){
  if(this.hasChildNodes()) {
    console.log('sorry, occupied');
    return;
  }
  else{
    console.log(nextTurn);
    this.innerHTML="<p class='marked'>" + nextTurn + "</p>";
    changeTurn();
  }  
};

 function changeTurn(){
      if(nextTurn === p1icon){
           nextTurn = p2icon;
      } else {
           nextTurn = p1icon;
      }
 }
function checkWinner() {
  //use square[i] array of arrays!!
  var winningCombos = [[square[0],square[1],square[2]], [square[3],square[4],square[5]], [square[6],square[7],square[8]], 
                       [square[0],square[4],square[8]], [square[2],square[4],square[6]], [square[0],square[3],square[6]], 
                       [square[1],square[4],square[7]], [square[2],square[5],square[8]]
                       ];
  for (var j = 0; j < 8; j++){
    for(var k =0; k < 3; k++){
      var windex = winningCombos[j][k];

    }
  }
}