function calculator_values() {
    var num_1 = parseFloat(document.getElementById('number1').value);
    var num_2 = parseFloat(document.getElementById('number2').value);
    var operator = document.getElementById('op').value;
    var resultElement = document.getElementById('result');
    var writeElement = document.getElementById('write');

    // Check if either input is empty or operator is not selected
    if (isNaN(num_1) || isNaN(num_2) || operator.trim() === "") {
        resultElement.value = "";
        writeElement.innerText = "Please enter valid numbers and select an operator.";
        writeElement.style.color = "red";
        return;
    }

    // Perform calculations based on the selected operator
    switch (operator) {
        case "+":
            resultElement.value = num_1 + num_2;
            break;
        case "-":
            resultElement.value = num_1 - num_2;
            break;
        case "*":
            resultElement.value = num_1 * num_2;
            break;
        case "/":
            if (num_2 === 0) {
                resultElement.value = "";
                writeElement.innerText = "Division by zero is not allowed.";
                writeElement.style.color = "red";
            } else {
                resultElement.value = num_1 / num_2;
            }
            break;
        case "%":
            if (num_2 === 0) {
                resultElement.value = "";
                writeElement.innerText = "Modulus by zero is not allowed.";
                writeElement.style.color = "red";
            } else {
                resultElement.value = num_1 % num_2;
            }
            break;
        default:
            resultElement.value = "";
            writeElement.innerText = "Please select a valid operator.";
            writeElement.style.color = "red";
    }
}

function get_reset() {
    var resultElement = document.getElementById('result');
    var writeElement = document.getElementById('write');
    document.getElementById('number1').value = "";
    document.getElementById('number2').value = "";
    document.getElementById('op').value = " ";
    resultElement.value = "0";
    writeElement.innerText = "";
    writeElement.style.color = "red";
}

