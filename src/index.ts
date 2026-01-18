#!/usr/bin/env node

import { Command } from "commander";
import loadCommands from "./commands/test";
import figlet from "figlet";
const program = new Command();

console.log(figlet.textSync("ghts", { horizontalLayout: "full" }));

program
    .name("ghts")
    .description("Git and Github tool for simple commands")
    .version("1.0.0");

loadCommands(program);
program.parse(process.argv);
