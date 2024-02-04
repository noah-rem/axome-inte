document.addEventListener('DOMContentLoaded', () => {
    const videoLink = document.querySelector('.hero__link');
    const videoOverlay = document.getElementById('videoOverlay');
    const videoContainer = document.getElementById('videoContainer');
    const videoFrame = document.getElementById('videoFrame');
    const body = document.body;
    
    const openVideo = (e) => {
        e.preventDefault();
        videoOverlay.style.display = 'flex';
        body.style.overflow = 'hidden';
    };
    
    const closeVideo = (e) => {
        if (!videoContainer.contains(e.target)) {
            videoOverlay.style.display = 'none';
            videoFrame.src = videoFrame.src;
            body.style.overflow = '';
        }
    };

    videoLink.addEventListener('click', openVideo);
    videoOverlay.addEventListener('click', closeVideo);
});
