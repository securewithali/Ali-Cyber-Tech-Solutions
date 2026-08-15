console.log("Ali Cyber Tech Solutions Website Loaded Successfully.");

/* ==================================================
   MOBILE NAVIGATION
================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    // Stop if navigation elements are not present
    if (!menuToggle || !mainNav) {
        console.warn("Mobile navigation elements not found.");
        return;
    }

    /* ===============================
       OPEN / CLOSE MENU
    =============================== */

    menuToggle.addEventListener("click", function (event) {

        // Prevent document click handler
        event.stopPropagation();

        const isOpen = mainNav.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

        // Change hamburger ↔ close icon
        menuToggle.innerHTML = isOpen
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';

    });


    /* ===============================
       CLOSE AFTER CLICKING LINK
    =============================== */

    mainNav.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            mainNav.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

        });

    });


    /* ===============================
       CLOSE WHEN CLICKING OUTSIDE
    =============================== */

    document.addEventListener("click", function (event) {

        if (
            !mainNav.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {

            mainNav.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

        }

    });


    /* ===============================
       CLOSE WITH ESC KEY
    =============================== */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            mainNav.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

        }

    });

});