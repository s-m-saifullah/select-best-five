let players = []; //empty array for players

// onclick function for all select button in html
function addToChosenV(element) {
  const playerName = element.parentNode.parentNode.children[0].innerText;
  if (players.length < 5) {
    players.push(playerName);
    // Disabling Select button after players being selected
    element.setAttribute("disabled", "disabled");
  } else if (players.length === 5) {
    alert("You cannot select more than 5 players.");
  }
  // Calling function for appending players into ol element
  displayChosenPlayers();
}

// Function for appending players into ol element
function displayChosenPlayers() {
  const ol = document.getElementById("chosen-player");
  // Clearing the ol element before appending new list items
  ol.innerHTML = "";

  // Looping through all selected players for appending them
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    const li = document.createElement("li");
    li.innerHTML = `
        <span class="mr-3">${i + 1}. </span><span>${player}</span>
    `;
    ol.appendChild(li);
    li.classList.add("mb-5");
  }
}

// Function for calculating player expense
function calculateExpense() {
  const numberOfPlayers = players.length;
  const expensePerPlayer = getElementValueById("per-player-cost");

  // Error handling for non number inputs
  if (isNaN(expensePerPlayer)) {
    alert("Please Enter a Valid Amount For Each Player");
    return;
  } else {
    // Claculating and showing total expense for players
    const expenseTotalPlayer = numberOfPlayers * expensePerPlayer;
    setTextById("player-total-expense", expenseTotalPlayer);
  }
}

// Event listener on calculate button
document
  .getElementById("calculate-player-expense")
  .addEventListener("click", calculateExpense);

// Event listener on Calculate Total button
document
  .getElementById("calculate-total-expense")
  .addEventListener("click", function () {
    const expenseManager = getElementValueById("expense-manager");
    const expenseCoach = getElementValueById("expense-coach");
    calculateExpense();
    const expenseTotalPlayer = getElementTextById("player-total-expense");

    // Error handling code for non number inputs
    if (isNaN(expenseManager) || isNaN(expenseCoach)) {
      alert("Please Enter a Valid Amount For Manager or Coach");
      return;
    } else {
      // Calculating and showing total expenses
      const expenseTotal = expenseTotalPlayer + expenseManager + expenseCoach;
      setTextById("expense-total", expenseTotal);
    }
  });
