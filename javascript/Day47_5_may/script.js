const apiURL = "http://5d76bf96515d1a0014085cf9.mockapi.io/quiz";

const userChoices = {};
const correctAnswers = {}

$(() => {
  getQuizData();
  handleForm()
  handleSubmit()
});

const getQuizData = () => {
  $.get(apiURL, onSuccess).fail(onFailure);
};

const onSuccess = (data) => {
  stopLoader();
  console.log(data);
  setCorrectAnswers(data)
  setTimeout(()=>{
    createQuiz(data)
  },500)
 
 
};

const onFailure = (error) => {
  console.log(error);
  stopLoader();
};

const startLoader = () => {
  $("#loader-container").fadeIn();
};

const stopLoader = () => {
  $("#loader-container").fadeOut();
};





const createQuiz = (quizData)=>{
  if(Array.isArray(quizData)){

    quizData.forEach((questionInfo,index)=>{

      const questionTemplate = getQuestionTemplate(questionInfo,index)
      const questionElement = $(questionTemplate);

      $('#quiz-form').append(questionElement)
    })
  }
}
const getQuestionTemplate = (questionInfo, index) => {
  const { question, id, options=[] } = questionInfo || {};
  return `
  <div class="question-container">
  <p class="question-text">Q${index + 1}. ${question}</p>
  <div class="options-container">

  ${(options.map(
    (option,ind) =>
      `<div class="option-container">
      <input name="question-${id}" type="radio" id="question-${id}-${ind+1}" data-optid=${ind+1} data-quest=${id} />
      <label for="question-${id}-${ind+1}">${option}</label>
    </div>`
  )).join('')}

  </div>
</div>
  `;
};


const handleForm = ()=>{
  $('#quiz-form').on({
    'change':function(e){
      const optionData = $(e.target).data()
      const {quest,optid} = optionData||{};
      userChoices[quest] = optid

      console.log(userChoices)
    }
  })
}

const setCorrectAnswers = (data)=>{
  if(Array.isArray(data)){
    data.forEach(({id,answer})=>{
      correctAnswers[id] = answer;
    })
  }
}

const handleSubmit = ()=>{
  $('#submit-quiz').click(calculateResult)
}

const calculateResult = ()=>{
console.log(correctAnswers,userChoices)
// compare both object and calculate result
}