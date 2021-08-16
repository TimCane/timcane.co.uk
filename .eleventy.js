const pluginSass = require("eleventy-plugin-sass");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const durationShortcode = require("./src/code/shortcodes/duration.shortcode");
const cvToPDF = require("./src/code/transforms/cv-to-pdf.transform");

module.exports = function (config) {

    // Copy my public folder to the output.
    config.addPassthroughCopy({ "src/public/": "./" });

    config.addShortcode("duration", durationShortcode);

    //Register the SASS plugin.
    config.addPlugin(pluginSass, {
        watch: ["**/theme.scss", "**/layouts/*.scss"],
        outputDir: "dist/assets/css/",
        remap: true
    });

    config.addTransform('cv-to-pdf', cvToPDF);

    //Register the syntax highlight plugin
    config.addPlugin(syntaxHighlight);

    return {
        dir: {
            input: "src/site",
            output: "dist",
            layouts: "_layouts/"
        }
    };
};