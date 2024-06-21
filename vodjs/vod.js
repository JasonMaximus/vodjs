/**
 * vod.js
 * 
 * (C) Callv Group 2024
 */

'use strict'

const vodGenerating = require("./systems/vodGenerating");
const vodServer     = require("./vodServer");

class Vod {

    constructor(param = {}) {
        if (Object.keys(param).length === 0) {
            console.error(`[Vod] Error: parameters are required. Use 'new Vod({ generating: ?, PORT: ?, expressConfig: ? })'`);
        } else {
            if(typeof param.generating !== "undefined" && param.generating) {
                console.log(`[Vod] Initializing: starting the generation process with provided parameters...`);
                new vodGenerating(param);
            } else {
                console.log(`[Vod] Server : running 'Vod' application...`);
                this.run(param);
            }
        }
    }

    run(param) {
        new vodServer(param);
    }

}

module.exports = { Vod };
