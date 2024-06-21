/**
 * vod.js
 * 
 * (C) Callv Group 2024
 */

'use strict'

const express = require("express");

class vodServer {

    constructor(param) {
        if(typeof param.PORT !== "undefined"){
            this.run(param.PORT);
        } else {
            console.error(`[Vod] Error : 'PORT' not deteced 'new Vod({ ..., PORT: ? })'`);
        }
    }

    run(port) {
        const app = express();
        app.listen(port, () => {
            console.log(`[Vod] Server : Vod application is now running on port ${port}`);
        });
    }

}

module.exports = vodServer;