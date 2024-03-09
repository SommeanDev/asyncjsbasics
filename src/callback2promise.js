
import { readFile } from 'fs'; // importing named function readFile
import { getDirName } from './util.js'; // importing named function getDirName

const __dirname = getDirName();
console.log(__dirname);

const readFilePromise = (filename) => {
  return new Promise((resolve, reject) => {
    readFile(filename, 'utf8', (err, data) => {
      if (err) {
          reject(err);
          return;
      }      
      resolve(data);
    });
  });
};

readFilePromise(`${__dirname}/data.txt`)
  .then((data) => {
    console.log('File content:\n');
    console.log(data);
  })
  .catch((error) => {
    
    console.error('Error reading the file:', error);
  });

readFilePromise(`${__dirname}/data.txt23`)
  .then((data) => {
    console.log('File content:\n');
    console.log(data);
  })
  .catch((error) => {
    console.error('Error reading the file:', error);
  });

