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
    thankYouHeading.textContent = "Thank you for using the Tipulator";

    // Append the "Thank you" message to the body
    document.body.appendChild(thankYouHeading);
});