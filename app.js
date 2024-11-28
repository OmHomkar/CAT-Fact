const factURL="https://cat-fact.herokuapp.com/facts"; //api link

let btn = document.querySelector("#btn");
let p = document.querySelector("#p");

const getFact =  async()=>{
    // fetch API
    let response = await fetch(factURL);
    // convert API call information into JS object
    let data = await response.json();
    // give random number.
    let n= Math.floor(Math.random() * 5) + 1; //1-5
    // print value
    p.innerText=data[n].text;
}
btn.addEventListener("click",getFact)
// developer OM HOMKAR