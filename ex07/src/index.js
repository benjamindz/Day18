var numberArray = [9,5,4,11,5,12,13,15,4,2,5];
let uniqueArray = new Set();
numberArray.sort(function(a, b) {
    return a - b;
  });
for(var i=0;i<numberArray.length;i++)
{
    uniqueArray.add(numberArray[i]);
}
console.log(uniqueArray);
module.exports = {numberArray, uniqueArray};