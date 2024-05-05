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

// cart
var itemList = {
    "ip01": { "name": "IPhone 15", "price": 19490000, "photo": "./img/product/Iphone/iphone-15-pink.png" },
    "ip02": { "name": "IPhone 15 Plus", "price": 2299000, "photo": "./img/product/Iphone/iphone-15-plus-blue.png" },
    "ip03": { "name": "IPhone Pro", "price": 2549000, "photo": "./img/product/Iphone/iphone-15-pro-finish-select.png" },
    "ip04": { "name": "IPhone Pro Max", "price": 29490000, "photo": "./img/product/button-dat-hang.gif" },
    "ip05": { "name": "IPhone 11", "price": 899000, "photo": "./img/product/button-dat-hang.gif" },
    "ip06": { "name": "IPhone 13", "price": 13990000, "photo": "./img/product/button-dat-hang.gif" },
    "ip07": { "name": "IPhone 14", "price": 20090000, "photo": "./img/product/Iphone/iphone-13.jpg" },
    "ip08": { "name": "IPhone 12", "price": 14990000, "photo": "./img/product/Iphone/iphone-14.jpeg" },

    "ss01": { "name": "Samsung Galaxy Z Fold 5", "price": 29990000, "photo": "./img/product/sumSung/samsung-galaxy-a04.jpg" },
    "ss02": { "name": "Samsung Galaxy A15 5G", "price": 5490000, "photo": "./img/product/sumSung/samsung-galaxy-a15-5g-xanh.jpg" },
    "ss03": { "name": "Samsung Galaxy A25 5G", "price": 6190000, "photo": "./img/product/sumSung/samsung-galaxy-a25-den.jpg" },
    "ss04": { "name": "Samsung Galaxy S24 Ultra 5G", "price": 31790000, "photo": "./img/product/sumSung/samsung-galaxy-s24-ultra-grey.jpg" },
    "ss05": { "name": "Samsung Galaxy A34 5G 512GB", "price": 8290000, "photo": "./img/product/sumSung/samsung-galaxy-a34.jpg" },
    "ss06": { "name": "Samsung Galaxy M34 5G 128GB", "price": 6290000, "photo": "./img/product/sumSung/samsung-galaxy-m34-xanh-ngoc.jpg" },
    "ss07": { "name": "Samsung Galaxy M54 5G 256GB", "price": 8490000, "photo": "./img/product/sumSung/samsung-galaxy-m54-bac.jpg" },
    "ss08": { "name": "Samsung Galaxy S23 Ultra 5G", "price": 21090000, "photo": "./img/product/sumSung/samsung-galaxy-s23-ultra.jpg" },
}

function addCart(code) {
    var number = parseInt(document.getElementById(code).value);
    var name = itemList[code].name;
    if (number == 0)
        return;
    if (typeof localStorage[code] === "undefined") {
        window.localStorage.setItem(code, number);
    } else {
        var current = parseInt(window.localStorage.getItem(code));
        if (current + number > 99) {
            window.localStorage.setItem(code, 99);
            alert("Mỗi mặt hàng chỉ có thể đặt 100 sản phẩm cho mỗi đơn hàng.");
            return;
        } else
            window.localStorage.setItem(code, current + number);
    }
    alert("Đã thêm" + number + " sản phẩm " + name + " vào giỏ hàng. Số lượng sản phẩm " + name + " đã đặt là " + parseInt(window.localStorage.getItem(code)) + ".");
}

function openCart() {
    window.location.href = "cart.html";
}


function showCart() {
    var formatter = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' });
    var container = document.getElementById("cartDetail").getElementsByTagName('tbody')[0];
    container.innerHTML = "";

    var sum = 0;
    var total = 0;
    for (var i = 0; i < window.localStorage.length; i++) {
        if (typeof itemList[localStorage.key(i)] === "undefined")
            continue;
        var tr = document.createElement("tr");
        var photoCell = document.createElement("td");
        var nameCell = document.createElement("td");
        var priceCell = document.createElement("td");
        var numberCell = document.createElement("td");
        var sumCell = document.createElement("td");
        var removeCell = document.createElement("td");
        var removeLink = document.createElement("a");
        var item = itemList[localStorage.key(i)];
        var number = localStorage.getItem(localStorage.key(i));

        photoCell.style.textAlign = "center";
        photoCell.innerHTML = "<img src='" + item.photo + "' class='round-figure 'width='100px'/>";

        nameCell.innerHTML = item.name;

        priceCell.innerHTML = formatter.format(item.price);
        priceCell.style.textAlign = "left";

        numberCell.innerHTML = number;
        numberCell.style.textAlign = "center";

        sum = number * item.price;
        sumCell.innerHTML = formatter.format(sum);
        sumCell.style.textAlign = "left";

        removeLink.innerHTML = "<i class='fa fa-trash icon-red'></i>";

        removeLink.setAttribute("href", "#");
        removeLink.setAttribute("data-code", localStorage.key(i));
        removeLink.onclick = function() {
            removeCart(this.dataset.code);
        };

        removeCell.style.textAlign = "center";
        removeCell.appendChild(removeLink);

        tr.appendChild(photoCell);
        tr.appendChild(nameCell);
        tr.appendChild(numberCell);
        tr.appendChild(priceCell);
        tr.appendChild(sumCell);
        tr.appendChild(removeCell);

        container.appendChild(tr);
        total += sum;
    }
    document.getElementById("bill_total").innerHTML = formatter.format(total);

}


function removeCart(code) {
    if (typeof window.localStorage[code] !== "undefined") {
        window.localStorage.removeItem(code);
        document.getElementById("cartDetail").getElementsByTagName('tbody')[0].innerHTML = "";
        showCart();
    }
}

window.onstorage = () => { showCart(); };