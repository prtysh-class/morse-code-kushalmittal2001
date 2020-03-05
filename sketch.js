var number1 = 5 ;
var number2 = 7 ;
var morseCode = "";
function setup() {
  createCanvas(400, 400);
  
//   input = createInput();
//   input.position(20,65);
//   input.changed(code);
  
}

function draw() {
  background(220);
 
}

function keyPressed() {
  // background('yellow');
  // text(`${key} ${keyCode}`, 10, 40);
  // print(key);
  
  if(key == 'a') 
  {
      morseCode = morseCode+ ".- ";
  }
  if(key == 'b') 
  {
      morseCode = morseCode+ "-... ";

  }
  if(key == 'c') 
  {
      morseCode = morseCode+ "-.-. ";

  }
  if(key == 'd') 
  {
      morseCode = morseCode + "-.. ";

  }
  if(key == 'e') 
  {
      morseCode = morseCode+ ". ";

  }
  if(key == 'f') 
  {
      morseCode = morseCode+ "..-. ";

  }
   if(key == 'g') 
  {
      morseCode = morseCode+ "--. ";

  }
  
    if(key == 'h') 
  {
      morseCode = morseCode+ ".... ";

  }
    if(key == 'i') 
  {
      morseCode = morseCode+ ".. ";

  }
    if(key == 'j') 
  {
      morseCode = morseCode+ ".--- ";

  }
  
    if(key == 'k') 
  {
      morseCode = morseCode+ "-.- ";

  }
   if(key == 'l') 
  {
      morseCode = morseCode+ ".-.. ";

  }
  
  if(key == 'm') 
  {
      morseCode = morseCode+ "-- ";

  }
  if(key == 'n') 
  {
      morseCode = morseCode+ "-. ";

  }if(key == 'o') 
  {
      morseCode = morseCode+ "--- ";

  }
  if(key == 'p') 
  {
      morseCode = morseCode+ ".--. ";

  }
  if(key == 'q') 
  {
      morseCode = morseCode+ "--.- ";

  }
  
  if(key == 'r') 
  {
      morseCode = morseCode+ ".-. ";

  }
  if(key == 's') 
  {
      morseCode = morseCode+ "... ";

  }
  if(key == 't') 
  {
      morseCode = morseCode + "- ";

  }
  if(key == 'u') 
  {
      morseCode = morseCode+ "..- ";

  }
  if(key == 'v') 
  {
      morseCode = morseCode+ "...- ";

  }
  if(key == 'x') 
  {
      morseCode = morseCode+ "-..- ";

  }
  if(key == 'y') 
  {
      morseCode = morseCode+ "-.-- ";

  }
  if(key == 'z') 
  {
      morseCode = morseCode+ "--.. ";

  }
  
  
  
  
      console.log(morseCode);
    

}

