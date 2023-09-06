window.onload = function () {
    addEventListener("keypress", (e) => {
        if (e.code == 'Space') switchButton();
    });
    
    // Counter
    // var seconds = 90;
    document.getElementById("ddlViewBy").value = 0;
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

    // buttonStopwatch.onclick = switchButton();
    buttonStopwatch.onclick = () => switchButton();
    
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
        if (score > 0) {
          window.location.href = 'bacca.html'
        } else {
          alert('Spróbuj zgadnąć choć jedną!')
        }
      }
    }
    
    // function loadSong(songNo) {
    //     sourceMp3.src='songs/' + songNo + '.mp3';
    //     player.load();
    // }

    ans.style.display = "none";
    loadSong(1);
}
var seconds = 90; 
var song = 1;
var tens = 0;
var guessed = 0;
var stop = false;
var player=document.getElementById('player');
var sourceMp3=document.getElementById('sourceMp3');
var songId = document.getElementById('song-id');
var score = 0;
var scoreboard = document.getElementById('score');

function loadSong(songNo) {
    
    sourceMp3.src='songs/' + songNo + '.mp3';
    song = songNo;
    songId.innerHTML = 'Piosenka ' + songNo;
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

function checkSong() {
  var selectedSong = document.getElementById("ddlViewBy").value;
  console.log(selectedSong);
  if (selectedSong == song) {
    scoreboard.innerHTML = parseInt((90-seconds)*100);
    guessed++;
    // song++;
    // songId.innerHTML = 'Piosenka ' + song;
  } else {
    alert('Wtopa! Ale lecimy dalej');
    // song++;
    // songId.innerHTML = 'Piosenka ' + song;
  }
  song++;
  songId.innerHTML = 'Piosenka ' + song;
  loadSong(song); 

  if (song >= 11) {
    window.location.href = 'bacca.html';
  }

  document.getElementById("ddlViewBy").value = 0;
}