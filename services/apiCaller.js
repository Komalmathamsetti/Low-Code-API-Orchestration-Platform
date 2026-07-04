const axios = require("axios");
const logger = require("../utils/logger");
const retry = require("../services/retry");
async function callVendorAPI(vendorConfig, requestData) {
    logger.info(`Calling Vendor API [${vendorConfig.method}] ${vendorConfig.url}`);
    try {
        const response = await retry(() =>axios({
        method: vendorConfig.method,
        url: vendorConfig.url,
        headers: vendorConfig.headers || {},
        data: requestData
        })
        );
        logger.info(`Vendor API Success - Status ${response.status}`);
        return {
            success: true,
            status: response.status,
            data: response.data
        };
    }
    catch (error) {
        logger.error(
            `Vendor API Failed : ${error.message}`
        );
        return {
            success: false,
            status: error.response?.status || 500,
            message: error.message
        };
    }
}
module.exports = {
    callVendorAPI
};