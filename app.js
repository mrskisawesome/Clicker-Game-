//start the score at 0
let score = 0;
//find the button
let morePoints = 1;
const upgradeBtn1 = document.getElementById("upgrade1");
const upgradeBtn2 = document.getElementById("upgrade2");

//find the add a point button

const scoreBtn = document.getElementById("add a point");
//find the score on the page
const scoreDisplay = document.getElementById("score");

//function to add points after the click
function addPoints1() {
  score += +morePoints;
  scoreDisplay.textContent = score;
  localStorage.setItem("score", score);
  check15();
  check100();
}
//removes 15pts from the score
function upgradeOne() {
  if (score < 15) {
    alert("You need at least 15 points to but this upgrade");
  } else {
    score -= 15;
    //adds a point each second
    setInterval(() => {
      score++;
      scoreDisplay.textContent = score;
    }, 1000);
  }
}
function upgradeTwo() {
  if (score < 100) {
    alert(
      "You need at least 100 points to but this upgrade"
    ); /*what goes here*/
  } else {
    score -= 100;
    morePoints += 1;
  }
}
//on click run addPoints1
scoreBtn.addEventListener("click", addPoints1);
//button colour is white when points are under 15

function check15() {
  //if score goes over 15, change background and start listening for click
  if (score >= 15) {
    upgradeBtn1.style.background = "yellow";
    upgradeBtn1.addEventListener("click", upgradeOne);
  } else {
    upgradeBtn1.style.background = "white";
  }
}
function check100() {
  //if score goes over 15, change background and start listening for click
  if (score >= 100) {
    upgradeBtn2.style.background = "limegreen";
    upgradeBtn2.addEventListener("click", upgradeOne);
  } else {
    upgradeBtn2.style.background = "white";
  }
}
//Load the stored score from local storage
function getLocalStorage() {
  const localScore = localStorage.getItem("score");
  score = localScore;
  scoreDisplay.textContent = score;
}
getLocalStorage();
