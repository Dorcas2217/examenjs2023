import { clearPage } from "../../utils/render";
import { getTradEng, getTradFr } from "../../models/models";

const formTab = `<div class="text-center">
<form class="px-5" id="form1">
          <div class="mb-3">
            <label for="title">Français</label>
            <input
              type="text"
              name="mot"
              id="mot"
            /> </div>        
          <input type="submit" class="btn btn-primary" value="Traduire" id="btn1"/>
  </form> 
  <div id="trad1"> </div> 

  <form class="px-5" id="form2">
          <div class="mb-3">
            <label for="title">Anglais</label>
            <input
              type="text"
              name="word"
              id="word"
            /> </div>        
          <input type="submit" class="btn btn-primary" value="Traduire" id="btn2" />
  </form>
  <div id="trad2"> </div>

</div>`;



const Trad = () => {
    clearPage();
    const main = document.querySelector('main');
    main.innerHTML = formTab;
  
    const form1 = document.getElementById('form1');
    const motfr = document.getElementById('mot');
    const form2 = document.getElementById('form2');
    const wordEg = document.getElementById('word');
    const div1 = document.getElementById('trad1');
    const div2 = document.getElementById('trad2');

    form1.addEventListener('submit', async (e)=>{
        e.preventDefault();
        const trad = await getTradEng(motfr.value);
        if(trad === undefined ){
            div1.innerHTML = `<p>Traduction Anglaise : <font color="red"> Impossible d'obtenir la traduction </p>`
        }else{
            div1.innerHTML = `<p>Traduction Anglaise : ${trad} </p>`
        }
       
    });

    form2.addEventListener('submit', async (e)=>{
        e.preventDefault();
        const trad = await getTradFr(wordEg.value);
        if(trad === undefined ){
            div2.innerHTML = `<p>Traduction Francaise : <font color="red"> Impossible d'obtenir la traduction </p>`
        }else{
            div2.innerHTML = `<p>Traduction francaise : ${trad} </p>`
        }
    });
  };
  
  export default Trad;