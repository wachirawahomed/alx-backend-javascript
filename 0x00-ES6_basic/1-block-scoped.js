export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true; // block-scoped variable
    const task2 = false; // block-scoped variable
  }

  return [task, task2];
}
