const a = parseFloat(prompt('Please enter a:'));
const b = parseFloat(prompt('Please enter b:'));
const c = parseFloat(prompt('Please enter c:'));

let result = solveQuadr(a, b, c);
document.write(result);

function solveQuadr(a, b, c) {
    const d = calcDiscr(a, b, c);
    if (d > 0) {
        const x1 = calcX1(a, b, d);
        const x2 = calcX2(a, b, d);
        return 'x1 = ' + x1 + '<br/>x2 = ' + x2 + '<br/>';
    }
    else if (d === 0) {
        const x = calcX1(a, b, d);
        return 'x = ' + x + '<br/>';
    }
    else if (d < 0) {
        return 'There are no solution' + '<br/>';
    }
}

function calcDiscr(a, b, c) {
    return b ** 2 - 4 * a * c;
}

function calcX1(a, b, d) {
    return (-b - Math.sqrt(d)) / (2 * a);
}

function calcX2(a, b, d) {
    return (-b + Math.sqrt(d)) / (2 * a);
}
