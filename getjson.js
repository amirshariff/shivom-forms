const fs = require("fs");

function getJson(pathFile){
    fs.readFile(pathFile, (err, data)=> {
        const formData = JSON.parse(data);

        // let formDef = formData.form.nav.nav_sections;
        // for (const element of formDef) {
            
        //     console.log(element.display_name);
        // }
        console.log(formData);
        return formData;
    });
}

let path = "../shivom-forms/assets/json_form/dse_v2.json";
// console.log(typeof getJson(path));
console.log(getJson(path));

module.exports = getJson;