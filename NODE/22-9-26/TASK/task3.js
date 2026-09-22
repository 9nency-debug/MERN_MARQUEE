// create a function that deletes folder and its file(index.js)
// (index.js) and pass path :: `Cources/Folder` as a argument
// const fs = require('fs');
// function deleteFolder(path) {
//     fs.rmSync(path, { recursive: true, force: true });
// }
// deleteFolder('Courses/Java');

function deleteFolderByName(folder) {
    fs.rm(folder, {recursive: true}, (err) => {
        if(err) {
            console.log(`Error: $(err)`);
        }
    });
}

folderNames.forEach((folder) => {
    deleteFolderByName(`Courses/${folder}`);
});


