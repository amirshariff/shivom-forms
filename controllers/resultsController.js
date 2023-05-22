
const generateResult = (req, res) => {

    let userResult = req.body;

    console.log(userResult);

    res.render("results", {userForm : userResult})

}

module.exports = {
    generateResult
}