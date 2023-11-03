    document.addEventListener("DOMContentLoaded", function() {
        const checkbox = document.getElementById("checkbox");
        const hamburger = document.querySelector(".hamburger");

        // Sử dụng sự kiện "click" trên document để bắt sự kiện khi bất kỳ phần tử nào trên trang web được nhấp.
        document.addEventListener("click", function(event) {
            // Kiểm tra nếu người dùng nhấp vào ô checkbox hoặc menu hamburger thì không đóng menu.
            if (event.target === checkbox || event.target === hamburger) {
                return;
            }

            // Nếu người dùng nhấp vào bất kỳ nơi nào khác trên trang, đóng menu bằng cách bỏ kiểm tra ô checkbox.
            checkbox.checked = false;
        });
    });