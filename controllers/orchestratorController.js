const { getConfig } = require("../services/configManager");
const { validateRequest } = require("../services/validator");
const { mapRequest } = require("../services/mapper");
const { callVendorAPI } = require("../services/apiCaller");
const { mapResponse } = require("../services/responseMapper");
const { success, failure } = require("../utils/responseFormatter");
const { executeWorkflow } = require("../services/workflowEngine");

async function orchestratorController(req, res) {

    const config = getConfig(req.path);

    if (!config) {
        return res.status(404).json(
            failure("Configuration not found")
        );
    }

    const { error } = validateRequest(
        config.validation,
        req.body
    );

    if (error) {
        return res.status(400).json(
            failure(error.details[0].message)
        );
    }

    const mappedRequest = mapRequest(
        config.requestMapping,
        req.body
    );

    let responseData;

    if (config.workflow && config.workflow.length > 0) {

        responseData = await executeWorkflow(
            config.workflow,
            mappedRequest
        );

    } else {

        const vendorResponse = await callVendorAPI(
            config.vendor,
            mappedRequest
        );

        if (!vendorResponse.success) {

            return res.status(vendorResponse.status).json(
                failure(vendorResponse.message)
            );

        }

        responseData = mapResponse(
            config.responseMapping,
            vendorResponse.data
        );

    }

    return res.status(200).json(
        success(
            "API Executed Successfully",
            responseData
        )
    );

}

module.exports = orchestratorController;