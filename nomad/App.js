const ddayChristmas = document.querySelector('.dday');


function dDay() {
    const todayDate = new Date();
    const christmas = new Date('2022-12-25');
    const dDayMath = christmas - todayDate;

    const untilDay = Math.floor(dDayMath / (1000 * 60 * 60 * 24))
    const untilHour = Math.floor((dDayMath / (1000 * 60 * 60)) % 24)
    const untilMin = Math.floor((dDayMath / (1000 * 60)) % 60);
    const untilSec = Math.floor(dDayMath / 1000 % 60);

    ddayChristmas.innerText = `${untilDay}d ${untilHour}h ${untilMin}m ${untilSec}s`;

}


dDay();
setInterval(dDay, 1000);