const fs = require("fs");

const generate_form = (req, res) =>{

    let jsonPath;
    
    console.log("i GOT HERE");


    console.log(req.body);

    switch(req.body.Form_Option) {
        case "test":
            jsonPath = "./assets/json_form/dummy.json";
            break;
        case "DSE_Form":
            jsonPath = "./assets/json_form/dse_v2.json"
            break;
        case "New_Employee":
            jsonPath = "./assets/json_form/employee_form_v2.json"
            break;
    }

    let dseForm = JSON.parse(fs.readFileSync(jsonPath));
    res.render("form", {df : dseForm});
    console.log(dseForm);
}


module.exports = {
    generate_form
}