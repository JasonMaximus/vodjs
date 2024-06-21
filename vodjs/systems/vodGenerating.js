/**
 * vod.js
 * 
 * (C) Callv Group 2024
 */

'use strict'

const fs            = require("fs");
const path          = require("path");
const { exec }      = require("child_process");

class vodGenerating {

    constructor(param) {
        this.docRoot = require.main.path;
        
        if(typeof param.generating !== "undefined" && param.generating === true){
            this.startGenerate();
        }
    }

    startGenerate() {
        this.generateDotFile();
    }

    generateDotFile() {
    }
    
}

module.exports = vodGenerating;