import Navigate from '../Router/Navigate';
import { searchOneQues, allAnswers } from '../../models/models';
const answer = [];

const NextPage = () =>{
rendrerPageAnswer();
}

const answerPage = `<div class="text-center">
                <h3>CHAT BOT</h3>
<form class="px-5" id="form2">
<div class="mb-3">
  <label for="title">Question</label>
  <input
    class="form-control"
    type="text"
    name="quest"
    id="q1"
    required
  />
</div>
  <input type="submit" class="btn btn-primary" value="poser la question" />
</div>
</form> </div>
<div class="row">
<div class="col">
  <div id="tableWrapper" class="table-responsive mt-3"></div>
</div>
<FORM>
  <INPUT TYPE=button VALUE="Étape précédente" id="sub2">
  </FORM>
</div>`;

function rendrerPageAnswer(){
    const main = document.querySelector('main');
    main.innerHTML = answerPage;

    const form2 = document.getElementById('form2');
    const quest = document.getElementById('q1');

    form2.addEventListener('submit', (e) => {
        e.preventDefault();
        searchOneQues(quest.value);
        const answerWrapper = document.getElementById('tableWrapper');
        const tabAnswers = allAnswers();
        const htmlAnswer =  renderAnswer(tabAnswers);

        answerWrapper.innerHTML = htmlAnswer;
        const buttonSvt = document.getElementById('sub2');
        buttonSvt.addEventListener('click', ()=> {Navigate(`/`)} );
    });
}
function renderAnswer(response){
    let answerList = `<div class="table-responsive p-5">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Question</th>
      <th scope="col">Answer</th> 
    </tr></thead><tbody>`;

    response.foreach((element)=>{
        answerList += `
        <tr>
          <td class="fw-bold text-info" contenteditable="true">${element.question}</td>
          <td class="fw-bold text-info" contenteditable="true">${element.answer}</td> 
        </tr>`;
    });

    return answerList;
}

export default NextPage;