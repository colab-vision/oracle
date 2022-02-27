const fs = require("fs");
const nodePath = require("path");
const nodeSass = require("node-sass");

const getComponents = () => {
  let components = [];

  const types = ["atoms", "molecules", "organisms", "pages"];

  types.forEach((type) => {
    const files = fs.readdirSync(`src/components/${type}`).map((file) => ({
      input: `src/components/${type}/${file}`,
      output: `src/lib/${file.slice(0, -4) + "css"}`,
    }));

    components = [...components, ...files];
  });

  return components;
};

const compile = (path, filename) => {
  const result = nodeSass.renderSync({
    data: fs.readFileSync(nodePath.resolve(path)).toString(),
    outputStyle: "compressed",
    outFile: "main.css",
    includePaths: [nodePath.resolve("src")],
  });

  fs.writeFileSync(nodePath.resolve(filename), result.css.toString());
};

getComponents().map((component) => compile(component.input, component.output));

console.log(getComponents());
