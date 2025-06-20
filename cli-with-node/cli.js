import fs from 'node:fs'
import readline from 'node:readline';

let todoData;

fs.readFileSync('./data.json', 'utf8', (err, data) => {
    if (err) {

        console.log(err);
        return;
    }
    todoData = JSON.parse(data)
    console.log(todoData);
})

//TODOS:work on extracting data from the command line 
function addTask(data) {
    const matches = data.match(/(["'])(?:(?=(\\?))\2.)*?\1/gi);
    todoData.add.push(matches)
    //i have pushed the data.
}

//reads data from the command line 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question(`task-cli`, data => {
    if (data.includes('add')) {
        addTask(data)
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
    console.log("please use the right commands ");
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

