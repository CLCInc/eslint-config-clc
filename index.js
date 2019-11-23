'use strict';

module.exports = {
  extends: ['prettier'],
  parserOptions: {
    ecmaVersion: 9
  },
  env: {
    es6: true,
    browser: true, // browser global variables.
    node: true, // Node.js global variables and Node.js-specific rules.
    commonjs: true, // defines require() and define() as global variables as per the amd spec.
    mocha: true, // adds all of the Mocha testing global variables.
    jquery: true // jquery global variables.
  }
};
