export default function cleanSet(set, startString) {
  const stringArray = [];
  let resString = '';

  for (const string of set.values()) {
    let stringExample = '';

    for (let i = 0; i < string.length; i += 1) {
      if (i >= startString.length && string.startsWith(startString) && startString.length !== 0) {
        stringExample += string[i];
      }
    }
    stringArray.push(stringExample);
  }

  stringArray.forEach((word, index) => {
    if (word.length !== 0) {
      resString += `${index < stringArray.length - 2 ? `${word}-` : word}`;
    } else {
      stringArray.pop(word);
    }
  });

  // return new Set(stringArray);
  return resString;
}
