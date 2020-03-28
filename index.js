// const svelte = require("svelte/compiler");

// const result = svelte.compile(require("./test.svelte"), {
//   // options
//   generate: "ssr"
// });

require("svelte/register")({
  // extensions: ['.customextension'], // defaults to ['.html', '.svelte']
  // preserveComments: true
  hydratable: true,
  generate: "ssr",
  cssOutputFilename: "potato.css.map"
});

const App = require("./App.svelte").default;

const props = App.render({
  name: "swyx"
});
const { head, html, css } = props;
console.log({ props });

const fs = require("fs");
// const path = require('path')

fs.writeFileSync("build/head.json", head);
fs.writeFileSync("build/index.html", html);
``;
fs.writeFileSync("build/index.css", css.code);
if (css.code.map) fs.writeFileSync("build/index.css.map", css.code.map);
