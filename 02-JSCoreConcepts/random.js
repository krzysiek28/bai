const randomArray = (min, max, count) => {
    let array = [];
    for (let i = 0; i < count; i++) {
        array.push(randomInt(min, max));
    }
    return array;
};

const randomInt = (min, max) => {
    return min + Math.floor((max - min) * Math.random());
};

console.log(randomArray(5, 20, 10));