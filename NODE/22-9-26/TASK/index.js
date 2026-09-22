const { mkdir, writeFile } = require('fs');
mkdir('Cources', (err) => {
    if(err) {
        console.log(`Error: ${err}`);
        return;
    }
    writeFile('Courses/Java', '', (err) => {});
    writeFile('Courses/MERN STACK', '', (err) => {});
    writeFile('Cources/AI Agents', '', (err) => {});
    writeFile('Cources/Python','', (err) => {});
    writeFile('Cources/DSA(Alpha)', '', (err) => {});
    console.log('All the operations have been done!');
});
/*
const { mkdir } = require('fs');
mkdir('Courses', (err) => {
    if (err) {
        console.log(`Error: ${err}`);
        return;
    }

    writeFile('Courses/Java', '', (err) => {});
    writeFile('Courses/mern stack', '', (err) => {});
    writeFile('Courses/AI Agents', '', (err) => {});
    writeFile('Courses/Python', '', (err) => {});
    writeFile('Courses/DSA(Alpha)', '', (err) => {});

    console.log('Courses created');
});
*/