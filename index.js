document.addEventListener('DOMContentLoaded', () => {
    const burgerButton = document.querySelector('.burger');
    const menu = document.querySelector('.menu');


    burgerButton.addEventListener('click', toggleMenu);


    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && !burgerButton.contains(event.target)) {
            menu.classList.remove('menu-active');
        }
    });


    menu.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            menu.classList.remove('menu-active');
        }
    });

    function toggleMenu() {
        menu.classList.toggle('menu-active');
    }
});
