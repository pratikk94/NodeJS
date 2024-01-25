/**
 * 
 *   This is an example of synchronous programming.
 * 
 */

const fs = require('fs');
// const inputText = fs.readFileSync('./txt/input.txt','utf-8');
// const outputText = `This is what we know about avocado : ${inputText}.\nCreated on ${Date.now()}`
// fs.writeFileSync('./txt/output.txt',outputText);
// console.log("File written");


/**
 * 
 *  Example of asychronous programming
 * 
 */

fs.readFile('./txt/start.txt','utf-8',(err,data1)=>{
    fs.readFile(`./txt/${data1}.txt`,'utf-8',(err,data2)=>{
        console.log(data2);
        fs.readFile(`./txt/append.txt`,'utf-8',(err,data3)=>{
            console.log(data3);
            fs.writeFile('./txt/final.txt',`${data2}\n${data3}`,'utf-8',err=>{
                console.log("File has been written");
            });
        });
    });
    
});

console.log("Reading the file");