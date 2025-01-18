let timer;
let remainingTime;

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function startTimer(hours, button) {
    if (timer) {
        clearInterval(timer);
    }

    remainingTime = Math.floor(hours * 3600);
    document.getElementById('timerDisplay').textContent = formatTime(remainingTime);

    const buttons = document.querySelectorAll('.preset-buttons button');
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    timer = setInterval(() => {
        remainingTime--;
        document.getElementById('timerDisplay').textContent = formatTime(remainingTime);

        if (remainingTime <= 0) {
            clearInterval(timer);
            alert('Time is up!');
        }
    }, 1000);
}

function startCustomTimer() {
    const hours = parseInt(document.getElementById('customHours').value) || 0;
    const minutes = parseInt(document.getElementById('customMinutes').value) || 0;
    const seconds = parseInt(document.getElementById('customSeconds').value) || 0;

    remainingTime = (hours * 3600) + (minutes * 60) + seconds;

    if (remainingTime <= 0) {
        alert('Please enter a valid time.');
        return;
    }

    document.getElementById('timerDisplay').textContent = formatTime(remainingTime);

    const buttons = document.querySelectorAll('.preset-buttons button');
    buttons.forEach(btn => btn.classList.remove('active'));

    timer = setInterval(() => {
        remainingTime--;
        document.getElementById('timerDisplay').textContent = formatTime(remainingTime);

        if (remainingTime <= 0) {
            clearInterval(timer);
            alert('Time is up!');
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
    document.getElementById('timerDisplay').textContent = '00:00:00';

    const buttons = document.querySelectorAll('.preset-buttons button');
    buttons.forEach(btn => btn.classList.remove('active'));
}

function goToSecondPage() {
    window.location.href = 'timer-info.html'; // Redirect to the second page
}
