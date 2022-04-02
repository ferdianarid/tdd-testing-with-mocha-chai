const ProgrammingLanguage = require("../language")

const UpdateLanguage = async(request, response) => {
    try {
        const { id } = request.params
        const selectedLanguage = ProgrammingLanguage.find((programming) => programming.id === parseInt(id))
        const indexs = ProgrammingLanguage.findIndex((objects) => objects.id == parseInt(id))

        const { title, popularity, created_at } = request.body

        ProgrammingLanguage[indexs].title = title
        ProgrammingLanguage[indexs].popularity = popularity
        ProgrammingLanguage[indexs].created_at = created_at

        response.status(200).json({
            message: "Successfully Update Selected Language",
            data: ProgrammingLanguage[selectedData]
        })
    } catch (error) {
        response.status(500).json({ message: "Internal Server Error" })
    }
}

module.exports = UpdateLanguage