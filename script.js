const display = document.getElementById('display');


// To filter the value no repeated operation
function checkAndSanitizeDisplay() {
    const regex = /([\+\-\*\/]{2,})/g;
    if (regex.test(display.value)) {
        display.value = display.value.replace(regex, (match) => match[match.length - 1]);
    }
}

function updateDisplay(value) {
    display.value += value;
}

function appendToDisplay(input) {
    display.value += input;
    checkAndSanitizeDisplay()
}

function clearDisplay() {
    display.value = "";
}

// Backspace btn function to clear the value one by one
function backDisplay() {
    display.value = display.value.slice(0, -1);
}


// display message for 7ms
function showError() {
    display.value = "Wrong Input"
    setTimeout(function() {
        display.value = "";
    }, 700);
}


// Error catch
function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
       showError()
    }
}


function squareRoot() {
    display.value = Math.sqrt(parseFloat(display.value));
}

function percentage() {
    display.value = parseFloat(display.value) / 100;
}
