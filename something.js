const getJsonPath = function(x){
    let jsonPath;

    switch(x){
        case "test":
            jsonPath = "./assets/json_form/dummy.json";
            break;
        case "DSE_Form":
            jsonPath = "./assets/json_form/dse_v2.json"
            break;
    }

    return jsonPath;
    
}

module.exports ={
    getJsonPath
}