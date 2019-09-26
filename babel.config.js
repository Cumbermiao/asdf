module.exports = {
  presets: [
      [
          "@babel/preset-env",
          {
            useBuiltIns: "usage",
            modules: false,
            corejs:2
          }
      ],
      "@babel/preset-react",
  ],
  plugins: []
}