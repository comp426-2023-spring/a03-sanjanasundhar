#!/usr/bin/env node
//Import all packages
import { rps } from '../lib/rpsls.js';
import minimist from "minimist";
const argv = minimist(process.argv.slice(2));
if (argv.h || argv.help){
    //Help documentation
    console.log('Usage: node-rps [SHOT]' +
    'Play Rock Paper Scissors (RPS)' +
    '' +
    '  -h, --help      display this help message and exit' +
    '  -r, --rules     display the rules and exit ' +
    '' +
    'Examples:'+
    '  node-rps        Return JSON with single player RPS result.'+
    '                  e.g. {"player":"rock"}' + 
     ' node-rps rock   Return JSON with results for RPS played against a simulated opponent.'+
     '                 e.g {"player":"rock","opponent":"scissors","result":"win"}');
     process.exit(0);
}
if (argv.r || argv.rules) {
    //Rules documentation
    console.log('Rules for Rock Paper Scissors:' + 
    '' +
    '- Scissors CUTS Paper' +
    '- Paper COVERS Rock' +
    '- Rock CRUSHES Scissors');
    process.exit(0);
}
//Try-catch block for error handling
try{
    let result = rps(argv._[0]);
    console.log(JSON.stringify(result));
    process.exit(0);
}
catch(error){
    if (error instanceof RangeError){
        console.log('Usage: node-rps [SHOT]' +
        'Play Rock Paper Scissors (RPS)' +
        '' +
        '  -h, --help      display this help message and exit' +
        '  -r, --rules     display the rules and exit ' +
        '' +
        'Examples:'+
        '  node-rps        Return JSON with single player RPS result.'+
        '                  e.g. {"player":"rock"}' + 
        ' node-rps rock   Return JSON with results for RPS played against a simulated opponent.'+
        '                 e.g {"player":"rock","opponent":"scissors","result":"win"}');
        console.log('Rules for Rock Paper Scissors:' + 
        '' +
        '- Scissors CUTS Paper' +
        '- Paper COVERS Rock' +
        '- Rock CRUSHES Scissors');
        process.exit(1);
    }
}