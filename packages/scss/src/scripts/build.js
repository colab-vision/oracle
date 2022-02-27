const fs = require("fs");
const path = require("path");
const sass = require("node-sass");

const result = sass.renderSync({
  data: fs.readFileSync(path.resolve("src/main.scss")).toString(),
  outputStyle: "compressed",
  outFile: "main.css",
  includePaths: [path.resolve("src")],
});

fs.writeFileSync(path.resolve("src/lib/main.css"), result.css.toString());
