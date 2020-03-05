// var message = "-.- ..- ... .... .- .-.."; 
  
var message = "-.- ..- ... .... .- .-.."; 

var morsecode = {  
   ".-":"a",
   "-...":"b",
   "-.-.":"c",
   "-..":"d",
   ".":"e",
   "..-.":"f",
   "--.":"g",
   "....":"h",
   "..":"i",
   ".---":"j",
   "-.-":"k",
   ".-..":"l",
   "--":"m",
   "-.":"n",
   "---":"o",
   ".--.":"p",
   "--.-":"q",
   ".-.":"r",
   "...":"s",
   "-":"t",
   "..-":"u",
   "...-":"v",
   ".--":"w",
   "-..-":"x",
   "-.--":"y",
   "--..":"z",

};


function setup() {
  createCanvas(400, 400);
  
 var decode = [];

    message.split("   ").map(function (word) {
            console.log(word);
          word.split(" ").map(function (letter) {       
            console.log(letter);

        decode.push(morsecode[letter]);
    });
    decode.push(" ");
});
 
console.log(decode.join('')); 
  
}

function draw() {
  background(220);
}

