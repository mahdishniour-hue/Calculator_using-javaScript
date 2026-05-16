let displayNum = document.getElementById('display');
let listMathKey = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "/", "*", "+", "-"];

window.onload = function () {
    displayNum.focus();
}

function appenToAdd(num) {
    displayNum.value += num;
};

function clearDisplay() {
    displayNum.value = ''
};

function calc() {
    try {
        displayNum.value = eval(displayNum.value)
    }
    catch (error) {
        displayNum.value = 'Erorr'
    };
};

function backSpace() {
    displayNum.value = displayNum.value.slice(0, -1);
}

displayNum.addEventListener("keydown", function (num) {
    if (num.key == "Enter" || num.key == "=") {
        return calc();
    }
    if (num.key == "Delete") {
        return clearDisplay();
    }
    if (num.key == "Backspace") {
        return displayNum.value = displayNum.value.slice(0, -1);
    }
    if (listMathKey.includes(num.key)) {
        displayNum.value += num.key;
    }
})
