import path from "path";
import a from "../util/download.js";
describe("PathAbout", () => {
  it("teat01", () => {
    let p = path.resolve("foo");
    console.log(p);
    const t = path.resolve("foo", "bar");
    console.log(t);
    const v = path.resolve("F:/foo", "bar");
    console.log(v);
  });
  it("teat02", () => {
    const a = "F:/foo/bar";
    const b = path.resolve(a, "./lx");
    console.log(b);
  });
  it("teat03", () => {
    const t = path.join("foo/", "./bar");
    console.log(t);
  });
  it("teat04", () => {
    console.log(__dirname);
    console.log(__filename);
  });
});

import fs, { fstatSync, readdirSync } from "fs"; //文件读写相关
import fsp from "fs/promises";
import download from "../util/download.js";
describe("FsAbout", () => {
  it("teat05", (done) => {
    // fs.readFile(__dirname+"/abc.txt");
    fs.readFile(path.resolve(__dirname + "/abc.txt"), (err, data) => {
      console.log(data);
      done();
    });
  });
  it("teat06", (done) => {
    fs.readFile(path.resolve("D:/love.txt"), "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }

      done();
    });
  });
  it("teat07", (done) => {
    fs.writeFile(
      path.resolve(__dirname, "abc.txt"),
      "林欣",
      "utf-8",
      (err, data) => {
        done();
      }
    );
  });
  it("teat08", (done) => {
    fs.writeFile(
      path.resolve(path.resolve("D:/love.txt")),
      "大美女",
      "utf-8",
      (err, data) => {
        done();
      }
    );
  });
  //read r write w append a
  it("teat09", async () => {
    const data = await fsp.readFile(path.resolve(__dirname, "abc.txt"), {
      flag: "r",
      encoding: "utf-8",
    });
  });
  it("teat10", async () => {
    let b = "aaa";
    await fsp.writeFile(path.resolve(__dirname, "def.txt"), b, {
      flag: "w",
      encoding: "utf-8",
    });
  });
  it("teat11", () => {
    const data = fs.readFileSync(path.resolve(__dirname, "abc.txt"), {
      flag: "r",
      encoding: "utf-8",
    });
    console.log(data);
  });
  it("teat12", () => {
    let b = "bbb";
    fs.writeFileSync(path.resolve(__dirname, "def.txt"), b, {
      flag: "a",
      encoding: "utf-8",
    });
  });
  it("teat13", () => {
    let name = ["abc.txt", "def.txt"];
    for (let i = 0; i < name.length; i++) {
      fs.readFile(path.resolve(__dirname, name[i]), "utf-8", (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
        }
      });
    }
    setTimeout(() => {
      done();
    }, 4000);
  });
  it("teat14", () => {
    let name = ["abc.txt", "def.txt"];
    for (let i = 0; i < name.length; i++) {
      const data = fs.readFileSync(path.resolve(__dirname, name[i]), "utf-8", {
        flag: "r",
        encoding: "utf-8",
      });
      console.log(data);
    }
    setTimeout(() => {
      done();
    }, 4000);
  });
  //一个文件可以分为两部分 元信息meta + 数据信息
  it("teat15", () => {
    // let target = path.resolve(__dirname, "abc.txt");
    let target = path.resolve("D:/love.txt");
    let r = fs.statSync(target);
    console.log(r);
    console.log(r.isDirectory());
    console.log(r.isFile());
  });
  it("teat16", () => {
    const files = fs.readdirSync("D:/Echarts");
    console.log(files);
  });
  it("teat17", () => {
    const target = path.resolve("E:/Dev_c++");
    const files = fs.readdirSync(target);
    console.log(files);
    const ff = files
      .filter((f) => {
        const t = path.resolve(target, f);
        return fs.statSync(t).isFile();
      })
      .map((f) => {
        const t = path.resolve(target, f);
        const size = fs.statSync(t).size;
        return {
          filename: t,
          size: size,
        };
      });
    console.log(ff);
  });
});

// describe('DownloadAbout',()=>{
//   it("teat01",()=>{
//       const results = a.listFiles("E:/Dev_c++")
//       console.log(results);
//   })

// })
