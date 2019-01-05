
prequestions = [
    'Name',
    'When are you scheduled to take the test?',
    'What score are you hoping to get?'
]

firsttimequestions = [
    'Do you have a learning disability, IEP, 504, ADHD, dyslexia, problems focusing, or get accommodations of the test? If so, which?',
    'Are you normally a bad test taker, bad standardized test taker, or have test anxiety?',
    'List all past tests and scores.',
    'Are you normally slow at tests/standardized tests?',
    'Do you prefer SAT or ACT?'
]

postquestions = [
    "How did you feel you did on the test? Predict the score you think you got (18-36)",
    "Were you anxious or feel rushed?",
    "Were you able to focus?",
    "Did you take too long on certain questions?",
    "Did you feel sick or did anything that could affect your score happen?",
    "If you did poorly on this test, why do you think that would be?",
    "Was there a lot of material on the test you didn't recognize?",
    "Did tutoring help prepare you for the material on this test?",
    "What strategies did you use for each section? What helped? What didn't?",
    "Did you take this test in a quiet environment without distractions? Was your environment like the real test environment?",
    "What did you have most problems with on the test?",
    "Any other comments?"
]

function getPreQuestions() {
    return prequestions
}

function getFirstTimeQuestions() {
    return firsttimequestions
}

function getPostQuestions() {
    return postquestions
}

function fillFormQuestions(questions) {
    html = ""
    for (i=0;i<questions.length;i++) {
        html += createQuestionHtml(questions[i], i)
    }
    $('#divForm').html(html)
}

function createQuestionHtml(question, idx) {
    html = `
    <div class="form-group">
        <label for="lbl_${idx}">${question}</label>
        <input class="form-control" id="tb_${idx}">
    </div>
    `
    return html
}

function addQuestionsToSessVars(questions, fieldName) {
    values = []
    for (i=0;i<questions.length;i++) {
        values.push($(`#tb_${i}`).val())
    }
    sessvars[fieldName] = values
}