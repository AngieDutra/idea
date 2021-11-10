const path = require('path');
const fs = require('fs');

const model = {
    all: ()=>{
        const directory = path.resolve(__dirname, '../data', 'quotes.json');
        const file = fs.readFileSync(directory, 'utf8');
        const convert = JSON.parse(file);
        return convert;
    }
};

module.exports = model;