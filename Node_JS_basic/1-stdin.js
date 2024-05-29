console.log('Welcome to Holberton School, what is your name?\r');

process.stdin.setEncoding('utf-8');

process.stdin.on('data', (data) => {
  const name = data.trim();
  console.log(`Your name is: ${name}\r`);
  process.stdin.end();
});

process.stdin.on('end', () => {
  console.log('This important software is now closing\r');
});
