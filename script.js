
  var slideIndex = 0;
  showSlides();

  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    var slideTexts = document.querySelectorAll('.slide-content-left-bottom li');

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
    updateActiveText(slideIndex - 1, slideTexts);
    setTimeout(showSlides, 1000); // Change image every 2 seconds
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function updateActiveText(index, texts) {
    for (var i = 0; i < texts.length; i++) {
      if (i === index) {
        texts[i].classList.add('active');
      } else {
        texts[i].classList.remove('active');
      }
    }
  }