document.addEventListener('DOMContentLoaded', () => {
    const burgerIcon = document.querySelector('.burger-icon');
    const closeIcon = document.querySelector('.close-icon');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuItems = document.querySelectorAll('.mobile-menu__item');
    const body = document.body;

    const toggleIcons = () => {
        const isActive = mobileMenu.classList.contains('active');
        burgerIcon.style.display = isActive ? 'none' : 'block';
        closeIcon.style.display = isActive ? 'block' : 'none';
    };

    burgerIcon.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        body.style.overflow = 'hidden';
        toggleIcons();
    });

    closeIcon.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        body.style.overflow = '';
        toggleIcons();
    });

    menuItems.forEach((item) => {
        item.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            body.style.overflow = '';
            toggleIcons();
        });
    });
});
