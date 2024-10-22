import express from "express"

const router = express.Router()

router.get("/", (req, res) => {
    res.render("quiz.njk", {
        message: "Quiz"
    })
})

const questions = [
    {
        id: "q1",
        text: "Hur många hjul har en bil?",
        answers: [3, 12, 5, 4],
        correctAnswer: 4
    },
    {
        id: "q2",
        text: "Hur många hjärnceller har Olle?",
        answers: [52, 65000000001, 83, 45],
        correctAnswer: 65000000001
    },
    {
        id: "q3",
        text: "Hur mycket nörd är Sammi",
        answers: ["Väldigt", "Inte alls", "Kanske?", "Ja."],
        correctAnswer: "Väldigt"
    }
]

router.get("/questions", (req, res) => {
    res.render("questions.njk", {
        message: "Frågor",
        questions
    })
})

router.post("/end", (req, res) => {
    const answers = req.body
    console.log(answers)
    const results = questions.map(question => {
        const answer = answers[question.id]
        return {
            question: question.text,
            answer,
            correct: answer == question.correctAnswer
        }
    })

    console.log(results)

   res.render("result.njk", {
    message: "Ditt resultat",
    results,
   })
})





export default router