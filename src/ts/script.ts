import fs from "fs";

console.log('none')

fs.writeFile('example.txt', 'Hello, world!', (err: never) => {
    if (err) throw err;
    console.log('File has been written!');
});
