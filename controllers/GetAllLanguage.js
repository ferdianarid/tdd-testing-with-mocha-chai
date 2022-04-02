const ProgrammingLanguage = require("../language")

const GetAllLanguage = async(request, response) => {
    try {
        response.status(200).json({
            message: "Success get all language",
            data: ProgrammingLanguage
        })
    } catch (error) {
        response.status(500).json({ message: "Internal server error" })
    }
}

module.exports = GetAllLanguage