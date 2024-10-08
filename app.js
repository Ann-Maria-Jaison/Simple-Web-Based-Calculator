let displayValue = '';

function sendKey(key) {
    displayValue += key;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
        document.getElementById('display').value = displayValue;
    } catch (e) {
        document.getElementById('display').value = 'Error';
        displayValue = '';
    }
}
