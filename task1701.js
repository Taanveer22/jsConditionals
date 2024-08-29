var fruits = ['apple', 'banana', 'orange'];
// element index
var eleind = fruits.indexOf('banana');
console.log(eleind);

// element replace
var elerep = fruits[1];
fruits[1] = 'mango';
console.log(elerep);
console.log(fruits);

//remove orange
var remv = fruits.pop();
console.log(fruits);

// add watermelon
var add = fruits.push('watermelon');
console.log(fruits);