/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

const overlay = document.getElementById('modalOverlay');

function openModal() {
    overlay.classList.add('active');
    startProgress();
}

function closeModal() {
    overlay.classList.remove('active');
}

window.onclick = function (event) {
    if (event.target === overlay) {
        closeModal();
    }
}

document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        closeModal();
    }
});


function startProgress() {
    const redBar = document.querySelector('.progres-red');
    const textBlack = document.querySelector('.progress-text-black');
    const textWhite = document.querySelector('.progress-text-white');

    let progress = 0;
    const duration = 3000;
    const frameRate = 10;
    const step = 100 / (duration / frameRate);

    redBar.style.width = '0%';
    textBlack.innerText = '0%';
    textWhite.innerText = '0%';

    const interval = setInterval(() => {
        progress += step;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
        }

        const currentPercent = Math.round(progress) + '%';
        redBar.style.width = currentPercent;
        textBlack.innerText = currentPercent;
        textWhite.innerText = currentPercent;
    }, frameRate);
}