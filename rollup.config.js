import babel from 'rollup-plugin-babel';

export default {
  input: 'index.js',
  output: [
    {format: "cjs", file: "dist/index.js"},
    {format: "es", file: "dist/index.es.js"}
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      presets: ["react", "es2015-rollup"]
    })
  ],
  external: ["react"]
};