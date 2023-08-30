
  const addTrad = async (trad) =>{
    try {
        const options = {
            method: 'POST',
            body: JSON.stringify(trad),
            headers: {
              'Content-Type': 'application/json',
            },
          };
          const response = await fetch('/api/trad', options);
  
      if (!response.ok) {
        throw new Error(`add traduction  :: fetch error : ${response.status} : ${response.statusText}`);
      }
        
    } catch (err) {
        console.error('addOneMovie::error: ', err);
      throw err;
    }
  }

  const getTradEng = async (mot) =>{
    try {
        const response = await fetch(`api/trad/fr?query=${mot}`);
    if(!response.ok){
       return undefined;
    }
    const trad = await response.json();
    return trad.en;
    } catch (err) {
        console.error('readAllMovies::error: ', err);
        throw err;
    };
    
  }

  const getTradFr = async (word) =>{
    try {
        const response = await fetch(`api/trad/en?query=${word}`);
    if(!response.ok){
        return undefined;
    }
    const trad = await response.json();
    return trad.fr;
    } catch (err) {
        console.error('readAllMovies::error: ', err);
        throw err;
    };
  }
  export  {addTrad, getTradEng, getTradFr};