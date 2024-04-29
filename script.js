// START SLIDE
//-------CLICK SLIDE-------
let slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
    showSlides((slideIndex += n));
}
// Thumbnail image controls
function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("activeCap");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}
//-------AUTO SLIDE-------
let slideIndexAuto = 0;
showSlidesAuto();

function showSlidesAuto() {
    let i;
    let slidesAuto = document.getElementsByClassName("mySlides");
    let dotsAuto = document.getElementsByClassName("activeCap");
    for (i = 0; i < slidesAuto.length; i++) {
        slidesAuto[i].style.display = "none";
        dotsAuto[i].classList.remove("active");
    }
    slideIndexAuto++;
    if (slideIndexAuto > slidesAuto.length) {
        slideIndexAuto = 1;
    }
    slidesAuto[slideIndexAuto - 1].style.display = "block";
    dotsAuto[slideIndexAuto - 1].classList.add("active");
    setTimeout(showSlidesAuto, 3000); // Change image every 2 seconds
}
//-------DUNG AUTO SLIDE KHI CLICK-------
function stopAutoSlide() {
    clearTimeout(autoSlideTimeout);
}
//-------LI THAY DOI THEO SLIDE-------
// const numberLi = document.querySelectorAll('.slide-content-left-bottom li')
// numberLi.forEach(function(image, index){
//     image.addEventListener("click", function(){
//         document.querySelector(".slide-content-left-top").style.right = index
//     })
// })
// END SLIDE

// Trang đăng kí và đăng nhập
const title = document.querySelector(".title1 h1");
const letter = "elcome !";
title.textContent = "W";
var index = 0;

setInterval(() => {
    title.textContent += letter[index];
    index++;
    if (index == letter.length + 1) {
        index = 0;
        title.textContent = "W";
    }
}, 500);

// Trang đăng ký
function checkNumber(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var rePassword = document.getElementById("re-password").value;
    var sdt = document.getElementById("sdt").value;
    var checkbox = document.getElementById("checkbox").checked;
    // Kiểm tra email có đúng định dạng ***@gmail.com
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert(
            "Email không hợp lệ. Vui lòng nhập email đúng định dạng ***@gmail.com."
        );
        return;
    }

    // Kiểm tra số điện thoại có 10 ký tự
    var cleanedSdt = sdt.replace(/\D/g, "");
    if (cleanedSdt.length !== 10) {
        alert("Số điện thoại không hợp lệ. Vui lòng nhập 10 số.");
        return;
    }

    // Kiểm tra mật khẩu có ít nhất 8 ký tự
    if (password.length < 8) {
        alert("Mật khẩu phải chứa ít nhất 8 ký tự.");
        return;
    }

    // Kiểm tra mật khẩu nhập lại có khớp với mật khẩu đã nhập không
    if (password !== rePassword) {
        alert("Mật khẩu nhập lại không khớp.");
        return;
    }

    // Kiểm tra checkbox đã được chọn
    if (!checkbox) {
        alert("Bạn cần chấp nhận các điều khoản và điều kiện.");
        return;
    }

    window.location.href = "./log_In.html";
}

function timKiem() {
    var searchInput = document.getElementById("search").value.trim();
    if (searchInput !== "") {
        window.location.href =
            "product.html?search=" + encodeURIComponent(searchInput);
    }
    return false;
}