let baseUrl = "https://rickandmortyapi.com/api";


export let characters = [];
export function dataFetch(random, idx){
    fetch(
      `${baseUrl}/character/${random}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data); 

        characters[idx] = {};

        characters[idx].img = data.image;
        characters[idx].name = data.name;
        characters[idx].status = data.status;
        characters[idx].location = data.location;

        characters = [...characters]; 
      });
  }

 