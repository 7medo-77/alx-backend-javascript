export default function setFromArray(inputArray) {
  const newSet = new Set();

  for (const number of inputArray) {
    newSet.add(number);
  }

  return newSet;
}
