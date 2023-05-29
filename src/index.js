function isLeapYear(val) {
    // Determine if val is a leap year
    if (val % 400 === 0) {
        return true;
    }
    else if (val % 100 === 0) {
        return false;
    }
    else if (val % 4 === 0) {
        return true;
    }
    else {
        return false;
    }
}

function checkLeapYear() {
    // Selecting the input element and get its value 
    let inputVal = document.getElementById("inputId").value;
    let outputText = document.getElementById("outputId");

    if (inputVal) {
        // Check if input qualifies as a leap year and display output
        if (isLeapYear(inputVal)) {
            outputText.innerHTML = inputVal.toString() + " IS a leap year";
        } else {
            outputText.innerHTML = inputVal.toString() + " is NOT a leap year";
        }

    } else {
        // Displaying error message if input invalid
        outputText.innerHTML = "Error: year must be a number";
    }
}