let players = [];

function addToChosenV(element) {
  const playerName = element.parentNode.parentNode.children[0].innerText;
  //   Disabling Select button after players being selected
  if (players.length < 5) {
    players.push(playerName);
    element.setAttribute("disabled", "disabled");
  } else if (players.length === 5) {
    alert("You cannot select more than 5 players.");
  }
  displayChosenPlayers();
}

function displayChosenPlayers() {
  const ol = document.getElementById("chosen-player");
  ol.innerHTML = "";

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

function calculateExpense() {
  const numberOfPlayers = players.length;
  const expensePerPlayer = getElementValueById("per-player-cost");

  if (isNaN(expensePerPlayer)) {
    alert("Please Enter a Valid Amount For Each Player");
    return;
  } else {
    const expenseTotalPlayer = numberOfPlayers * expensePerPlayer;
    setTextById("player-total-expense", expenseTotalPlayer);
  }
}

document
  .getElementById("calculate-player-expense")
  .addEventListener("click", calculateExpense);

document
  .getElementById("calculate-total-expense")
  .addEventListener("click", function () {
    const expenseManager = getElementValueById("expense-manager");
    const expenseCoach = getElementValueById("expense-coach");
    calculateExpense();
    const expenseTotalPlayer = getElementTextById("player-total-expense");

    if (isNaN(expenseManager)) {
      alert("Please Enter a Valid Amount For Manager");
      return;
    } else if (isNaN(expenseCoach)) {
      alert("Please Enter a Valid Amount For Coach");
      return;
    } else {
      const expenseTotal = expenseTotalPlayer + expenseManager + expenseCoach;
      setTextById("expense-total", expenseTotal);
    }
  });
