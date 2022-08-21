let players = [];

function addToChosenV(element) {
  const playerName = element.parentNode.parentNode.children[0].innerText;

  players.push(playerName);

  displayChosenPlayers();

  //   Disabling Select button after players being selected
  element.setAttribute("disabled", "disabled");
}

function displayChosenPlayers() {
  const ul = document.getElementById("chosen-player");
  ul.innerHTML = "";

  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    const li = document.createElement("li");
    li.innerHTML = `
        <span class="mr-3">${i + 1}. </span><span>${player}</span>
    `;

    if (ul.childElementCount > 5) {
      alert("You cannot select more than 5 players");
      return;
    } else {
      ul.appendChild(li);
    }
    li.classList.add("mb-5");
  }
}
