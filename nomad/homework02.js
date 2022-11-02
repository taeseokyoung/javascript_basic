


// 2번째숙제
let title = document.querySelector("body");
const colors = ["#ffc107", "#6f42c1", "#0dcaf0"];

function colorChange() {
    if (window.innerWidth <= 500) {
        title.style.backgroundColor = colors[2];
    } else if (window.innerWidth <= 1000) {
        title.style.backgroundColor = colors[1];
    } else if (window.innerWidth <= 1500) {
        title.style.backgroundColor = colors[0];
    }
}

window.addEventListener("resize", colorChange);
document.querySelector("h2").style.color = "#ffffff";
