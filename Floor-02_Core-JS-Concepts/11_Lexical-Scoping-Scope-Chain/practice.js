// Topic 11 — Lexical Scoping & Scope Chain
// ─────────────────────────────────────────
// Practice file — yahan apna code likho
// Browser console ya Node.js mein run karo
//
// HINT: 3-level nested function banao, inner function outer variable access kare
// ─────────────────────────────────────────

// Your code here ↓

/* const city = 'Dubai';
function showListing() {
  const type = 'Villa';
  function showDetails() {
    const beds = 4;
    console.log(beds);
    console.log(type);
    console.log(city);
    console.log(price);
  }
  showDetails();
}

showListing(); */
/* 
const myLocation = 'Global';

function getLocation() {
  console.log(myLocation);
}

function showProperty() {
  const myLocation = 'Dubai Marina'; // ← sirf is function mein
  getLocation(); // ← yahan se call kar rahe hain
}

showProperty(); */

/* function makeTiffin() {
  const food = 'Aloo Paratha'; // ← Mummy made this

  function eatLater() {
    // ← You (the inner function)
    console.log('Got food:', food);
    //                        ↑
    //                  Mummy's food
  }

  return eatLater; // ← Mummy hands you the tiffin (function)
}

const myTiffin = makeTiffin(); // 9 AM — mummy prepared the tiffin
//   ↑ mummy's work (makeTiffin) is now finished

// 10 AM — at school
// Classes are happening
// 12 PM — lunch break
myTiffin(); */

/* function showWelcome() {
  const userName = 'Rahul';
  setTimeout(function () {
    console.log('Welcome, ' + userName);
  }, 2000);
}

showWelcome();
 */

/* function withoutClosure() {
  const userName = 'Rahul';
  console.log('Inside function — userName is:', userName);
  console.log('Function finishing now...');
  // function khatam — userName is now eligible for cleanup
}

withoutClosure();
console.log('Function done. Can we access userName here?');
console.log(userName); */

/* function withClosure() {
  const userName = 'Rahul';
  console.log('Inside function — userName is:', userName);

  // Yeh inner function userName ko hold kar raha hai
  setTimeout(function () {
    console.log('⏰ 3 seconds later — userName is STILL:', userName);
  }, 3000);

  console.log('Function finishing now...');
}

withClosure();
console.log('Function done. Waiting for setTimeout...'); */
