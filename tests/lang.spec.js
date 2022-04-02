const chai = require("chai")
const chaiHttp = require("chai-http")
const app = require("../server")

chai.use(chaiHttp)
chai.should()

describe("API Language v.1.0.0", () => {
    describe("GET /language", () => {
        it("Should GET all programming language", (done) => {
            chai.request(app)
                .get("/language")
                .end((error, responses) => {
                    responses.should.have.status(200)
                    responses.body.should.be.a("object")
                    done()
                })
        })
        it("Should GET single selected language", (done) => {
            const langId = 2
            chai.request(app)
                .get(`/language/${langId}`)
                .end((error, responses) => {
                    responses.should.have.status(200)
                    responses.body.should.be.a("object")
                    done()
                })
        })
        it("Should cant GET single selected language", (done) => {
            const langId = 222
            chai.request(app)
                .get(`/language/${langId}`)
                .end((error, responses) => {
                    responses.should.have.status(404)
                    done()
                })
        })
    })
    describe("POST /language", () => {
        it("Should POST new Language with correct response message", (done) => {
            let language = {
                id: 42,
                title: "Flutter Language",
                popularity: 894738544,
                created_at: "1999-12-31T07:00:00.000Z"
            }
            chai.request(app)
                .post(`/language`)
                .send(language)

            .end((error, responses) => {
                responses.should.have.status(200)
                responses.body.should.be.a("object")
                responses.body.should.have.property("message").eql("Success add new language")
                done()

                // if use mongoose document model
                /*responses.body.language.should.have.property("id")
                responses.body.language.should.have.property("title")
                responses.body.language.should.have.property("popularity")
                responses.body.language.should.have.property("created_at")*/
            })
        })
    })
})