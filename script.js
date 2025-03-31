function init(){
    renderQuizCard();
}

function renderCurrentQuestion(){
    let lastQuesttionAmountRef = getElementId("lastQuesttionAmount");
    let currentQuestionRef = getElementId("currentQuestion");
    lastQuesttionAmountRef.innerHTML = "";
    lastQuesttionAmountRef.innerHTML = questions.length;
    currentQuestionRef.innerHTML = "";
    currentQuestionRef.innerHTML = currentQuestion + 1;
}

function getElementId(id){
    let elementIdRef = document.getElementById(id);
    return elementIdRef
}

function renderQuizCard(){
    if(currentQuestion  >= questions.length){
        getElementId("endScreen").classList.remove("d-none");
        getElementId("questionContent").classList.add("d-none");
    }else{
        renderCurrentQuestion();
        renderQuestion();
        renderAnswer();
    }
   
}

function renderQuestion(){
    let questionRef = getElementId("question");
    
    questionRef.innerHTML = "";
    questionRef.innerHTML = questions[currentQuestion].question; 
}

function renderAnswer(){
    for (let indexRenderAnswer = 1; indexRenderAnswer < 5; indexRenderAnswer++) {
        let answerRef = getElementId(`answer${indexRenderAnswer}`)
        answerRef.innerHTML = "";
        answerRef.innerHTML = questions[currentQuestion][`answer_${indexRenderAnswer}`];
    }
}

function answer(selection){
    let rightAnswer = questions[currentQuestion].right_answer;

    if(selection == questions[currentQuestion].right_answer){
        getElementId(`answer${rightAnswer}`).style.backgroundColor = "rgb(183,247,153)";
    }else{
        getElementId(`answer${selection}`).style.backgroundColor = "rgb(255,163,164)";
        getElementId(`answer${rightAnswer}`).style.backgroundColor = "rgb(183,247,153)";
    }
    getElementId("nextButton").disabled = false; 
}

function backgroundColorWhite(){
    for (let indexbackgroundColor = 0; indexbackgroundColor < 4; indexbackgroundColor++) {
        getElementId(`answer${indexbackgroundColor + 1}`).style.backgroundColor = "rgb(255,255,255)"
    }
}

function nextQuestion(){
    currentQuestion++;
    renderQuizCard();
    backgroundColorWhite();
    getElementId("nextButton").disabled = true;
}