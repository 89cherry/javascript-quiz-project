class Quiz {
    constructor(questions, timeLimit, timeRemaining) {
        this.questions = questions
        this.timeLimit = timeLimit
        this.timeRemaining = timeRemaining
        this.correctAnswers = 0
        this.currentQuestionIndex = 0
    }

    getQuestion() {
        const currentQuestion = this.questions[this.currentQuestionIndex]
        return currentQuestion
    }

    moveToNextQuestion() {
        this.currentQuestionIndex++
    }

    shuffleQuestions() {
        this.questions.sort(() => .5 - Math.random());
    }

    checkAnswer(answerToCheck) {

        const currentQuestion = this.getQuestion()
        const currentAnswer = currentQuestion.answer

        if (answerToCheck === currentAnswer) {
            this.correctAnswers++
        }
    }

    hasEnded() {
        if (this.currentQuestionIndex >= this.questions.length) {
            return true
        } else {
            return false
        }
    }
}