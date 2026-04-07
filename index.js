/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

const overlay = document.getElementById('modalOverlay');

function openModal() {
    overlay.classList.add('active');
}

function closeModal() {
    overlay.classList.remove('active');
}

window.onclick = function(event) {
    if (event.target == overlay) {
        closeModal();
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});