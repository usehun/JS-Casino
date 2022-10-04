const range = document.querySelector("#range");
const user = document.querySelector("#user");
const submit = document.querySelector(".submit");
const game = document.querySelector(".game");
const result = document.querySelector(".result");

function handleSubmit(event) {
  event.preventDefault();

  const rangeNum = parseInt(range.value);
  const userNum = parseInt(user.value);
  const random = Math.ceil(Math.random() * rangeNum);

  const HIDDEN = "hidden";

  if (rangeNum > 0 && userNum > 0 && rangeNum >= userNum) {
    game.innerHTML = `You chose: ${user.value}, the machine chose: ${random}.`;
    game.classList.remove(HIDDEN);
    result.classList.remove(HIDDEN);

    if (userNum === random) {
      result.innerHTML = "You won!";
    } else {
      result.innerHTML = "You lost!";
    }
  } else {
    alert("Range, Number > 0 and Range > Number");
    location.reload();
  }
}

submit.addEventListener("click", handleSubmit);
