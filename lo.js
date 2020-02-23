'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('fetch_imdb_url11.json');
let student = JSON.parse(rawdata);
console.log(student);