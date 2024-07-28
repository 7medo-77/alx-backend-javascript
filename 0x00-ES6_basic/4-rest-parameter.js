export default function returnHowManyArguments(...parameters) {
  let total = 0;

  for (const param of parameters) {
    total += 1;
  }
  return total;
}
