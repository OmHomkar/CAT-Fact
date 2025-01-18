const factURL="https://catfact.ninja/fact"; //api link

let btn = document.querySelector("#btn");
let p = document.querySelector("#p");

const getFact =  async()=>{
    // fetch API
    let response = await fetch(factURL);

    // convert API call information into JS object
    let data = await response.json();
    
    console.log(data); //show the output to console browser window.

    // print value
    p.innerText=data.fact;
}
btn.addEventListener("click",getFact)
// developer OM HOMKAR