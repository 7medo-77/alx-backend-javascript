export default function hasValuesFromArray(set, inputArray) {
  return inputArray.every((num) => set.has(num));
}
