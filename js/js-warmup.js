// Write a function, sumIsEqual,
// that takes in three inputs.
// The function should return true if the sum of the first two inputs are equal to the third input.
// If any of the inputs are not numbers, return false.

function sumIsEqual(input1, input2, input3) {
    if (typeof input1 !== 'number' || typeof input2 !== 'number' || typeof input3 !== 'number') {
        return false;
    }
    return input1 + input2 === input3;
}
console.log(sumIsEqual(1, 2, 3), true);
console.log(sumIsEqual(2, 2, 4), true); // returns true
console.log(sumIsEqual(10, 2, 12), true); // returns true
console.log(sumIsEqual(10, false, 12), false); // returns false
console.log(sumIsEqual('10', '2', 12), false); // returns false
console.log(sumIsEqual('fred', 'bob', 'hello'), false); // returns false