// boki trójkąta
a = 3;
b = 4;
c = 5;

function heron (a, b, c) {
    let p = (a + b + c) / 2;
    return Math.sqrt(p*(p-a)*(p-b)*(p-c));
}

console.log(`Pole trókąta o bokach ${a}, ${b} oraz ${c} wynosi ${heron(a, b, c)}.`);