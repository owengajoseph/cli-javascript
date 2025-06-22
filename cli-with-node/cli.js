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

//reads data from the command line
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question(`task-cli`, data => {
    if (data.includes('add')) {
        addTask(data);
    }

    if (data.includes('update')) {

    }

    if (data.includes('update')) {

    }


    if (data.includes('delete')) {

    }


    if (data.includes(data.includes('mark-in-progress'))) {

    }


    if (data.includes('mark-done')) {

    }



    if (data.includes('list')) {

    }


    if (data.includes('list todo')) {


    }


    if (data.includes('list in-progress')) {
        //TODOS:when he wants the list of the data we write then we list
        //or if there is and asynchronous function we can use that.
    }
    // console.log("please use the right commands ");
    rl.close();


});

//how im i going to handle the writing of the data.
//

// {
//     let jsonData = JSON.stringify(books);
//     try {
//         writeFileSync('./data.json', jsonData, 'utf-8')
//     } catch (err) {
//         console.log(err)
//     }
// }

