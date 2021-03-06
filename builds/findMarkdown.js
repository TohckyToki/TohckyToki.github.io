
module.exports = function findMarkdown(dir, callback) {
  const fs = require('fs');
  fs.readdir(dir, function (err, files) {
    if (err) throw err;

    files.forEach((fileName) => {
      let innerDir = `${dir}/${fileName}`;

      if (fileName.indexOf('.') !== 0) {
        fs.stat(innerDir, function (err, stat) {

          if (stat.isDirectory()) {
            findMarkdown(innerDir, callback);
          } else {
            // 跳过readme 文件，当然你也可以自行修改
            if (/\.md$/.test(fileName) && !/index/.test(fileName))
              callback(innerDir);
          }
        });
      }

    });
  });
}
