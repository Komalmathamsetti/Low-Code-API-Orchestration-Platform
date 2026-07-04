const { callVendorAPI } = require("./apiCaller");
async function executeWorkflow(workflow, requestData) {
    const results = [];
    let previous = { success: true };
    for (const step of workflow) {
        if (!step.enabled) {
            results.push({
                step: step.name,
                skipped: true,
                reason: "Disabled"
            });
            continue;
        }
        if (
            step.condition === "previous.success" &&
            !previous.success
        ) {
            results.push({
                step: step.name,
                skipped: true,
                reason: "Condition Failed"
            });
            continue;
        }
        const response = await callVendorAPI(
            step.vendor,
            requestData
        );
        previous = response;
        results.push({
            step: step.name,
            response
        });
    }
    return results;
}
module.exports = {
    executeWorkflow
};