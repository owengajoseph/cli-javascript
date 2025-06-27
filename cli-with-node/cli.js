import { createInterface } from 'node:readline';
import { exit, stdin, stdout } from 'node:process';
import { readFileSync } from 'node:fs';

// TODOS:the app works well the remaining part is to write the data in a file and get the other commands and hanle illigal commands.
let data = JSON.parse(readFileSync('./data.json', 'utf8', (err, data) => {
  if (err) {

    console.log(err);
    return;
  }

}))

console.log(data)


function addTask(data) {
  const matches = data.match(/(["'])(?:(?=(\\?))\2.)*?\1/gi);
  console.log(matches);
   data.add.push(matches[0]);
   console.log(todoData);
  return;
  //i have pushed the data.
}






const rl = createInterface({
  input: stdin,
  output: stdout,
  prompt: 'task-cli ',
});

rl.prompt();

rl.on('line', (line) => {
  console.log(line)
  if (line.includes('adds')) {

    addTask(line);
  }

  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  exit(0);
});
