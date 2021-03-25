var rockStar = new Map([
    ["artist","The Rolling Stones"],
    ["song","Angie"],
    ["album","Goats Head Soup"],
    ["singer","Mick Jagger"],
]);
var newRock = new Map([]);
let array = [...rockStar.keys()];
for(var i=0;i<array.length;i++)
{
    if(array[i].substr(0,1) > 'a')
    {
        newRock.set(array[i],rockStar.get(array[i]));
    }
}
console.log(newRock);

module.exports = { rockStar, newRock };