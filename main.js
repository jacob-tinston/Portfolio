// Show Home-Nav

let is = document.getElementById('is');
let nav2 = document.getElementById('two');

const showNav = () => {
    nav2.style.display = 'block'
}

is.addEventListener('click', showNav);

// Show Nav (Mobile)

let menu = document.getElementById('menu-icon');
let nav = document.getElementById('nav');
let cross = document.getElementById('cross-icon');

const showNavMob = () => {
    nav.style.display = 'flex'
    menu.style.display = 'none'
    cross.style.display = 'block'
}

const hideNavMob = () => {
    nav.style.display = 'none'
    menu.style.display = 'block'
    cross.style.display = 'none'
}

menu.addEventListener('click', showNavMob);
cross.addEventListener('click', hideNavMob);