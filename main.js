import { HashMap } from './hash-map.js';

const list = new HashMap();

list.set('apple', 'red');
list.set('banana', 'yellow');
list.set('carrot', 'orange');
list.set('dog', 'brown');
list.set('elephant', 'gray');
list.set('frog', 'green');
list.set('grape', 'purple');
list.set('hat', 'black');
list.set('ice cream', 'oreo');
list.set('jacket', 'blue');
list.set('kite', 'rose');
list.set('lion', 'golden');
list.set('moon', 'silver');

console.log(list);

// Get a value
console.log(list.get('carrot')); // orange
console.log(list.get('ice cream')); // white
console.log(list.get('jacket')); // blue

// Return true or false if the key is in the hash map
console.log(list.has('apple')); // true
console.log(list.has('shark')); // false

// Remove the pair with the given key and return true, otherwise return false
console.log(list.remove('shark')); // false
console.log(list.remove('kite')); // true
console.log(list);

// Return the length of the hash map
console.log('Length of the hash map: ', list.length()); // 12

// Remove all entries in the hash map
// list.clear();
// console.log(list.length()); // 0

// Return an array containing all the keys inside the hash map
console.log(list.keys()); // ["elephant", "carrot", "frog", "banana", "apple", "grape", "hat", "dog", "lion", "ice cream", "jacket"]

// Return an array containing all the values in the hash map
console.log(list.values()); // ['gray', 'orange', 'green', 'yellow', 'red', 'purple', 'black', 'brown', 'golden', 'white', 'blue',];

// Return an array containing all the pairs in the hash map
console.log(list.entries());
