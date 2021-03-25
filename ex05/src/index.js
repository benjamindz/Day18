let shoppingList = new Map([
    ["Banana", 3],
    ["Pineapple", 5],
    ["Pear", 2],
    ["Carrot", 10],
    ["Apple", 1.5]
]);

var arrKey =[];
var arrValue = [];

for(let key of shoppingList.entries()) {
    arrKey.push(`groceries: ${key[0]}`);
}
console.log(arrKey);

for(let vals of shoppingList.entries()) {
    arrValue.push(`amount: ${vals[1]}`);
}
console.log(arrValue);

for(let col of shoppingList.entries()) {
    console.log(`[ '${col[0]}', ${col[1]} ]`);
}

module.exports = { shoppingList, arrKey, arrValue };