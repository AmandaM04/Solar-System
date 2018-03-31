// function that prints names = buildSolarSystem - they should have the class of cards(all)
// function that hovers and shows image = hoverPlanets
// function that actually clicks the planets = clicksPlanets
// function that actually opens the single planet card = buildPlanet
// to show the image on hover - add a different class to each planet (class=planetname(changes for each planet)image)
// function that works with the red X = killPlanet - called inside the buildPlanet function
// show image function - going to change the card classes inner html to an img tag
// only printing a div with heading tag for search = buildDwarfPlanet
// loop through json file and prints each dwarfplanet file through the json file


const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML = domString;
};

const buildDomString = (planetsArray) => {
    console.log("planetsArray", planetsArray);
    let domString = '';
    planetsArray.forEach((planet) => {
      domString +=  `<div class="planet">`;
      domString +=      `<h1>${planet.name}</h1>`;
      domString +=      `<img class="hide planet-image" src="${planet.imageURL}" alt="">`;
    //   domString +=      `<p>${planet.description}</p>`;
    //   domString +=      `<p>${planet.isGasPlanet}</p>`;
    //   domString +=      `<p>${planet.numberOfMoons}</p>`;
    //   domString +=      `<p>${planet.nameOfLargestMoon}</p>`;
      domString +=  `</div>`;
    });
    
    printToDom(domString, 'milkyWay')
    planetEvents();
};

const planetEvents = () => {
    const planets = document.getElementsByClassName("planet");
   
    for (let i=0; i < planets.length; i++) {
        console.log(planets[i]);
        planets[i].addEventListener("mouseenter", hoverPlanets);
        planets[i].addEventListener("mouseleave", showPlanets)
    }
};

const hoverPlanets = (e) => {
 e.target.children[0].classList.add("hide");
 e.target.children[1].classList.remove("hide");
};

const showPlanets = (e) => {
    e.target.children[0].classList.remove("hide");
    e.target.children[1].classList.add("hide");
   };

function executeThisCodeIfXHRFails(){
    console.log("something went wrong");
};

function FileLoaded (){
    // console.log("FileLoaded", FileLoaded);
//     console.log("this", this);
//     console.log("this.responseText", this.responseText);
    const data = JSON.parse(this.responseText);
//     console.log("data", data);
    buildDomString(data.planets);
};

const startApplication = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", FileLoaded);
    myRequest.addEventListener("error", executeThisCodeIfXHRFails);
    myRequest.open("GET", "planet.json");
    myRequest.send();
    console.log("myrequest", myRequest);
  };
  
  startApplication();