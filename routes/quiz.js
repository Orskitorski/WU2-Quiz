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
    /*
    const answerStatuses = [
        {
            id: "q1",
            status: true
        }
        {
            id: "q2",
            status: true
        }
    ]
    */
    questions.forEach(question => {
        const answer = answers[question.id] 
        if(answer == question.correctAnswer) {
            console.log("Du har svarat rätt på fråga : ", question.id)
        }
        else {
            console.log("Du är dum i huvudet på fråga : ", question.id)
            //answerStatuses.forEach(answerStatus => {
            //})
        }
        res.json(answers)
    })
    /*
    res.render("quiz.njk", {
        message: "hej"
    })
    */
})





export default router