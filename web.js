let url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
// let url = "https://pokeapi.co/api/v2/pokemon/ditto";

let newSrc = document.querySelector("#img");

let btn = document.querySelector("#btn");


const get = async () => {
    let response = await fetch(url);
    let data = await response.json();

    // console.log(data.results.url);
    console.log(data.results);

    let num = data.results;
    // console.log(num[Math.floor(Math.random()*1302)]);
    let num1 = num[Math.floor(Math.random()*1300)];
    let url1 = num1.url;
    // console.log(url1);

    let response1 = await fetch(url1);
    let data1 = await response1.json();
    console.log(data1.sprites.front_shiny);
    newSrc.src = data1.sprites.front_shiny;
    
    
    
    // console.log(data.sprites.front_shiny);
    // newSrc.src = data.sprites.front_shiny;
};

btn.addEventListener("click",get);