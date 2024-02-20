// Part 1
$(document).ready(function() {
    $("#greetButton").click(function() {
        var name = $("#nameInput").val();

        if (name.trim() !== "") {
            var greetingMessage = "Hello there " + name + "!";
            $("#greetMessage").text(greetingMessage);
        } else {
            $("#greetMessage").text("Please enter a valid name!");
        }
    });
});

// Part 2
$(document).ready(function() {
    $("#generateHeaderButton").click(function() {
        var text = $("#textInput").val();
        var color = $("#colorInput").val();

        if (text.trim() === "") {
            displayErrorMessage("Please enter a valid text.");
        } else if (!isValidColor(color)) {
            displayErrorMessage("Please enter a valid color.");
        } else {
            var newHeader = $("<h1>").text(text).css("color", color);

            $("#headersContainer").append(newHeader);

            $("#errorMessage").text("");
        }
    });

    function displayErrorMessage(message) {
        $("#errorMessage").text(message);
    }

    function isValidColor(color) {
        var regex = /^#[0-9A-Fa-f]{6}$/;
        return regex.test(color);
    }
});
