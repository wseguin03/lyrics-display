const lyrics = [
    "And I'd give up forever to touch you",
    "'Cause I know that you feel me somehow",
    "You're the closest to Heaven that I'll ever be",
    "And I don't wanna go home right now",
    "And all I can taste is this moment",
    "And all I can breathe is your life",
    "And sooner or later, it's over",
    "I just don't wanna miss you tonight",
    "And I don't want the world to see me",
    "'Cause I don't think that they'd understand",
    "When everything's made to be broken",
    "I just want you to know who I am",
    "And you can't fight the tears that ain't coming",
    "Or the moment of truth in your lies",
    "When everything feels like the movies",
    "Yeah, you bleed just to know you're alive",
    "And I don't want the world to see me",
    "'Cause I don't think that they'd understand",
    "When everything's made to be broken",
    "I just want you to know who I am",
    "And I don't want the world to see me",
    "'Cause I don't think that they'd understand",
    "When everything's made to be broken",
    "I just want you to know who I am",
    "And I don't want the world to see me",
    "'Cause I don't think that they'd understand",
    "When everything's made to be broken",
    "I just want you to know who I am",
    "I just want you to know who I am",
    "I just want you to know who I am",
    "I just want you to know who I am"
];

let currentIndex = 0;
let isPlaying = false;
let playInterval = null;

const lyricLine = document.getElementById('lyric-line');
const progressEl = document.getElementById('progress');
const prevBtn = document.getElementById('prev-btn');
const playBtn = document.getElementById('play-btn');
const nextBtn = document.getElementById('next-btn');

function updateDisplay() {
    lyricLine.style.opacity = '0';
    setTimeout(() => {
        lyricLine.textContent = lyrics[currentIndex];
        progressEl.textContent = `Line ${currentIndex + 1} of ${lyrics.length}`;
        lyricLine.style.opacity = '1';
    }, 150);
}

function nextLine() {
    if (currentIndex < lyrics.length - 1) {
        currentIndex++;
        updateDisplay();
    }
}

function prevLine() {
    if (currentIndex > 0) {
        currentIndex--;
        updateDisplay();
    }
}

function togglePlay() {
    if (isPlaying) {
        stopPlayback();
    } else {
        startPlayback();
    }
}

function startPlayback() {
    isPlaying = true;
    playBtn.textContent = 'Pause';
    playBtn.setAttribute('data-state', 'playing');
    playInterval = setInterval(() => {
        if (currentIndex < lyrics.length - 1) {
            currentIndex++;
            updateDisplay();
        } else {
            stopPlayback();
        }
    }, 2000);
}

function stopPlayback() {
    isPlaying = false;
    playBtn.textContent = 'Play';
    playBtn.setAttribute('data-state', 'stopped');
    clearInterval(playInterval);
    playInterval = null;
}

prevBtn.addEventListener('click', prevLine);

nextBtn.addEventListener('click', nextLine);

playBtn.addEventListener('click', togglePlay);

updateDisplay();
