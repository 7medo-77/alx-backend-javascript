export default function hasValuesFromArray(set, inputArray) {
  for (const num of inputArray) {
    if (!set.has(num)) {
      return false;
    }
  }
  return true;
}
