let c=document.querySelector(".center");
let a=document.querySelector(".menu");
let cross=document.querySelector(".crs");
let icon_menu=document.querySelector('.mnu');
let h1=document.querySelector(".parah1")

icon_menu.addEventListener("click",showmenu);
a.style.display="none";
cross.style.display="none";

function showmenu(){

    if (a.style.display === "none") {
        a.style.display = "block";
      }
      else {
        a.style.display = "none";
      } 
      icon_menu.style.display="none";
      cross.style.display="block";
      h1.style.display="none";
}
cross.addEventListener("click",hidemenu);

function hidemenu(){

  if (a.style.display === "block") {
      a.style.display = "none";
    }
    else {
      a.style.display = "block";
    } 
    icon_menu.style.display="block";
    cross.style.display="none";
    h1.style.display="block";
}











let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); 
}











