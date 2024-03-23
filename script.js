document.addEventListener("DOMContentLoaded", function() {
    let images = document.querySelectorAll(".slide-content-top img");

    let currentIndex = 0;
    const maxIndex = images.length - 1;

    function slideToNext() {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlide();
    }

    function updateSlide() {
        images.forEach((img, index) => {
            let translateValue = (index - currentIndex) * 100;
            img.style.transform = `translateX(${translateValue}%)`;
        });
    }

    // Tự động lướt sau mỗi khoảng thời gian
    setInterval(slideToNext, 3000);

    // Xử lý sự kiện khi click vào hình ảnh
    images.forEach((img, index) => {
        img.addEventListener("click", function() {
            currentIndex = index;
            updateSlide();
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide-content-top a");
    const totalSlides = slides.length;
    let currentSlideIndex = 0;
  
    function showSlide(index) {
      slides.forEach(slide => slide.style.transform = `translateX(-${index * 100}%)`);
    }
  
    document.querySelector(".bxs-chevron-left").addEventListener("click", function() {
      currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
      showSlide(currentSlideIndex);
    });
  
    document.querySelector(".bxs-chevron-right").addEventListener("click", function() {
      currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
      showSlide(currentSlideIndex);
    });
  });
      