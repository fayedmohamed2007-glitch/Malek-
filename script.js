document.addEventListener("DOMContentLoaded", function () {

    // =========================================
    // LOADING SCREEN
    // =========================================

    const loadingScreen = document.getElementById("loading-screen");

    setTimeout(function () {
        if (loadingScreen) {
            loadingScreen.classList.add("hide");
        }
    }, 1000);


    // =========================================
    // MUSIC
    // =========================================

    const music = document.getElementById("birthdayMusic");
    const musicBtn = document.getElementById("musicBtn");

    if (music && musicBtn) {

        musicBtn.addEventListener("click", function () {

            if (music.paused) {

                music.play()
                    .then(function () {
                        musicBtn.classList.add("playing");
                        musicBtn.textContent = "⏸️";
                    })
                    .catch(function (error) {
                        console.log("Music error:", error);
                        alert("اتأكد إن ملف music.mp3 موجود جنب index.html 🎵");
                    });

            } else {

                music.pause();

                musicBtn.classList.remove("playing");
                musicBtn.textContent = "🎵";
            }

        });

    }


    // =========================================
    // GIFT
    // =========================================

    const giftBox = document.getElementById("gift-box");
    const surpriseModal = document.getElementById("surprise-modal");
    const closeBtn = document.getElementById("close-surprise");

    if (giftBox && surpriseModal) {

        giftBox.addEventListener("click", function () {

            giftBox.classList.add("open");

            setTimeout(function () {

                surpriseModal.classList.add("show");

                createConfetti();

            }, 700);

        });

    }


    // =========================================
    // CLOSE SURPRISE
    // =========================================

    if (closeBtn && surpriseModal) {

        closeBtn.addEventListener("click", function () {

            surpriseModal.classList.remove("show");

        });

    }


    // =========================================
    // CLOSE MODAL BY CLICKING OUTSIDE
    // =========================================

    if (surpriseModal) {

        surpriseModal.addEventListener("click", function (event) {

            if (event.target === surpriseModal) {

                surpriseModal.classList.remove("show");

            }

        });

    }


    // =========================================
    // SCROLL REVEAL
    // =========================================

    const revealElements =
        document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                    }

                });

            },
            {
                threshold: 0.15
            }
        );

        revealElements.forEach(function (element) {
            observer.observe(element);
        });

    } else {

        revealElements.forEach(function (element) {
            element.classList.add("visible");
        });

    }


    // =========================================
    // CONFETTI
    // =========================================

    function createConfetti() {

        const container =
            document.getElementById("confetti-container");

        if (!container) return;

        container.innerHTML = "";

        for (let i = 0; i < 80; i++) {

            const confetti =
                document.createElement("div");

            confetti.classList.add("confetti");

            confetti.textContent = "🎉";

            confetti.style.left =
                Math.random() * 100 + "%";

            confetti.style.animationDuration =
                (Math.random() * 3 + 2) + "s";

            confetti.style.animationDelay =
                Math.random() * 1.5 + "s";

            confetti.style.fontSize =
                (Math.random() * 12 + 8) + "px";

            container.appendChild(confetti);

        }

    }
// =========================================
// CELEBRATE BUTTON
// =========================================

function launchConfetti() {

    const container =
        document.getElementById("confetti-container");

    if (!container) return;

    container.innerHTML = "";

    for (let i = 0; i < 120; i++) {

        const confetti =
            document.createElement("div");

        confetti.classList.add("confetti");

        confetti.textContent = ["🎉", "🎊", "❤️", "✨", "🎈", "⭐"][
            Math.floor(Math.random() * 6)
        ];

        confetti.style.left =
            Math.random() * 100 + "%";

        confetti.style.animationDuration =
            (Math.random() * 3 + 2) + "s";

        confetti.style.animationDelay =
            Math.random() * 0.5 + "s";

        confetti.style.fontSize =
            (Math.random() * 18 + 12) + "px";

        container.appendChild(confetti);
    }

}
// =========================================
// CELEBRATE BUTTON
// =========================================

function launchConfetti() {

    const container =
        document.getElementById("confetti-container");

    if (!container) return;

    container.innerHTML = "";

    for (let i = 0; i < 120; i++) {

        const confetti =
            document.createElement("div");

        confetti.classList.add("confetti");

        confetti.textContent = ["🎉", "🎊", "❤️", "✨", "🎈", "⭐"][
            Math.floor(Math.random() * 6)
        ];

        confetti.style.left =
            Math.random() * 100 + "%";

        confetti.style.animationDuration =
            (Math.random() * 3 + 2) + "s";

        confetti.style.animationDelay =
            Math.random() * 0.5 + "s";

        confetti.style.fontSize =
            (Math.random() * 18 + 12) + "px";

        container.appendChild(confetti);
    }

}
});