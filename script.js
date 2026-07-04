// =========================
// Welcome Message
// =========================
window.onload = function () {
    console.log("Welcome to Imperium Hotel!");
};


// =========================
// Booking Form Validation
// =========================
function validateForm() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();

    // Name validation
    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    // Email validation
    if (email === "") {
        alert("Please enter your email.");
        return false;
    }

    // Simple email format check
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email.");
        return false;
    }

    // Phone validation
    if (phone === "") {
        alert("Please enter your phone number.");
        return false;
    }

    if (phone.length < 10) {
        alert("Phone number must be at least 10 digits.");
        return false;
    }

    alert("Booking request submitted successfully!");
    return true;
}


// =========================
// Navbar Click Effect + Active Link
// =========================
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {

        // Remove active from all
        navLinks.forEach(l => l.classList.remove("active"));

        // Add active to clicked
        this.classList.add("active");

        // Click animation
        this.style.transform = "scale(0.9)";

        setTimeout(() => {
            this.style.transform = "scale(1)";
        }, 150);
    });
});


// =========================
// Smooth Scrolling
// =========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});