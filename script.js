// START SLIDE
    //-------CLICK SLIDE-------
let slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
    //-------AUTO SLIDE-------
let slideIndexAuto = 0;
showSlidesAuto();
function showSlidesAuto() {
  let i;
  let slidesAuto = document.getElementsByClassName("mySlides");
  for (i = 0; i < slidesAuto.length; i++) {
    slidesAuto[i].style.display = "none";
  }
  slideIndexAuto++;
  if (slideIndexAuto > slidesAuto.length) {slideIndexAuto = 1}
  slidesAuto[slideIndexAuto-1].style.display = "block";
  setTimeout(showSlidesAuto, 3000); // Change image every 2 seconds
}
    //-------DUNG AUTO SLIDE KHI CLICK-------
function stopAutoSlide() {
    clearTimeout(autoSlideTimeout);
}
    //-------LI THAY DOI THEO SLIDE-------
const numberLi = document.querySelectorAll('.slide-content-left-bottom li')
numberLi.forEach(function(image, index){
    image.addEventListener("click", function(){
        document.querySelector(".slide-content-left-top").style.right = index 
    })
})
// END SLIDE