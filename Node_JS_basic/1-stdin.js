console.log("Welcome to Holberton School, what is your name?");

process.stdin.setEncoding('utf-8');

process.stdin.on('data', (data) => {

  const name = data.trim();
  process.stdout.write(`Your name is: ${name}\r\n`);
  process.stdin.end();
});

process.stdin.on('end', () => {
  console.log("This important software is now closing");
});