// =========================
// Welcome Message
// =========================
window.onload = function () {
    console.log("Welcome to Vispho Hotel!");
};

// =========================
// Booking Form Validation
// =========================
function validateForm() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();

    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    if (email === "") {
        alert("Please enter your email.");
        return false;
    }

    if (phone === "") {
        alert("Please enter your phone number.");
        return false;
    }

    alert("Booking request submitted successfully!");

    return true;
}