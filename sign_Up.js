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
        alert("Email không hợp lệ. Vui lòng nhập email đúng định dạng ***@gmail.com.");
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