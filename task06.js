'use-strict'

function maximum(firstNumber, secondNumber, thirdNumber) {
    let n = arguments.length; // number of inputs
    let max = arguments[0];

    for ( let i = 0; i < n; i++) {
        if ( arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
