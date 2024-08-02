export default function createInt8TypedArrayMine(length, position, value) {
  const bufferNew = new ArrayBuffer(length);
  const viewConstruct = new DataView(bufferNew);
  // const int8View = new Int8Array(bufferNew);

  if (position >= 0 && position <= length - 1) {
    viewConstruct.setInt8(position, value);
  } else {
    throw new Error('Position outside range');
  }

  // if (int8View[position] !== undefined) {
  //   int8View[position] = value;
  // } else {
  //   throw new Error('Position outside range');
  // }

  return viewConstruct;
  // return int8View;
}
