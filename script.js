const image=document.querySelector('img');
const music=document.querySelector('audio');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const duration = document.getElementById('duration');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

//Music
const songs=[
    {
        name: 'jacinto-1',
        displayName: 'Electric Chill Machine',
        artist: 'Jacinto Design'
    },
    {
        name: 'jacinto-2',
        displayName: 'Seven Nation Army (Remix)',
        artist: 'Jacinto Design'
    },
    {
        name: 'jacinto-3',
        displayName: 'Goodnight, Disco Queen',
        artist: 'Jacinto Design'
    },
    {
        name: 'metric-1',
        displayName: 'Im in The Front',
        artist: 'Jacinto Design'
    }
]
// Check if Playing
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

// Update Dom
function loadSong(song){
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.name}.jpg`;
}

// Current Song
let songIndex = 0;

function nextSong(){
    songIndex++;
    if(songIndex > songs.length - 1){
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
    }
function prevSong(){
    songIndex--;
    if(songIndex < 0){
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
}
console.log(songIndex);
// Update Progress Bar & Time
function updateProgressBar(e){
    if(isPlaying){
        const{duration, currentTime} = e.srcElement;
        // Upadate Progress bar width
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width=`${progressPercent}%`;
        currentTimeEl.textContent= +currentTime;
         // Delay switching current Element to avoid NaN
         if(currentSeconds){
         currentEl.textContent= `${currentMinutes}:${currentSeconds}`;
     }
        // Calculate display for duration
        const currentMinutes = Math.floor(currentTime / 60);
        let currentSeconds = Math.floor(currentTime % 60);
        if(currentSeconds < 10){
            currentSeconds = `0${currentSeconds}`
        }
        currentTimeEl.textContent=`${currentMinutes}:${currentSeconds}`;

        
    } 
}
// Event Listeners
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('timeupdate', updateProgressBar);