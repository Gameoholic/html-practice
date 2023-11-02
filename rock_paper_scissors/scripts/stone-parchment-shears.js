var selection

function onStoneClick() {
  selectButton("stone");
}
function onParchmentClick() {
  selectButton("parchment");
}
function onShearsClick() {
  selectButton("shears");
}

function onPlayClick() {
  const opponentSelection = generateOpponentSelection();
  let wonText = "You lost.";
  if ((selection === "shears" && opponentSelection === "parchment") || (selection === "parchment" && opponentSelection === "stone") || (selection === "stone" && opponentSelection === "shears"))
    wonText = "You won!";
  else if (selection === opponentSelection)
    wonText = "You tied.";
  alert(`You selected ${selection}.\nOpponent selected ${opponentSelection}.\n${wonText}`);
}

function generateOpponentSelection() {
  const rnd = Math.floor(Math.random() * 3);
  const selections = ["parchment", "stone", "shears"];
  return selections[rnd];
}

function selectButton(buttonName) {
  resetButtons();
  selection = buttonName;
  document.getElementById(`${buttonName}-button`).style.backgroundColor = "rgb(131, 131, 131)";
}

function resetButtons() {
  document.getElementById("stone-button").style.backgroundColor = "rgb(198, 198, 198)";
  document.getElementById("parchment-button").style.backgroundColor = "rgb(198, 198, 198)";
  document.getElementById("shears-button").style.backgroundColor = "rgb(198, 198, 198)";
}