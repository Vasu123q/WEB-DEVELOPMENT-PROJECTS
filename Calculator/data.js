let display = document.querySelector(".screen");

function appendToDisplay(value) {
    if (display.innerText === "0") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    display.innerText = "0";
}

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        let value = button.innerText;

        if (value === "C") {
            clearDisplay();
        } else if (value === "=") {
            try {
                display.innerText = eval(display.innerText.replace("x", "*").replace("÷", "/"));
            } catch {
                display.innerText = "Error";
            }
        } else if (value === "←") { 
            deleteLast();
        } else {
            appendToDisplay(value);
        }
    });
});

function deleteLast() {
    display.innerText = display.innerText.slice(0,-1); 
    if (display.innerText === "") {
        display.innerText = "0"; 
    }
}

