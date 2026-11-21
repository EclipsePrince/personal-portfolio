
/* =====================================
   ECLIPSEPRINCE PERSONAL PORTFOLIO
   Main JavaScript
===================================== */


/* =====================================
   1. MOBILE NAVIGATION
===================================== */

// Select navigation elements

const menuButton = document.querySelector(".menu-toggle");

const nav = document.querySelector(".nav-links");


// Toggle mobile navigation menu

menuButton.addEventListener("click", () => {

    const isOpen = nav.classList.toggle("open");

    // Update accessibility attributes

    menuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    // Update button label

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );

    // Change menu icon

    menuButton.textContent = isOpen ? "×" : "☰";

});


/* =====================================
   2. CLOSE MENU AFTER NAVIGATION
===================================== */

// Select all navigation links

document.querySelectorAll(".nav-links a").forEach((link) => {

    link.addEventListener("click", () => {

        // Close navigation menu

        nav.classList.remove("open");

        // Reset accessibility attributes

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        menuButton.setAttribute(
            "aria-label",
            "Open navigation"
        );

        // Reset menu icon

        menuButton.textContent = "☰";

    });

});


/* =====================================
   3. AUTOMATIC COPYRIGHT YEAR
===================================== */

// Get current year

const currentYear = new Date().getFullYear();

// Display year in website footer

document.getElementById("year").textContent = currentYear;


/* =====================================
   END OF ECLIPSEPRINCE JAVASCRIPT
===================================== */
