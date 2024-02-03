
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

try {
    const data = await readFilePromise(`${__dirname}/data.txt1`);
    console.log('data:', data);
} catch(error) {
    console.log('Error:', error);
}



