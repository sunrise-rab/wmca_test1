function setDarkMode() {
    let body = document.getElementById("heading");
    body.style = "background-color: black; color: white;"
}

function setLightMode() {
    let body = document.getElementById("heading");
    body.style = "background-color: white; color: black;"
}

function showMore() {
    let post = document.getElementById("answer");
    post.innerHTML = `
        <p>JavaScript is a scripting or programming language that allows you to implement complex features on web pages</p>
        `
}

function changeTypeEmail() {
    document.getElementById("login").type = "email";
}

const closeBtn = document.getElementById("close-btn");

// Add a click event listener to the "Close" button
closeBtn.addEventListener("click", function () {
    // Clear the page content
    document.body.innerHTML = "";

    // Create a new heading element for the "Thank you" message
    const thankYouHeading = document.createElement("h1");
    thankYouHeading.textContent = "Thank you Marko";

    // Append the "Thank you" message to the body
    document.body.appendChild(thankYouHeading);
});

// Get the form and result elements
const conversionForm = document.getElementById("conversion-form");
const poundsAmountInput = document.querySelector("input[name='pounds-amount']");
const resultElement = document.getElementById("result");

// Add a submit event listener to the form
conversionForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    // Get the amount in pounds from the input field
    const poundsAmount = parseFloat(poundsAmountInput.value);

    // Check if the input is a valid number
 
        // Perform the conversion (1 pound = 1.15 euros)
        const eurosAmount = poundsAmount * 1.15;

        // Display the result
        resultElement.textContent = `${poundsAmount} pounds is equal to ${eurosAmount.toFixed(2)} euros.`;
    
});