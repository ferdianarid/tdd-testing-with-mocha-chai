const router = require("express").Router()
const CreateLanguage = require("../controllers/CreateLanguage")
const GetAllLanguage = require("../controllers/GetAllLanguage")
const GetSpecifyLanguage = require("../controllers/GetSpecifyLanguage")
const UpdateLanguage = require("../controllers/UpdateLanguage")

router.get("/", GetAllLanguage)
router.post("/", CreateLanguage)
router.get("/:id", GetSpecifyLanguage)
router.put("/:id", UpdateLanguage)

module.exports = router