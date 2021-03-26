function* myGenerator() {
    yield* insideGenerator1();
    yield* insideGenerator2();
    yield* insideGenerator3();

}

function* insideGenerator1() {
    for (let i = 1; i <= 5; i++) {
        var x = yield i;

    } 
}

function* insideGenerator2() {
    for (let i = 10; i <= 15; i++) {
        x = yield i;
    
    }
}

function* insideGenerator3() {
    for (let i = 6; i <= 9; i++) {
        x = yield i;
        
    }
}

var iterator = myGenerator();
var fifteenArray = [];


for (i = 0; i < 16; i++) {
    if (i < 15) {
        fifteenArray.push(iterator.next().value);
    } else {
        fifteenArray.push(iterator.next().value + "!");

    }
}




console.log(fifteenArray.join('#, '));
module.exports = { fifteenArray, myGenerator};