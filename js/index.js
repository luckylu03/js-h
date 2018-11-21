let a = parseInt(prompt('enter a'));
let b = parseInt(prompt('enter b'));
let c = parseInt(prompt('enter c'));

let d = b ** 2 - 4 * a * c;

if (a!==0 && b!==0 && c!==0 && d>0) {
    let x1 = calcSol(a, b, c, d);
    let x2 = calcSol2(a, b, c, d);
    alert('x1= ' + x1 + ' x2= ' + x2);
} else if (a!==0 && b!==0 && c!==0 && d==0) {
    let x = calcx (a, b, c, d);
    alert('x= ' + x + ' is the solution');
} else if (a!==0 && b!==0 && c!==0 && d<0) {
    alert('No solutions');
} else if (a==0) {
    let x = calcIfa (b, c);
    alert('x= ' + x + ' is the solution');
} else if (b==0) {
    let x = calcIfb(a, c);
    alert('x= ' + x + ' is the solution');
} else if (c==0) {
    let x2 = calcIfc(a, b);
    alert('x1= ' + 0 + ' x2= ' + x2);
} else {
    alert('Do not understand, please make sure you entered numbers');
}

function calcSol(num1, num2, num3, num4) {
    return (-num2 + Math.sqrt(num4))/(2 * num1);
}

function calcSol2(num1, num2, num3, num4) {
    return (-num2 - Math.sqrt(num4))/(2 * num1);
}

function calcx (num1, num2, num3, num4) {
    return (-num2)/(2 * num1);
}

function calcIfa (num1, num2) {
    return (-num2)/(num1);
}

function calcIfb (num1, num2) {
    return Math.sqrt((-num2)/(num1))
}

function calcIfc (num1, num2) {
    return (-num2)/(num1);
}