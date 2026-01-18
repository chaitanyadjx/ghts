import { Command } from "commander";

const loadCommands = (program: Command) => {
    program
        .command("test")
        .description("Run tests")
        .action(() => {
            console.log("Running tests...");
        });
};

export default loadCommands;
