window.onload = function () {
    console.log('onload')
    addEventListener("keypress", (e) => {
        if (e.code == 'Space') switchButton();
    });
    
    // Counter
    var seconds = 90;
    document.getElementById("seconds").innerHTML = seconds;
    var tens = 0;
    var stop = false;
    var appendSeconds = document.getElementById("seconds")
    var buttonStopwatch = document.getElementById('button-stopwatch');
    var ans = document.getElementById("answers");
    var Interval;

    // Music
    var player = document.getElementById('player');
    var sourceMp3 = document.getElementById('sourceMp3');

    buttonStopwatch.onclick = switchButton();
    
    function switchButton() {
        
        if (stop) {
            // resume timer
            clearInterval(Interval);    
            Interval = setInterval(Timer, 10);
            // player.play();
            playSong();
            stop = false;
            ans.style.display = "none";
        } else {
            // stop timer
            clearInterval(Interval);
            stopSong();    
            stop = true;
            ans.style.display = "block";
        }
    }
    
    function Timer() {
      tens++; 
      
      if (tens > 60) {
        seconds--;
        appendSeconds.innerHTML = seconds;
        tens = 0;
      }
      
      if (seconds < 10){
        appendSeconds.innerHTML = "0" + seconds;
        
      }

      if (seconds <= 0){
        appendSeconds.innerHTML = "00";
        clearInterval(Interval);
      }
    
    }
    
    // function loadSong(songNo) {
    //     sourceMp3.src='songs/' + songNo + '.mp3';
    //     player.load();
    // }

    ans.style.display = "none";
    loadSong(1);
}

var song = 1;
var player=document.getElementById('player');
var sourceMp3=document.getElementById('sourceMp3');

function loadSong(songNo) {
    
    sourceMp3.src='songs/' + songNo + '.mp3';
    song = songNo;
    player.load();
    // player.play();
    console.log('song', songNo, 'loaded')
}

function playSong() {
    player.play();
}

function stopSong() {
    player.pause();
    player.currentTime = 0;
}
