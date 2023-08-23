const startButton = document.getElementById('start-btn')
const nextButton= document.getElementById('next-btn')
const questionContainerElement = document.getElementById ('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById
('answer-buttons')
let shuffledQuestions, currentQuestionIndex 


startButton.addEventListener('click', startGame)
// giving life to the button 
nextButton.addEventListener('click',() => {
    currentQuestionIndex++
    setNextQuestion()
})
function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    // need to hide the button once it is pressed
    shuffledQuestions = questions.sort (()=> webquestions.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
// supposed to set the next question therefore we need list of questions
}

function setNextQuestion() {
    resetState()
    // to reset the state after clicks
    showQuestion(shuffledQuestions[currentQuestionIndex])
    //show questions in a shuffle 
}

function showQuestion(question){
    questionElement.innerText = question.question
    // we want the inner element to be same to the question
    question.answers.forEach(answer => {
        // populating answers
        const button = document.createElement('button')
        // creatig button for each one of them
        buttoninnerText = answer.text 
        buttonclassList.add('btn')
        if (answer.correct) {
            buttone.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChil(button)
    })


}
function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.fisrtChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)


    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    // e.terget - whatever we clicked on
    const correct = selectedButton.dataset.correct 
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button=> {
        setStatusClass(button, button.dataset. correct)
    })
    if (shuffledQuestions.length >currentQuestionIndex + 1 ) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
const questions = [
    {
        question: 'Commonly used Data Types do not include:',
        answers: [
            { text: 'strings', correct: false },
            { text: 'booleans', correct: true },
            { text: 'alerts', correct: false },
            { text: 'numbers', correct: false }
         ]
    }

]
