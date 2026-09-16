"use strict";

document.addEventListener("DOMContentLoaded", function () {

    const loginButton = document.getElementById("loginButton");
    const loginKey = document.getElementById("loginKey");
    const loginMessage = document.getElementById("loginMessage");

    if (!loginButton || !loginKey || !loginMessage) {
        console.error("Login elements not found.");
        return;
    }

    loginButton.addEventListener("click", function () {

        const key = loginKey.value.trim();

        if (key === "") {
            loginMessage.textContent = "Vui lòng nhập KEYLOGIN.";
            loginKey.focus();
            return;
        }

        loginMessage.textContent =
            "Hệ thống xác thực đang được xây dựng.";
    });

    loginKey.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {
            loginButton.click();
        }

    });

});
