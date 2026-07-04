const logger = require("../utils/logger");
async function retry(fn, retries = 3) {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            return await fn();
        }
        catch (error) {
            logger.warn(
                `Retry Attempt ${attempt}/${retries} Failed`
            );
            if (attempt === retries) {
                logger.error(
                  "Maximum retry attempts reached."
                );
                throw error;
            }
        }
    }
}
module.exports = retry;