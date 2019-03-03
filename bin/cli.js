#! /usr/bin/env node

const startAChangelog = require("../start-a-changelog.js");
const [, , ...args] = process.argv;

startAChangelog.call(args);
