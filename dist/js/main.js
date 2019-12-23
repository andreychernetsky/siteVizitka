// burger
(()=> {

let btn = document.querySelector('.menu-btn');
let nav = document.getElementById('nav');

btn.addEventListener('click',function () {
  nav.classList.toggle('active');
});

})();

// accordion
(()=>{
  const acc = document.getElementsByClassName("accordion__header");
  let i;

  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("show");
    }
  }
})();