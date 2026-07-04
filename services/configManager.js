const loadConfigurations = require("./configLoader");
let configurations = {};
function initializeConfigurations(){
    configurations = loadConfigurations();
}
function getConfig(route){
    return configurations[route];
}
function getAllConfigs(){
    return configurations;
}
module.exports ={
    initializeConfigurations,
    getConfig,
    getAllConfigs
};