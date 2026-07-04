const express = require("express");
const orchestratorController = require("../controllers/orchestratorController");
function createDynamicRoutes(configurations) {
    const router = express.Router();
    Object.values(configurations).forEach((config) => {
        const method = config.method.toLowerCase();
        router[method](config.route, orchestratorController);
        console.log(`Route Registered -> ${config.method} ${config.route}`);
    });
    return router;
}
module.exports = createDynamicRoutes;