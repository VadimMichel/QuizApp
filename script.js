function init(){
    renderQuizCard();
    renderQuestion();
    renderAnswer()
}

function getElementId(id){
    let elementIdRef = document.getElementById(id);
    return elementIdRef
}

function renderQuizCard(){
    let lastQuesttionAmountRef = getElementId("lastQuesttionAmount");
    lastQuesttionAmountRef.innerHTML = "";
    lastQuesttionAmountRef.innerHTML = questions.length + 1;
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