let url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
// let url = "https://pokeapi.co/api/v2/pokemon/ditto";

let newSrc = document.querySelector("#img");

let btn = document.querySelector("#btn");


const get = async () => {
    let response = await fetch(url);
    let data = await response.json();

    // console.log(data.results.url);
    console.log(data);
    
    // console.log(data.sprites.front_shiny);
    // newSrc.src = data.sprites.front_shiny;
};

btn.addEventListener("click",get);