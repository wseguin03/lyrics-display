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
let speed = 2000; // milliseconds

const lyricLine = document.getElementById('lyric-line');
const progressEl = document.getElementById('progress');
const progressBar = document.getElementById('progress-bar');
const speedSlider = document.getElementById('speed-slider');
const speedValue = document.getElementById('speed-value');
const prevBtn = document.getElementById('prev-btn');
const playBtn = document.getElementById('play-btn');
const nextBtn = document.getElementById('next-btn');

function updateDisplay() {
    lyricLine.classList.remove('fade-in');
    lyricLine.classList.add('fade-out');

    setTimeout(() => {
        lyricLine.textContent = lyrics[currentIndex];
        progressEl.textContent = `Line ${currentIndex + 1} of ${lyrics.length}`;

        // Update progress bar
        const progress = ((currentIndex + 1) / lyrics.length) * 100;
        progressBar.style.width = `${progress}%`;

        lyricLine.classList.remove('fade-out');
        lyricLine.classList.add('fade-in');
    }, 200);
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
    }, speed);
}

function stopPlayback() {
    isPlaying = false;
    playBtn.textContent = 'Play';
    playBtn.setAttribute('data-state', 'stopped');
    clearInterval(playInterval);
    playInterval = null;
}

function updateSpeed() {
    speed = parseFloat(speedSlider.value) * 1000;
    speedValue.textContent = `${speedSlider.value}s`;

    // If playing, restart with new speed
    if (isPlaying) {
        clearInterval(playInterval);
        playInterval = setInterval(() => {
            if (currentIndex < lyrics.length - 1) {
                currentIndex++;
                updateDisplay();
            } else {
                stopPlayback();
            }
        }, speed);
    }
}

// Event listeners
prevBtn.addEventListener('click', prevLine);
nextBtn.addEventListener('click', nextLine);
playBtn.addEventListener('click', togglePlay);
speedSlider.addEventListener('input', updateSpeed);

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ignore if user is typing in an input
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
    }

    switch (e.code) {
        case 'Space':
            e.preventDefault();
            togglePlay();
            break;
        case 'ArrowLeft':
            e.preventDefault();
            prevLine();
            break;
        case 'ArrowRight':
            e.preventDefault();
            nextLine();
            break;
    }
});

// Initialize
updateDisplay();
