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

/* var a = { name: 'Dubai Housing' };
var b = a;
b = { name: 'New Name' };

console.log(b.name); */
/* var a = { name: 'Dubai Housing' };
var b = a;
console.log(a); */
/* function validatePageNumber(paramPage) {
  paramPage = 'nam';
  if (!paramPage) return 1;
  const pageNumber = Number(paramPage);
  console.log(pageNumber);
}
console.log(validatePageNumber(), typeof validatePageNumber()); */
/* console.log(Number('abc'));
console.log(Number('-5'));
console.log(first); */

/* function applyFilter() {
  console.log(city); // 💥 ReferenceError? NAHI!
  // Yahan koi error nahi

  if (true) {
    // console.log(city); // 💥 ReferenceError ← yahan crash
    let city = 'Dubai';
  }
}
applyFilter();
 */

/* function applyFilter() {
  if (true) {
    console.log(city); // 💥 ReferenceError: Cannot access 'city' before initialization
    let city = 'Dubai';
  }
}

applyFilter(); */

/* function bookProperty() {
  console.log(typeof bookingId); // Line A
  console.log(typeof userName); // Line B

  let bookingId = 'BK-12345';
  var userName = 'Rahul';
}

bookProperty(); */

/* function test1() {
  console.log(x); // 💥 ReferenceError: x is not defined

  if (true) {
    let x = 10;
  }
}
test1(); */

/* console.log(typeof notDeclared);
console.log(typeof notYetDeclared);
let notYetDeclared = 'hello';

function greet() {
  if (true) {
    console.log(typeof message);
    let message = 'hi';
  }
}
greet();
 */

// const currency = 'AED';
function formatPrice(price) {
  console.log(`${currency} ${price}`);
}

function japanModule() {
  const currency = 'JPY';
  formatPrice(5000);
}

japanModule();
