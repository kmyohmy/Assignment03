/*eslint-env browser*/

var userInput = parseFloat(window.prompt("Please enter a number"));
var userInput2 = parseFloat(window.prompt("Please enter a second number"));
var operationType = window.prompt("Would you like to:\nAdd?\nSubtract?\nMultiply?\nDivide?");
var output;

function calculate(userInput, userInput2, output) {
    "use strict";
    
    switch (output) {
    
    case "add":
        output = userInput + userInput2;
        window.document.write(output);
        break;
        
    case "subtract":
        output = userInput - userInput;
        window.document.write(output);
        break;
           
    case "multiply":
        output = userInput * userInput;
        window.document.write(output);
        break;
        
    case "divide":
        output = userInput / userInput;
        window.document.write(output);
        break;
           
    
    default:
        window.alert("You entered something incorrectly, Please try again.");
        break;
    }
    return;
}