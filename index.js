// ❗️ DON'T TOUCH THESE 2 FUNCTIONs
// Pre-made function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
function fillButton(index, text) {
  // This function fills the button of the send index
  document.getElementById(index).innerHTML = text;
}
// pre-made a function. You can use this function to present an alert to say someone wins
function winningAlert(winner) {
  if (confirm(`Horraaay, ${winner} wins!`)) {
    // The code here will be exectued if you press on OK button that will pop on the window
    restartGame();
  }
}

// SAMPLE CODE: This code fills the 1st and 9th button with X and O initially
// ❗️ Delete this code once you are done testing

/**
 *
 * THE MAIN FUNCTION
 * This function gets executed every time the user clicks the button
 * Add your code here, since this is going to be your main function
 * That interacts with the UI
 */
let turn = true;

function clickButton(index) {
  if (document.getElementById(index).innerHTML == "" && turn == true) {
    fillButton(index, "X");
    turn = false;
  } else if (document.getElementById(index).innerHTML == "" && turn == false) {
    fillButton(index, "O");
    turn = true;
  }
  checkWinner();
}

/**
 * (Optional) It's always a good idea to make a function for every single purpose.
 */
let winner = "";
function checkWinner() {
  if (
    document.getElementById(1).innerHTML == "X" &&
    document.getElementById(2).innerHTML == "X" &&
    document.getElementById(3).innerHTML == "X"
  ) {
    winner = "X";
    winningAlert(winner);
  } else if (
    document.getElementById(4).innerHTML == "X" &&
    document.getElementById(5).innerHTML == "X" &&
    document.getElementById(6).innerHTML == "X"
  ) {
    winner = "X";
    winningAlert(winner);
  } else if (
    document.getElementById(7).innerHTML == "X" &&
    document.getElementById(8).innerHTML == "X" &&
    document.getElementById(9).innerHTML == "X"
  ) {
    winner = "X";
    winningAlert(winner);
  } else if (
    document.getElementById(1).innerHTML == "X" &&
    document.getElementById(4).innerHTML == "X" &&
    document.getElementById(7).innerHTML == "X"
  ) {
    winner = "X";
    winningAlert(winner);
  } else if (
    document.getElementById(2).innerHTML == "X" &&
    document.getElementById(5).innerHTML == "X" &&
    document.getElementById(8).innerHTML == "X"
  ) {
    winner = "X";
    winningAlert(winner);
  } else if (
    document.getElementById(3).innerHTML == "X" &&
    document.getElementById(6).innerHTML == "X" &&
    document.getElementById(9).innerHTML == "X"
  ) {
    winner = "X";
    winningAlert(winner);
  } else if (
    document.getElementById(1).innerHTML == "X" &&
    document.getElementById(5).innerHTML == "X" &&
    document.getElementById(9).innerHTML == "X"
  ) {
    winner = "X";
    winningAlert(winner);
  } else if (
    document.getElementById(3).innerHTML == "X" &&
    document.getElementById(5).innerHTML == "X" &&
    document.getElementById(7).innerHTML == "X"
  ) {
    winner = "X";
    winningAlert(winner);
  }
  if (
    document.getElementById(1).innerHTML == "O" &&
    document.getElementById(2).innerHTML == "O" &&
    document.getElementById(3).innerHTML == "O"
  ) {
    winner = "O";
    winningAlert(winner);
  } else if (
    document.getElementById(4).innerHTML == "O" &&
    document.getElementById(5).innerHTML == "O" &&
    document.getElementById(6).innerHTML == "O"
  ) {
    winner = "O";
    winningAlert(winner);
  } else if (
    document.getElementById(7).innerHTML == "O" &&
    document.getElementById(8).innerHTML == "O" &&
    document.getElementById(9).innerHTML == "O"
  ) {
    winner = "O";
    winningAlert(winner);
  } else if (
    document.getElementById(1).innerHTML == "O" &&
    document.getElementById(4).innerHTML == "O" &&
    document.getElementById(7).innerHTML == "O"
  ) {
    winner = "O";
    winningAlert(winner);
  } else if (
    document.getElementById(2).innerHTML == "O" &&
    document.getElementById(5).innerHTML == "O" &&
    document.getElementById(8).innerHTML == "O"
  ) {
    winner = "O";
    winningAlert(winner);
  } else if (
    document.getElementById(3).innerHTML == "O" &&
    document.getElementById(6).innerHTML == "O" &&
    document.getElementById(9).innerHTML == "O"
  ) {
    winner = "O";
    winningAlert(winner);
  } else if (
    document.getElementById(1).innerHTML == "O" &&
    document.getElementById(5).innerHTML == "O" &&
    document.getElementById(9).innerHTML == "O"
  ) {
    winner = "O";
    winningAlert(winner);
  } else if (
    document.getElementById(3).innerHTML == "O" &&
    document.getElementById(5).innerHTML == "O" &&
    document.getElementById(7).innerHTML == "O"
  ) {
    winner = "O";
    winningAlert(winner);
  } else if (
    document.getElementById(1).innerHTML != "" &&
    document.getElementById(2).innerHTML != "" &&
    document.getElementById(3).innerHTML != "" &&
    document.getElementById(4).innerHTML != "" &&
    document.getElementById(5).innerHTML != "" &&
    document.getElementById(6).innerHTML != "" &&
    document.getElementById(7).innerHTML != "" &&
    document.getElementById(7).innerHTML != "" &&
    document.getElementById(8).innerHTML != "" &&
    document.getElementById(9).innerHTML != ""
  ) {
    confirm(`Game Over`);
    restartGame();
  }
}

function restartGame() {
  document.getElementById(1).innerHTML = "";
  document.getElementById(2).innerHTML = "";
  document.getElementById(3).innerHTML = "";
  document.getElementById(4).innerHTML = "";
  document.getElementById(5).innerHTML = "";
  document.getElementById(6).innerHTML = "";
  document.getElementById(7).innerHTML = "";
  document.getElementById(8).innerHTML = "";
  document.getElementById(9).innerHTML = "";
}
