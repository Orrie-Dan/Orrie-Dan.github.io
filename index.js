function toggleMenu() {
    const menu = document.querySelector('.menu');
    if (menu) {
        menu.classList.toggle('menu-active');
    } else {
        console.error("Menu not found! Check your class names.");
    }
}

