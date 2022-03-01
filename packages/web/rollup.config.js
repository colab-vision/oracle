import ts from "rollup-plugin-typescript2";

export default {
  input: ["src/index.ts", "src/components/atoms/Button/index.tsx"],
  output: { dir: "lib", format: "esm", sourcemap: true },
  plugins: [ts()],
  preserveModules: true,
  external: ["react"],
};
