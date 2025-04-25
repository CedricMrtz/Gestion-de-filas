// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

//I dont know if this may be neccesary
//config.resolver.assetExts.push('cjs');

module.exports = config;
