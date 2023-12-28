
const helpDetails = (req, res) => {
    return res.status(200).send({
        success : true,
        message : "help desk......",
        data : {
            contact: "+9124xxxxxxx"
        }
    })
} 

module.exports = {
    helpDetails
}