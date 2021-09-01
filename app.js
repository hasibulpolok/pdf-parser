const fs = require('fs');
const PdfParse = require('pdf-parse');
const pdffile = fs.readFileSync('6th2016.pdf');


// get the info 
PdfParse(pdffile).then (function (data){
    console.log(data.numpages);
    console.log(data.info);
    
})