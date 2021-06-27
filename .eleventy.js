const pluginSass = require("eleventy-plugin-sass");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (config) {

    // Copy my public folder to the output.
    config.addPassthroughCopy({"src/public/": "./"});

    //Register the SASS plugin.
    config.addPlugin(pluginSass, {
        watch: ["**/theme.scss","**/layouts/*.scss"],
        outputDir: "dist/assets/css/",
        remap: true
    });

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