#! /usr/bin/env node

const yargs = require("yargs");
const fs = require("fs");
var async = require("async");

const usage =
  "\n" +
  "Usage:" +
  "\n" +
  "> AUiLibrary ./pathTo/configFile.json" +
  "\n" +
  "or" +
  "\n" +
  "> aUi ./pathTo/configFile.json" +
  "\n" +
  "\n" +
  "Read the documentation for further information." +
  "\n" +
  "(https://aui.ehan.dev/docs/)";
const options = yargs.usage(usage).help(true).argv;

if (yargs.argv._[0] == null) {
  console.error(
    "\n" +
      "No config file specified," +
      "\n" +
      "\n" +
      "Use" +
      "\n" +
      "> AUiLibrary --help" +
      "\n" +
      "or" +
      "\n" +
      "> AUi --help" +
      "\n" +
      "for help." +
      "\n"
  );
}
