export default function cleanSet(set, startString) {
  const stringArray = [];
  let resArray = [];

  for (const string of set.values()) {
    let stringExample = '';

    for (let i = 0; i < string.length; i += 1) {
      if (i >= startString.length && string.startsWith(startString) && startString.length !== 0) {
        stringExample += string[i];
      } else if (!set || !startString || typeof startString !== 'string' || !(set instanceof Set)) {
        return '';
      }
    }
    stringArray.push(stringExample);
  }
  resArray = stringArray.filter((string) => string.length > 0);
  return resArray.join('-');
}
