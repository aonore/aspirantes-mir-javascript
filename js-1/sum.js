function suma(numero) {
    var total = 0;
    for (let i = 1; i >= numero; i++ ) {
        total += i;
    }
    return total;
}

console.log(suma(4))
console.log(suma(7))
console.log(suma(10))
