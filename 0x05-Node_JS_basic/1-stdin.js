// process.stdin.setEncoding('utf-8');

console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('readable', (input) => {
  const userInput = input.trim();
  console.log(`Your name is: ${userInput}`);
});
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
