function playGame() {
    let userChoice = document.getElementById("userChoice").value.toLowerCase();
    let choices = ["rock", "paper", "scissors"];
    if (!choices.includes(userChoice)) {
        document.getElementById("result").innerText = "Invalid choice! Please enter Rock, Paper, or Scissors.";
        return;
    }
    
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";
    
    if (userChoice === computerChoice) {
        result = "Lucky! It's a tie!🤡";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "Hurrrayyy🎉 You win! Computer chose " + computerChoice;
    } else {
        result = "Oops!☠️ You lose! Computer chose " + computerChoice;
    }
    
    document.getElementById("result").innerText = result;
}
