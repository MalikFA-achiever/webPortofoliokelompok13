const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLinks = document.querySelectorAll('.navbar__links');

menu.addEventListener('click', () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

// Tutup menu setelah klik link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('is-active');
    menuLinks.classList.remove('active');
  });
});

const accordions = document.querySelectorAll('.materi-box');

accordions.forEach(box => {
  const header = box.querySelector('.materi-header');
  const content = box.querySelector('.materi-content');

  header.addEventListener('click', () => {
    if (box.classList.contains('active')) {
      content.style.maxHeight = null;
      box.classList.remove('active');
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      box.classList.add('active');
    }
  });
});
