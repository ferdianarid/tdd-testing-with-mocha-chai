const ProgrammingLanguage = require("../language/")

const CreateLanguage = async(request, response) => {
    try {
        const language = request.body
        const newData = ProgrammingLanguage.push(language)

        response.status(200).json({
            message: "Success add new language",
            data: language
        })
    } catch (error) {
        response.status(500).json({ message: "Internal server error" })
    }
}

module.exports = CreateLanguage