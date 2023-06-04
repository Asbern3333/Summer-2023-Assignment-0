function setUnionOfAnyAmountOfSets(...args) {
  return args.reduce((union, current) =>
  {
      union = new Set([...union, ...current]);
      return union;
  });
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;