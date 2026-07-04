const fs = require("fs");
const path = require("path");
const configSchema = require("./configSchema");
function loadConfigurations() {
    const configFolder = path.join(__dirname, "../configs");
    if (!fs.existsSync(configFolder)) {
        throw new Error("Configs folder not found.");
    }
    const files = fs.readdirSync(configFolder);
    const configurations = {};
    files.forEach((file) => {
        if (!file.endsWith(".json")) return;
        const filePath = path.join(configFolder, file);
        let config;
        try {
            config = JSON.parse(
                fs.readFileSync(filePath, "utf8")
            );
        } catch (err) {
            throw new Error(
                `Invalid JSON inside ${file}`
            );
        }
        const { error } = configSchema.validate(config);
        if (error) {
            throw new Error(
                `Configuration Error in ${file}\n${error.message}`
            );
        }
        if (configurations[config.route]) {
            throw new Error(
                `Duplicate route detected: ${config.route}`
            );
        }
        configurations[config.route] = config;
    });
    return configurations;
}
module.exports = loadConfigurations;