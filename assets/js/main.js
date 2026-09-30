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
/* =========================================================
   ALI CYBER TECH SOLUTIONS
   Services & Pricing Category Filter
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const filterButtons = document.querySelectorAll(".acts-filter-btn");
    const serviceCards = document.querySelectorAll(".acts-price-card");

    if (!filterButtons.length || !serviceCards.length) {
        return;
    }

    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const filter = this.getAttribute("data-filter");

            /* Active button */
            filterButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            this.classList.add("active");

            /* Filter cards */
            serviceCards.forEach(function (card) {

                const category = card.getAttribute("data-category");

                if (filter === "all" || category === filter) {

                    card.classList.remove("is-hidden");

                    /* Restart animation */
                    card.classList.remove("is-visible");

                    void card.offsetWidth;

                    card.classList.add("is-visible");

                } else {

                    card.classList.remove("is-visible");
                    card.classList.add("is-hidden");

                }

            });

        });

    });

});