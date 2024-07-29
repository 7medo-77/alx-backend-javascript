export default function returnHowManyArguments(...parameters) {
  let total = 0;
  let i;

  for (i = 0; i < parameters.length; i += 1) {
    total += 1;
  }
  return total;
}
