const pdf = require('html-pdf');
module.exports = function (content, outputPath) {
    if (outputPath.indexOf("curriculum-vitae") > -1) {

        let options = {
            format: "a4",
            border: {
                top: "0.25in",            // default is 0, units: mm, cm, in, px
                right: "0.75in",
                bottom: "0.25in",
                left: "0.75in"
              }
        }

        pdf.create(content, options).toFile('./dist/curriculum-vitae.pdf', function (err, res) {
            if (err) return console.log(err);
            console.log(res); // { filename: '/app/businesscard.pdf' }
        });
    }

    return content;
}