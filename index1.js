// index.js

const fs = require('fs');
const path = require('path');

// Debug: Log process.argv
console.log("process.argv:", process.argv);

const operation = process.argv[2];
const filePath = process.argv[3];
const content = process.argv.slice(4).join(' ');

// Debug: Log parsed arguments
console.log("operation:", operation);
console.log("filePath:", filePath);
console.log("content:", content);

switch (operation) {
    case 'read':
        readFile(filePath);
        break;
    case 'delete':
        deleteFile(filePath);
        break;
    case 'create':
        createFile(filePath);
        break;
    case 'append':
        appendToFile(filePath, content);
        break;
    case 'rename':
        renameFile(filePath, content);
        break;
    case 'list':
        listFiles(filePath);
        break;
    default:
        console.log(`Invalid operation '${operation}'`);
}

function readFile(file) {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading file: ${err}`);
            return;
        }
        console.log(`Contents of ${file}:\n${data}`);
    });
}

function deleteFile(file) {
    fs.unlink(file, (err) => {
        if (err) {
            console.error(`Error deleting file: ${err}`);
            return;
        }
        console.log(`File '${file}' deleted`);
    });
}

function createFile(file) {
    fs.writeFile(file, '', (err) => {
        if (err) {
            console.error(`Error creating file: ${err}`);
            return;
        }
        console.log(`File '${file}' created`);
    });
}

function appendToFile(file, content) {
    fs.appendFile(file, content + '\n', (err) => {
        if (err) {
            console.error(`Error appending to file: ${err}`);
            return;
        }
        console.log(`Content appended to the file '${file}'`);
    });
}

function renameFile(oldFile, newFile) {
    fs.rename(oldFile, newFile, (err) => {
        if (err) {
            console.error(`Error renaming file: ${err}`);
            return;
        }
        console.log(`File '${oldFile}' renamed to '${newFile}'`);
    });
}

function listFiles(dir) {
    fs.readdir(dir, (err, files) => {
        if (err) {
            console.error(`Error listing files: ${err}`);
            return;
        }
        console.log(`Files in directory '${dir}':`);
        files.forEach(file => {
            console.log(file);
        });
    });
}
