// add solution here
function theBeatlesPlay(x, y){
  var beatles = [];
  for ( i = 0; i<x.length(); i++){
    var a = x[i] + " plays "+ y[i];
    beatles.add(a);
  }
  return beatles;
  
}