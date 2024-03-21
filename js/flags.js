const customSelect = document.querySelector(".custom-select");
const selectedValue = customSelect.querySelector(".selected-value");
const optionsContainer = customSelect.querySelector(".options-container");

Object.entries(countries).forEach(([code, name]) => {
    let option = document.createElement("div");
    option.classList.add("option");
    option.innerHTML = `<img src="https://flagcdn.com/w20/${code.slice(3, 5).toLowerCase()}.png" alt="${name}" /> <span>${name}</span>`;
    option.addEventListener("click", () => {
        selectedValue.innerHTML = option.innerHTML;
        optionsContainer.style.display = "none";
    });
    optionsContainer.appendChild(option);
});

selectedValue.addEventListener("click", () => {
    optionsContainer.style.display = optionsContainer.style.display === "none" ? "block" : "none";
});

document.addEventListener("click", (e) => {
    if (!customSelect.contains(e.target)) {
        optionsContainer.style.display = "none";
    }
});