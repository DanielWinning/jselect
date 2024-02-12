/*
This whole script is basically hardcoded to convert a single SVG to base64 in the bundle js, because I couldn't get
url/file-loader to work properly. I may update this to be more dynamic if/when more SVGs are required.
 */
const path = require('path');
const fs = require('fs');
const dropdownArrowSVG = path.resolve(__dirname, './../assets/images/DropdownArrow.svg');
const jselectOutput = path.resolve(__dirname, './../dist/jselect.js');

async function getBase64Image() {
    return new Promise((resolve, reject) => {
        fs.readFile(dropdownArrowSVG, {encoding: 'utf-8'}, (err, data) => {
            if (err) reject(err.message);

            resolve(Buffer.from(data, 'utf-8').toString('base64'));
        });
    });
}

async function getBuiltJSelectAndConvert(base64) {
    return new Promise((resolve, reject) => {
        fs.readFile(jselectOutput, {encoding: 'utf8'}, (err, data) => {
            if (err) reject(err.message);

            let newData = data.replace('DropdownArrow.svg', `data:image/svg+xml;base64,${base64}`);

            fs.writeFile(jselectOutput, newData, 'utf-8', () => {
                if (err) reject(err.message);

                resolve('Updated SVG references.');
            });
        });
    });
}

getBase64Image().then(data => {
    getBuiltJSelectAndConvert(data).then(data => {
        console.log(data);
    });
})

