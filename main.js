let displayNum = document.getElementById('display');

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