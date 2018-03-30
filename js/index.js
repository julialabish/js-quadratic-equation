function solveQuadraticEquation() {
    let a = +prompt('Please enter a:');
    let b = +prompt('Please enter b:');
    let c = +prompt('Please enter c:');

    let d = b * b - 4 * a * c;

    if (d < 0) {
        document.write('<h2>There are no solution.</h2>');
    }
    else if (d == 0) {
        let x = (-b) / (2 * a);

        document.write('<h1>Solution for ' + a + '*x*x + ' + b + '*x + ' + c + ' = 0' + '</h1>');
        document.write('<p>' + 'x = ' + x + '</p>');
    }
    else {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);

        document.write('<h1>Solution for ' + a + '*x*x + ' + b + '*x + ' + c + ' = 0' + '</h1>');
        document.write('<p>' + 'x1 = ' + x1 + '</p>');
        document.write('<p>' + 'x2 = ' + x2 + '</p>');
    }
}
