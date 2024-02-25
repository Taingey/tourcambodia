// Navigation Bar
document.querySelector(".menu").addEventListener("click", () => {
    document.querySelector(".navigation-bar").classList.toggle("active");
});

document.querySelector(".navigation-bar-menu-X").addEventListener("click", () => {
    document.querySelector(".navigation-bar").classList.remove("active");
});

// Dropdown
function handleDropdownClick(dropdownId, checkboxId) {
    const dropdown = document.getElementById(dropdownId);
    const checkbox = document.getElementById(checkboxId);

    dropdown.classList.toggle('active');
    checkbox.checked = dropdown.classList.contains('active');
}

document.getElementById("dropdown1").addEventListener("click", () => handleDropdownClick("dropdown1", "checkbox1"));
document.getElementById("dropdown2").addEventListener("click", () => handleDropdownClick("dropdown2", "checkbox2"));

window.addEventListener("click", (event) => {
    const allDropdowns = document.querySelectorAll('.dropdown');
    allDropdowns.forEach((dropdown) => {
        if (!event.target.matches('.dropdown-btn') && !dropdown.contains(event.target)) {
            dropdown.classList.remove('active');
        } 
    });
});


