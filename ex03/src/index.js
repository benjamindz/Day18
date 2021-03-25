function* myGenerator() {
    yield* [1, 2, 3, 4, 5];
    yield* "Arena";
    yield* arguments;
}

var iterator = myGenerator(6, 7, 8);

var generatorArray = [];


for (var number of iterator) {
    generatorArray.push(number);
}

console.log(generatorArray);