var nextTurn ="X";
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
      if(nextTurn === 'X'){
           nextTurn = p2icon;
      } else {
           nextTurn = 'X';
      }
 }
function winner() {
  
}