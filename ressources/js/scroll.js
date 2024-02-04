document.addEventListener('DOMContentLoaded', () => {
    const scrollToDivButton = document.getElementById('scrollToMenu');
    const targetDiv = document.getElementById('best-menu');

    scrollToDivButton.addEventListener('click', () => {
        targetDiv.scrollIntoView({ behavior: 'smooth' });
    });
});
