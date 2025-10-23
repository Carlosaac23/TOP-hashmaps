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
list.set('ice cream', 'white');
list.set('jacket', 'blue');
list.set('kite', 'pink');
list.set('lion', 'golden');

console.log(list);

// Get a value
console.log(list.get('carrot')); // orange
console.log(list.get('ice cream')); // white
console.log(list.get('jacket')); // blue

// Return true or false if the key is in the list
console.log(list.has('apple')); // true
console.log(list.has('shark')); // false

// Remove the pair with the given key and return true, otherwise return false
console.log(list.remove('shark')); // false
console.log(list.remove('kite')); // true
console.log(list);
