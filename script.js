document.addEventListener("DOMContentLoaded", function () {
    // Get the elements
    var displayTextElement = document.getElementById("displayText");
    var changeTextBtn = document.getElementById("changeTextBtn");

    // Add click event listener to the button
    changeTextBtn.addEventListener("click", function () {
        // Change the text when the button is clicked
        displayTextElement.textContent = "Text Changed!";
    });
});
