var choice = window.prompt("Please enter r for rock,p for paper, or s for scissors");

var computersChoices = ["r", "p", "s"];

var computerChoice = Math.round(Math.random() * (computersChoices.length - 1));




if (choice === Number) {
    window.document.write("Please reenter your answer correctly.");
} else {
    
    if (computerChoice === 0) {
    //r   
        if (choice === "r") {
            window.document.write("It was a tie!");
        } else if (choice === "p") {

            window.document.write("Paper beats rock! You win!");

        } else if (choice === "s") {
            window.document.write("Sorry, Rock beats Scissors! You lose");
        }



    } else if (computerChoice === 1) {
    //p  
        if (choice === "p") {

            window.document.write("It was a tie! You both chose paper");
        } else if (choice === "r") {
            window.document.write("Sorry, Paper beats Rock! You lose");

        } else if (choice === "s") {
            window.document.write("Scissors beats paper! You win!");

        }
    } else if (computerChoice === 2) {
    //s    
        if (choice === "s") {

            window.document.write("It was a tie! You both chose Scissors");

        } else if (choice === "p") {

            window.document.write("Sorry Scissors beat Paper! You lose.");

        } else if (choice === "r") {
            window.document.write("Rock beats Scissors! You win!");


        }
    }
}








window.console.log(computerChoice);
window.console.log(computersChoices.length);