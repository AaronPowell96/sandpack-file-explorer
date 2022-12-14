#!/usr/bin/env npx

const fs = require('fs');
const path = require('path');

function removeConsoleLogs(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);

    if (fs.statSync(filePath).isDirectory()) {
      removeConsoleLogs(filePath);
    } else {
      if (path.extname(filePath) === '.tsx') {
        let fileContent = fs.readFileSync(filePath, 'utf-8');
        fileContent = fileContent.replace(
          /(\/\/ )*console\.log\((\s|.)*?\);/g,
          ''
        );
        fs.writeFileSync(filePath, fileContent);
      }
    }
  });
}

removeConsoleLogs(`${process.cwd()}/src`);
