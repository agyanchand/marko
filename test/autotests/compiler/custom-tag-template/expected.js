var marko_template = module.exports = require("marko/html").t(__filename),
    marko_loadTemplate = require("marko/runtime/helper-loadTemplate"),
    hello_template = marko_loadTemplate(require.resolve("./hello.marko")),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    hello_tag = marko_loadTag(hello_template);

function render(input, out) {
  var data = input;

  hello_tag({
      name: "Frank"
    }, out);
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "./hello.marko"
    ]
  };
