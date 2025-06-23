// import fs from 'node:fs'
import { readFileSync } from 'node:fs';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

let data = readFileSync('./data.json', 'utf8', (err, data) => {
    if (err) {

        console.log(err);
        return;
    }

})

console.log(data)


function addTask(data) {
    const matches = data.match(/(["'])(?:(?=(\\?))\2.)*?\1/gi);
    console.log(matches);
    data.add.push(matches[0])
    console.log(todoData);
    //i have pushed the data.
}
let rl;
async function foo() {


    rl = readline.createInterface({ input, output });

    const answer = await rl.question('What do you think of Node.js? ');

    console.log(answer);


    console.log(`Thank you for your valuable feedback: ${answer}`);
    rl.close();




}



foo();

rl.on('close', () => {
    console.log("closed successfully");
});


