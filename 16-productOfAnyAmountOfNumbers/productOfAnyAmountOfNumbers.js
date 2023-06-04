function productOfAnyAmountOfNumbers(...args) {
  let total = 1;
  for (const arg of args) {
    total *= arg;
  }
  return total;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;