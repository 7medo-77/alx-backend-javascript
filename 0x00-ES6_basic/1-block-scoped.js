export default function taskBlock(trueOrFalse) {
  if (trueOrFalse) {
    task = true;
    task2 = false;
  }

  let task;
  let task2;

  return [task, task2];
}
