const music=document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

let isPlaying = false;
//Play
function playSong(){
    isPlaying=true;
    music.play();
    playBtn.classList.replace('fa-play','fa-pause');
    playBtn.setAttribute('title','Pause');
}

//Pause
function pauseSong(){
    isPlaying=false;
    music.pause();
    playBtn.classList.replace('fa-pause','fa-play');
    playBtn.setAttribute('title','Play');
}

// Play or Pause Event List
playBtn.addEventListener('click',() => (isPlaying ? pauseSong() : playSong()));