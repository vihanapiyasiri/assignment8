// const startBtn = document.getElementById("startBtn");
// const stopBtn = document.getElementById("stopBtn");
// const knightRiderSound = document.getElementById("knightRiderSound");
let isRunning = false;
      let intervalId;
      let currentIndex = 0;
      let direction = 1;

      startBtn.onclick = function () {
        if (!isRunning) {
          // knightRiderSound.play();
          // knightRiderSound.loop = true; 
          intervalId = setInterval(function () {
            let cards = document.getElementsByClassName("card");
            for (let i = 0; i < cards.length; i++) {
              cards[i].style.backgroundColor = "white";
            }

            cards[currentIndex].style.backgroundColor = "#ff4d4d";
            if (currentIndex > 0) {
              cards[currentIndex - 1].style.backgroundColor = "#ff9f9e";
            }
            if (currentIndex < cards.length - 1) {
              cards[currentIndex + 1].style.backgroundColor = "#ff9f9e";
            }

            currentIndex = currentIndex + direction;
            if (currentIndex >= cards.length - 1) {
              direction = -1;
            } else if (currentIndex <= 0) {
              direction = 1;
            }
          }, 150);

          isRunning = true;
          startBtn.style.backgroundColor = "#ff4d4d";
          stopBtn.style.backgroundColor = "white";
        }
      };

      stopBtn.onclick = function () {
        if (isRunning) {
          // knightRiderSound.pause();
          // knightRiderSound.currentTime = 0;
          clearInterval(intervalId);
          isRunning = false;
          stopBtn.style.backgroundColor = "#ff4d4d";
          startBtn.style.backgroundColor = "white";
        }
      };

      stopBtn.onclick = function () {
        if (isRunning) {
          knightRiderAudio.pause();
          clearInterval(intervalId);
          isRunning = false;
          stopBtn.style.backgroundColor = "#ff4d4d";
          startBtn.style.backgroundColor = "white";
        }
      }; 