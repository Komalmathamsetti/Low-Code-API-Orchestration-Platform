function mapRequest(requestMapping,requestBody){
    const mappedRequest = {};
    Object.keys(requestMapping).forEach((vendorField)=>{
        const clientField = requestMapping[vendorField];
        mappedRequest[vendorField] = requestBody[clientField];
    });
    return mappedRequest;
}
module.exports = { mapRequest };