const a = parseFloat(prompt('enter a:'));
const b = parseFloat(prompt('enter b:'));
const c = parseFloat(prompt('enter c:'));

const d = b ** 2 - 4 * a * c;

if (a!==0 && b!==0 && c!==0 && d>0) {
    const x1 = calcSol(a, b, c, d);
    const x2 = calcSol2(a, b, c, d);
    alert('x1= ' + x1 + ' x2= ' + x2);
} else if (a!==0 && b!==0 && c!==0 && d==0) {
    const x = calcOnlySol (a, b, c, d);
    alert('x= ' + x + ' is the solution');
} else if (a!==0 && b!==0 && c!==0 && d<0) {
    alert('No solutions');
} else if (a==0) {
    const x = calcIfaNull (b, c);
    alert('x= ' + x + ' is the solution');
} else if (b==0) {
    const x = calcIfbNull(a, c);
    alert('x= ' + x + ' is the solution');
} else if (c==0) {
    const x2 = calcIfcNull(a, b);
    alert('x1= ' + 0 + ' x2= ' + x2);
} else {
    alert('Do not understand, please make sure you entered numbers');
}

function calcSol(a, b, c, d) {
    return (-b + Math.sqrt(d))/(2 * a);
}

function calcSol2(a, b, c, d) {
    return (-b - Math.sqrt(d))/(2 * a);
}

function calcOnlySol (a, b, c, d) {
    return (-b)/(2 * a);
}

function calcIfaNull (a, b) {
    return (-b)/a;
}

function calcIfbNull (a, b) {
    return Math.sqrt((-b)/(a));
}

function calcIfcNull (a, b) {
    return (-b)/(a);
}