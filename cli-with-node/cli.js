import fs from 'node:fs'
import readline from 'node:readline';

fs.readFile('./data.txt', 'utf8', (err, data) => {
    if (err) {

        console.log(err);
        return;
    }
    let temp = JSON.parse(data)
    console.log(temp);
})

//TODOS:work on extracting data from the command line 


//reads data from the command line 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question(`What's your name?`, name => {
    if (name.includes('add') || name.includes('update') || name('delete'))

        console.log("handled first logic");
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

