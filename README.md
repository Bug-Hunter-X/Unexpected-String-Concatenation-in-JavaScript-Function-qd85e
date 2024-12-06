# Unexpected String Concatenation Bug in JavaScript

This repository demonstrates a common, yet subtle, bug in JavaScript involving unexpected string concatenation. The `myFunction` is intended to add two numbers, however, due to type coercion, it unexpectedly concatenates a number and a string when one of the inputs is a string.

## Bug Description
The `myFunction` function adds two inputs.  If one of the inputs is a string, JavaScript converts the number to a string and performs string concatenation instead of numerical addition.  This leads to an incorrect result.

## Solution
The solution involves explicit type checking or conversion of the input arguments to ensure they are numbers before performing the addition. 
