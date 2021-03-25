let myArr = [];

function* multiplication(x) {
    var l = x;

    for (let i = 0; i < l; i++) {
        yield x *= 2
        myArr.push(x);
    }
}

num = multiplication(3);

for (let number of num) {
    console.log(number);
}

module.exports = multiplication;