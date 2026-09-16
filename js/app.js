"use strict";

/*
 * CỜ TƯỚNG ONLINE
 *
 * Giai đoạn hiện tại:
 * - Hiển thị popup KEYLOGIN
 * - Chưa xác thực thật
 * - Chưa kết nối server
 *
 * KEYLOGIN thật sẽ KHÔNG được lưu trong JavaScript.
 */

document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("loginButton");
    const loginKey = document.getElementById("loginKey");
    const loginMessage = document.getElementById("loginMessage");

    loginButton.addEventListener("click", () => {
        const key = loginKey.value.trim();

        if (!key) {
            loginMessage.textContent = "Vui lòng nhập KEYLOGIN.";
            loginKey.focus();
            return;
        }

        /*
         * Chưa gửi KEYLOGIN đi đâu.
         * Backend authentication sẽ được xây dựng ở bước sau.
         */
        loginMessage.textContent =
            "Hệ thống xác thực sẽ được kết nối ở bước tiếp theo.";
    });

    loginKey.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            loginButton.click();
        }
    });
});
