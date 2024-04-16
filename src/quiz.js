class Quiz {

    constructor(questionsValue, timeLimitValue, timeRemainingValue) {
        this.questions = questionsValue
        this.timeLimit = timeLimitValue
        this.timeRemaining = timeRemainingValue
        this.correctAnswers = 0
        this.currentQuestionIndex = 0
    }

    getQuestion() {
        return this.questions[this.currentQuestionIndex]
    }

    moveToNextQuestion() {
        this.currentQuestionIndex++

    }

    shuffleQuestions() {
        let currentIndex = this.questions.length;

        while (currentIndex != 0) {


            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;


            [this.questions[currentIndex], this.questions[randomIndex]] = [
                this.questions[randomIndex], this.questions[currentIndex]];
        }
    }

    checkAnswer(answer) {
        if (answer === this.questions[this.currentQuestionIndex].answer) {
            this.correctAnswers++
        }


    }

    hasEnded() {

        if (this.currentQuestionIndex < this.questions.length) {
            return false
        }
        else if (this.currentQuestionIndex === this.questions.length) {
            return true
        }
    }

}

//}

//should return the item from the questions array at the position of currentQuestionIndex.