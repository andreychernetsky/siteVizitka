
let btn = document.querySelector('.menu-btn');
let nav = document.getElementById('nav');

btn.addEventListener('click',function () {
  nav.classList.toggle('active');
});
