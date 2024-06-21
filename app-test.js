/**
 * vod.js
 * 
 * (C) Callv Group 2024
 */

'use strict'

require("dotenv").config();
const { Vod } = require("./vodjs/vod");

new Vod({
    port: process.env.PORT,
    generating: true
});