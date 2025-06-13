import { writeFileSync, readFile } from 'node:fs'

const books =
{
    title: "Alli goes to school",
    genre: "Fiction",
    type: "Children",
    pages: 56
};
readFile('./data.json', 'utf8', (err, data) => {
    if (err) {
        console.log(err)
    }
    let temp = JSON.parse(data);
    console.log(temp)
})

//TODOS:work on extracting data from the command line 

/* 
{
    let jsonData = JSON.stringify(books);
    try {
        writeFileSync('./data.json', jsonData, 'utf-8')
    } catch (err) {
        console.log(err)
    }
}

 */