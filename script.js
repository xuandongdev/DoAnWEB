//slider owl-carousel library
$(document).ready(function(){
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
    });
    //Tien toi slide tiep theo
    $('.customNextBtn').click(function() {
        owl.trigger('next.owl.carousel');
    })
    //Lui ve slide truoc
    $('.customPrevBtn').click(function() {
        owl.trigger('prev.owl.carousel', [300]);
    })
});

// cài đặt khi người dùng cuộn đến vị trí banner-title thì sẽ chạy hiệu ứng
window.addEventListener('scroll', function() {
    var element = document.querySelector('.banner-title');
    var position = element.getBoundingClientRect();
  
    // checking whether fully visible
    if(position.top >= 0 && position.bottom <= window.innerHeight) {
      element.classList.add('animate');
    }
});

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

function changeLanguage(language) {
    // Lấy tất cả các phần tử có lớp lang-vi hoặc lang-en
    var viElements = document.querySelectorAll('.lang-vi');
    var enElements = document.querySelectorAll('.lang-en');

    // Nếu ngôn ngữ là tiếng Việt, ẩn các phần tử tiếng Anh và hiện các phần tử tiếng Việt
    if (language === 'vi') {
        viElements.forEach(function(element) {
            element.style.display = 'block';
        });
        enElements.forEach(function(element) {
            element.style.display = 'none';
        });
    }
    // Nếu ngôn ngữ là tiếng Anh, ẩn các phần tử tiếng Việt và hiện các phần tử tiếng Anh
    else if (language === 'en') {
        viElements.forEach(function(element) {
            element.style.display = 'none';
        });
        enElements.forEach(function(element) {
            element.style.display = 'block';
        });
    }
}