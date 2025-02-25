document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const submitButton = form.querySelector("button[type='submit']");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Ma'lumotlarni olish
        const fullName = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!fullName || !email || !phone || !message) {
            alert("Barcha maydonlarni to'ldiring!");
            return;
        }

        // Telegram bot ma'lumotlari
        const botToken = "6242871906:AAGhSJRtdkHFg6UjY11pcrWlwzo7cSucyDg";
        const chatId = "808243421";
        const text = `📩 Yangi xabar! %0A👤 Ism: ${fullName} %0A📧 Email: ${email} %0A📞 Telefon: ${phone} %0A💬 Xabar: ${message}`;

        // Telegramga so‘rov jo‘natish
        fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${text}`, {
            method: "GET"
        })
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    alert("Xabar muvaffaqiyatli yuborildi!");
                    form.reset(); // Shaklni tozalash
                    submitButton.innerText = "Yuborildi ✅";
                    submitButton.disabled = true;
                    submitButton.style.cursor = "not-allowed";
                    submitButton.style.opacity = "0.6";

                    setTimeout(() => {
                        submitButton.innerText = "Yuborish";
                        submitButton.disabled = false;
                        submitButton.style.opacity = "1";
                        submitButton.style.cursor = "pointer";
                    }, 5000);
                } else {
                    alert("Xabar yuborishda xatolik yuz berdi!");
                }
            })
            .catch(error => {
                console.error("Xatolik:", error);
                alert("Xabar yuborilmadi, qaytadan urinib ko‘ring!");
            });
    });
});
