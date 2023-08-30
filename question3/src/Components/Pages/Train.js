import { addTrad }from '../../models/models';
import { clearPage } from '../../utils/render';

const formTab = `<div class="text-center">
<form class="px-5">
          <div class="mb-3">
            <label for="title">Français</label>
            <input
              type="text"
              name="word"
              id="word"
            />
          </div>
          <div class="mb-3">
            <label for="duration">Anglais</label>
            <input             
              type="text"
              name="mot"
              id="mot"
            />
          </div>
          <input type="submit" class="btn btn-primary" value="Ajouter la traduction" />
  </form>  
</div>`;

const Train = () => {
  clearPage();
  const main = document.querySelector('main');
  main.innerHTML = formTab;

  const form = document.querySelector('form');
  const wordFr = document.getElementById('word');
  const wordEg = document.getElementById('mot');

  form.addEventListener('submit', async (e)=>{
      e.preventDefault();
      const newTraduction = {
        fr : wordFr.value,
        en : wordEg.value,
      }
      await addTrad(newTraduction);
      wordFr.value = '';
      wordEg.value = '';
  });
  
};

export default Train;
