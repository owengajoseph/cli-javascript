import fs from 'node:fs'
import readline from 'node:readline';

fs.readFileSync('./data.json', 'utf8', (err, data) => {
    if (err) {

        console.log(err);
        return;
    }
    let temp = JSON.parse(data)
    console.log(temp);
})

//TODOS:work on extracting data from the command line 
function addTask(name) {
    const matches = name.match(/(["'])(?:(?=(\\?))\2.)*?\1/g);
    console.log(matches)

}

//reads data from the command line 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question(`task-cli`, name => {
    if (name.includes('add')) {
        addTask(name)
    }

    if (name.includes('update')) {

    }

    if (name.includes('update')) {

    }


    if (name.includes('delete')) {

    }


    if (name.includes(name.includes('mark-in-progress'))) {

    }


    if (name.includes('mark-done')) {

    }



    if (name.includes('list')) {

    }


    if (name.includes('list todo')) {


    }


    if (name.includes('list in-progress')) {

    }
    console.log("please use the right commands ");
    rl.close();
});



// {
//     let jsonData = JSON.stringify(books);
//     try {
//         writeFileSync('./data.json', jsonData, 'utf-8')
//     } catch (err) {
//         console.log(err)
//     }
// }

