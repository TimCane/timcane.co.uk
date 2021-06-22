const pluginSass = require("eleventy-plugin-sass");

module.exports = function (config) {

    // Copy my public folder to the output.
    config.addPassthroughCopy({"src/public/": "./"});

    //Register the SASS plugin.
    config.addPlugin(pluginSass, {
        watch: ["**/theme.scss"],
        outputDir: "dist/assets/css/",
        remap: true
    });

    return {
        dir: {
            input: "src/site",
            output: "dist",
            layouts: "_layouts/"
        }
    };
};