export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];

  for (let idx of array) {
    const value = idx;
    idx = appendString + value;
    newArray.push(idx);
  }
  return newArray;
}
