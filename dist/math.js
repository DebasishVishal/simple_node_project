"use strict";
// src/math.js
/**
 * Adds two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two numbers.
 */
function add(a, b) {
    return a + b;
}
// This will cause a runtime error because we're passing a string instead of a number.
const result = add(5, 10);
console.log(result);
// Due to allowJS and CheckJS Benefits:
// Catch type errors in .js files at compile time.
// Gradually migrate to TypeScript without rewriting the entire codebase.
