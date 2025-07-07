const hamburger=document.querySelector(".hamburger");
const menu_bar=document.querySelector(".navbar-menu .menu-bar");
hamburger.addEventListener("click",()=>{
    menu_bar.classList.toggle("show")
});



  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", () => {
    scrollToTopBtn.style.display = window.pageYOffset > 300 ? "block" : "none";
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

