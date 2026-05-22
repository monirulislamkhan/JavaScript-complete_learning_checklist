// Topic 01 — V8 — Parse, Compile, Execute
// ─────────────────────────────────────────
// Practice file — yahan apna code likho
// Browser console ya Node.js mein run karo
//
// HINT: console.log() likho aur DevTools Sources tab mein dekho
// ─────────────────────────────────────────
//
// TARIKA: har exercise mein pehle PREDICT karo (comment likho),
// phir RUN karo, phir DevTools Sources tab mein step karke dekho.


// ── Exercise 1 — Hoisting = Parse phase ka proof ──
// PREDICT: x = ?, greet() = ?, y = ?
console.log(x);
console.log(greet());
console.log(y);

var x = 1;
function greet() { return 'hi'; }
var y = function () { return 'bye'; };
// MERA JAWAB (kyun aisa hua?):
//


// ── Exercise 2 — Lazy parsing ──
// Niche function ko KABHI call mat karo. Kya "Main chala?" print hota hai?
function neverCalled() {
  // let z =   ;  // <-- yahan syntax error uncomment karo
}
console.log('Main chala?');
// Ab error ko top-level pe le jao aur farq dekho.
// MERA JAWAB:
//


// ── Exercise 3 — TDZ (let vs var) ──
// let ko throw karwao, phir var se undefined lao — same access-before-declare.
// MERA JAWAB (ek line farq):
//


// ── Exercise 4 — Execution order ──
// PEHLE bina run kiye output order likho, phir confirm karo.
console.log('A');
function f() { console.log('B'); }
console.log('C');
f();
console.log('D');
// MERA PREDICT: ___, ___, ___, ___, ___


// ── Exercise 5 — Hot function (TurboFan optimize vs deopt) ──
function add(a, b) { return a + b; }

console.time('only-numbers');
let s1 = 0;
for (let i = 0; i < 10_000_000; i++) s1 = add(s1, 1);
console.timeEnd('only-numbers');

console.time('mixed-types');
let s2 = 0;
for (let i = 0; i < 10_000_000; i++) s2 = add(s2, i % 2 ? 1 : '1');
console.timeEnd('mixed-types');
// MERA OBSERVATION (kaunsa fast, kyun?):
//
