
import { readFile } from 'fs'; // importing named function readFile
import { getDirName } from './util.js'; // importing named function getDirName

const __dirname = getDirName();

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
    throw new Error('my error');
    return 'Success';
  })
  .then((customData) => {
    console.log('customData:', customData);
  })
  .catch((error) => {
    console.error('Error reading the file:', error);
  });



