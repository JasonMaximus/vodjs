/**
 * vod.js
 * 
 * (C) Callv Group 2024
 */

'use strict'

const vodGenerating = require("./systems/vodGenerating");
const vodExpress    = require("./vodExpress");

class Vod {

    constructor(param = {}) {
        if(Object.keys(param).length === 0){
            console.error(`[Vod] Error : Parameters is required 'new Vod({ parameters })'`);
        } else {
            new vodGenerating(param);
        }
    }

    run() {}

}

module.exports = { Vod };