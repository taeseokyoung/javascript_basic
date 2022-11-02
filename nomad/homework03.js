const generateNum = document.querySelector("h2 input");
const guessNum = document.querySelector("h3 input");
const machineNum = document.querySelector(".machineNum");
const playBtn = document.querySelector("h3 button");

function btnClick() {
    document.querySelector(".guessNum").innerHTML = guessNum.value;

    let RandomNum = Math.random();
    document.querySelector(".machineNum").innerHTML = Math.floor(
        RandomNum * (generateNum.value - 1)
    );
}

playBtn.addEventListener("click", btnClick);

// 미완성
