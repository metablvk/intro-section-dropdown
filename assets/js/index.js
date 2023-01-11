const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const sideNav = document.querySelector('.side-nav');
const dropdowns = document.querySelectorAll('.dropdown');
const dropdownMenus = document.querySelectorAll('.dropdown-menu');
const arrowsDown = document.querySelectorAll('.arrow');
menuIcon.addEventListener('click', () => {
  sideNav.classList.add('show-nav');
});

closeIcon.addEventListener('click', () => {
  console.log('clciked');
  sideNav.classList.remove('show-nav');
});

dropdowns.forEach((dropdown, i) => {
  dropdown.addEventListener('click', (e) => {
    console.log(dropdownMenus[i]);
    dropdownMenus[i].classList.toggle('show-dropdown');
    if (arrowsDown[i].getAttribute('src') === './images/icon-arrow-down.svg') {
      arrowsDown[i].setAttribute('src', './images/icon-arrow-up.svg');
    } else {
      arrowsDown[i].setAttribute('src', './images/icon-arrow-down.svg');
    }
  });
});
