const ProgrammingLanguage = require("../language")

const GetSpecifyLanguage = async(request, response) => {
    const { id } = request.params
    try {
        const selectedLanguage = ProgrammingLanguage.find((programming) => programming.id === parseInt(id))

        if (selectedLanguage) {
            return response.status(200).json({
                message: `Successfully get language with ID ${id}`,
                data: selectedLanguage
            })
        }
        response.status(404).json({ message: "Language not Found" })
    } catch (error) {
        response.status(500).json({ message: "Internal server error" })
    }
}

module.exports = GetSpecifyLanguage