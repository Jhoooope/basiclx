import fs from "fs";
import path from "path";
function listFiles(dirname) {
  // const target = "/home/xieweig";
  // if(fs.statSync(target).isDirectory()))
  const files = fs.readdirSync(dirname);

  const rr = files
    .filter((f) => {
      const t = path.resolve(dirname, f);
      return fs.statSync(t).isFile();
    })
    .map((f) => {
      const t = path.resolve(dirname, f);
      const size = fs.statSync(t).size;
      return {
        filename: f,
        size: size,
      };
    });
  return rr;
  // console.log(rr);
}

export default {
  listFiles,
};
