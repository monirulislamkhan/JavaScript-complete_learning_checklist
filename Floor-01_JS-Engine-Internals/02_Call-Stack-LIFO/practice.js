// Topic 02 — Call Stack — LIFO
// ─────────────────────────────────────────
// Practice file — yahan apna code likho
// Browser console ya Node.js mein run karo
//
// HINT: Nested functions banao aur console.trace() se stack dekho
// ─────────────────────────────────────────

// Your code here ↓

/* function fetchFromDB(id) {
  console.trace('Call Stack yahan dekho 👇');
  return 750000;
}

function getPrice(id) {
  return fetchFromDB(id);
}

function getPropertyDetails(id) {
  return getPrice(id);
}

getPropertyDetails(101); */

/* var x = 10;
function a() {
  console.trace('abc');
  console.log(x);
  var x = 20;
}
a(); */

/* console.log(a);
console.log(b);
console.log(c);

var a = 10;
let b = 20;
const c = 30; */

/* var x = 1;
function foo() {
  console.log(x);
  if (false) {
    var x = 2;
  }
}
foo(); */

var a = { name: 'Dubai Housing' };
var b = a;
b = { name: 'New Name' };

console.log(b.name);
