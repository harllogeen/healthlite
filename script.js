const menuIcon = document.querySelector('.hamburger-menu');
const mySideBar = document.querySelector('.sidebar');
const container = document.querySelector('.container')

menuIcon.addEventListener('click', () => {
    mySideBar.classList.toggle('change');
    container.classList.toggle('change')
});