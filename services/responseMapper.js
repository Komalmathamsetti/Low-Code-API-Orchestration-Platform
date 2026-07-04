function getNestedValue(obj,path){
    return path.split(".").reduce((current,key)=>{
        return current ? current[key]:undefined;
    },obj);
}
function mapResponse(responseMapping,vendorResponse){
    const mappedResponse = {};
    Object.keys(responseMapping).forEach((outputField)=>{
        const vendorField = responseMapping[outputField];
        mappedResponse[outputField] = getNestedValue(
            vendorResponse,vendorField
       );
    });
    return mappedResponse;
}
module.exports = { mapResponse };