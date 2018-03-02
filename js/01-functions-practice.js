/*eslint-env browser*/

//STEP 1
function halfNumber(number) {
    "use strict";
    var theHalfNumber = parseFloat(number / 2);
    window.console.log("Half of " + number + "is " + theHalfNumber);
    
}
//STEP 2
function squareNumber(number) {
    "use strict";
    var theSquareNumber = number * number;
    window.console.log("The square of " + number + " is " + theSquareNumber);
    
}

//STEP 3

function percentOf(number1, number2) {
    "use strict";
    var percentage = Math.round(number2 % number1);
    window.console.log(number1 + " is the percentage " + percentage +  " of " + number2);
}
//STEP 4
function findModulus(number1, number2) {
    "use strict";
    var modulus = number1 % number2;
    window.console.log("The modulus of " + number1 + " and " + number2 + " is " + modulus);
}
//STEP 5

	
    
function numbersGame(number1, number2, number3) {
	"use strict";
	number1 = parseInt(window.prompt("Please Enter a number"), 10);
	number2 = parseInt(window.prompt("Please Enter a second number"), 10);
	number3 = parseInt(window.prompt("Please Enter a third number"), 10);
	var i, sum;
	for (i = 0; i <= 2; i += 1) {
		sum += arguments[i];
	}
	window.document.write(number1 +  " , " + number2 +  " , " + number3);
}
numbersGame();