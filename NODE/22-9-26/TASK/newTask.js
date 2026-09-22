/*
TASK - 002

create a folder named `Courses`
`Courses` >> Java (f) >> index.js
`Courses` >> mern stack (f) >> index.js
`Courses` >> AI Agents (f) >> index.js
`Courses` >> Python (f) >> index.js
`Courses` >> DSA(Alpha) (f) >> index.js
*/


// const fs = require('fs');
// fs.mkdirSync('Courses', { recursive: true });
// const courses = [
//     'Java','mern stack','AI Agents','Python','DSA(Alpha)'
// ];
// for (let course of courses) {
//     fs.mkdirSync(`Courses/${course}`, { recursive: true });
//     fs.writeFileSync(`Courses/${course}/index.js`, '');
// }

/*
sir
*/

const fs = require('fs');
const folderNames = ['Java', 'MERN Stack', 'AI Agents', 'Python', 'DSA(alpha)'];
function createFolderFiles(folderNames) {
    try{
        folderNames.forEach((folder) => {
            const folderPath = 'Cources/${folder}';
            fs.mkdir(folderPath, {recursive: true}, (err) => {
                if(err) {
                    console.log(`Error : $(arr)`);

                }
                fs.writeFile(
                    `Courses/$(folder)/index.js`,
                    `Welcome to $(folder)-index.js`,
                    (err) => {
                        if(err) {
                            console.log(`Error : $(err)`);
                        }
                    }
                );
            });
        });
    } catch (error) {
        console.log(`Error : ${error}`);
    }
}