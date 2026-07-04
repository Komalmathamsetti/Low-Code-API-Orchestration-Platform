const express = require('express');
const dotenv = require('dotenv');
const { initializeConfigurations, getConfig, getAllConfigs } = require("./services/configManager");
const createDynamicRoutes = require("./routes/dynamicRoutes");
dotenv.config();
const app = express();
app.use(express.json());
try {
    initializeConfigurations();
    const configs = getAllConfigs();
    const dynamicRoutes = createDynamicRoutes(configs);
    app.use(dynamicRoutes);
    console.log("\n====================================");
    console.log("Configuration Engine Started");
    console.log("====================================");
    Object.values(configs).forEach(config => {
        console.log(`✓ ${config.method} ${config.route}`);
    });
    console.log("------------------------------------");
    console.log(`Total APIs : ${Object.keys(configs).length}`);
    console.log("====================================\n");
} catch (err) {
    console.error(err.message);
    process.exit(1);
}
app.get("/",(req,res)=>{
    res.status(200).json({success:true,message:"Low-Code API Orchestration Platform is running 🚀"});
});
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});