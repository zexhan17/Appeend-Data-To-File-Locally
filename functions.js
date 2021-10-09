const fs = require('fs');
    const path = require('path');
    
    const createFolder = (folderName = 'data') => {
        
        if (! fs.existsSync(folderName)){
            fs.mkdir(path.join(__dirname, folderName), {}, err => {
                if (err) throw err;
            });
    
        }
    }
    
    const createFile = (content = '') => {
        fs.writeFile(path.join(__dirname, "/data", "data.txt"), content, err => {
            if (err) throw err;
    });
    }
    
    const appendFile = content => {
        // File append
        fs.appendFile(
          path.join(__dirname, "/data", "data.txt"),
          content,
          err => {
            if (err) throw err;
          }
        );
    }
    function objToString (obj) {
  let str = '{ ';
  Object.entries(obj).forEach( ([key, value]) => {
    str += `${key}: ${value}`
  });
  return str += ' }';
}






exports.appendFile = appendFile;
exports.createFile = createFile;
exports.createFolder = createFolder;
exports.objToString = objToString