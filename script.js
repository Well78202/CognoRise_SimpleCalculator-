document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    const clearButton = document.getElementById('clear');
    const equalsButton = document.getElementById('equals');

    let currentInput = '';
    let previousInput = '';
    let operator = null;

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.getAttribute('data-value');

            if (['+', '-', '*', '/'].includes(value)) {
                operator = value;
                previousInput = currentInput;
                currentInput = '';
            } else {
                currentInput += value;
            }

            display.innerText = currentInput || previousInput || '0';
        });
    });

    equalsButton.addEventListener('click', function() {
        if (operator && previousInput !== '' && currentInput !== '') {
            previousInput = parseFloat(previousInput);
            currentInput = parseFloat(currentInput);

            switch (operator) {
                case '+':
                    currentInput = previousInput + currentInput;
                    break;
                case '-':
                    currentInput = previousInput - currentInput;
                    break;
                case '*':
                    currentInput = previousInput * currentInput;
                    break;
                case '/':
                    currentInput = previousInput / currentInput;
                    break;
            }

            display.innerText =currentInput;
            operator = null;
            previousInput = '';
        }
    });

    clearButton.addEventListener('click', function() {
        currentInput = '';
        previousInput = '';
        operator = null;
        display.innerText = '0';
    });
});
