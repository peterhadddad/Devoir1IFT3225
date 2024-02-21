function startTimer() {
    let timer = 60;
    let seconds;
    const display = document.getElementById("timer"); 

    setInterval(function () {
        seconds = parseInt(timer % 60, 10);

        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = seconds;

        if (timer <= 10) {
            display.style.color = "red";
        } else {
            display.style.color = "black"; 
        }

        if (--timer < 0) {
            timer = 60;
        }
    }, 1000);
}
startTimer();
