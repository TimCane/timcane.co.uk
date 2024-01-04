const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const durationShortcode = require("./src/code/shortcodes/duration.shortcode");
const cvToPDF = require("./src/code/transforms/cv-to-pdf.transform");

module.exports = function (config) {
  // Copy my public folder to the output.
  config.addPassthroughCopy({
    "src/public/": "./",
    "src/site/blue-spider/_edit/config.yml": "./blue-spider/_edit/config.yml",
  });

  config.addShortcode("duration", durationShortcode);

  //Register the SASS plugin.
  config.setBrowserSyncConfig({
    files: "./dist/assets/css/*.css",
  });

  config.addTransform("cv-to-pdf", cvToPDF);

  //Register the syntax highlight plugin
  config.addPlugin(syntaxHighlight);

  return {
    dir: {
      input: "src/site",
      output: "dist",
      layouts: "_layouts/",
    },
  };
};
