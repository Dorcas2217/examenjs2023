const questionResp =[
    {
        question : "bonjour",
        answer : "bonjour comment tu vas ?",
    }
];

const answers =[];

const addOnequestion = (question, answer)=> {
    const newQR = {
        question: question,
        answer: answer,
    }
  questionResp.push(newQR);
}

const searchOneQues = (quest)=>{
    const QRFind = questionResp.find((elt)=> elt.question === quest);
  if(!QRFind){
    const answerUndefined = {
        question : quest.value,
        answer : "je ne sais pas répondre à cette question ",
    }
    answers.push(answerUndefined)
  }else
  answers.push(QRFind);
}

const allAnswers = ()=>{
    return answers;
}

export { addOnequestion, searchOneQues, allAnswers};