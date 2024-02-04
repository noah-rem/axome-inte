document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.querySelector('.preloader');
    const loadingPercentage = document.querySelector('.preloader__percentage');

    let loadProgress = 0;
    const interval = setInterval(() => {
        if (loadProgress >= 100) {
            clearInterval(interval);
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        } else {
            loadProgress++;
            loadingPercentage.textContent = `${loadProgress}%`;
        }
    }, 5);
});
