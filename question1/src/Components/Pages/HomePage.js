import Navigate from '../Router/Navigate';
import { addOnequestion } from '../../models/models';

const homePage = `ÉTAPE D'ENTRAÎNEMENT
<form class="px-5" id="myform">
  <div class="mb-3">
    <label for="title">Question</label>
    <input
      class="form-control"
      type="text"
      name="quest"
      id="quest"
      required
    />
  </div>
  <div class="mb-3">
    <label for="duration">Réponse</label>
    <input
      class="form-control"
      type="text"
      name="text"
      id="resp"
      required
    />
    <input type="submit" class="btn btn-primary" value="Enregistrez exemple" />
  </div>
</form>
<FORM>
  <INPUT TYPE=button VALUE="Étape suivante" id="sub">
  </FORM>`;

  

const HomePage = () => {
  const main = document.querySelector('main');
  main.innerHTML = homePage;

  const myform = document.getElementById('myform')
  const question = document.getElementById('quest');
  const answer = document.getElementById('resp');

  myform.addEventListener('submit', (e)=>{
    e.preventDefault();
    addOnequestion(question.ariaValueMax, answer.value);
});

  const buttonSvt = document.getElementById('sub');
  buttonSvt.addEventListener('click', ()=> {Navigate(`/nextPage`)} );
};

export default HomePage;
