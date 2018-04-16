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
   // console.log("planetsArray", planetsArray);
    let domString = '';
    let i = 0;
    planetsArray.forEach((planet) => {
    //   domString +=  `<div class="grid-wrapper">`;
      domString +=  `<div class="planet" id="${i}">`;
      domString +=      `<h1>${planet.name}</h1>`;
      domString +=      `<img class="hide planet-image" src="${planet.imageURL}" alt="">`;
    //   domString +=      `<p>${planet.description}</p>`;
    //   domString +=      `<p>${planet.isGasPlanet}</p>`;
    //   domString +=      `<p>${planet.numberOfMoons}</p>`;
    //   domString +=      `<p>${planet.nameOfLargestMoon}</p>`;
      domString +=  `</div>`;
    //   domString +=  `</div>`;
    i++;
    });
   
    printToDom(domString, 'milkyWay')
    planetEvents();
};

const planetEvents = () => {
    const planets = document.getElementsByClassName("planet");
   
    for (let i=0; i < planets.length; i++) {
        console.log(planets[i]);
        planets[i].addEventListener("mouseenter", hoverPlanets);
        planets[i].addEventListener("mouseleave", showPlanets);
       // planets[i].addEventListener("click", clickPlanets);
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
    clickPlanets(data.planets);
    initializeSearchBar(data.planets);
};

const filterResults = (arr, searchKey) => {
    return arr.filter((obj) => {
      return Object.keys(obj).some((key) => {
        if (typeof obj[key] === 'string') {
            return obj[key].toLowerCase().includes(searchKey.toLowerCase());
        }
      })
    });
  }

const searchBar = (planetArray) => {
    const input = document.getElementById('search-field');
        if (input.value == '') {   
        buildDomString(planetArray);
        clickPlanets(planetArray);
        initializeSearchBar(planetArray);
    } else {
        const resultsArray = filterResults(planetArray, input.value);
        buildDomString(resultsArray);
        clickPlanets(resultsArray);
    }
};

const initializeSearchBar = (planetArray) => {
    const searchDiv = document.getElementById('search-field');
    searchDiv.addEventListener('keypress', (e) => {
        searchBar(planetArray);
    });
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

   const clickPlanets = (theArray) => {
    //e.target.classList.add("hide");
   // document.getElementById('milkyWay').classList.add('hide');
    const planets = document.getElementsByClassName("planet");
    const planetArray = Array.from(planets);
    planetArray.forEach(planet => {
        planet.addEventListener('click', (e) => {
            buildPlanet(e, theArray);
        });
    });
   };

   const killPlanet = (planetArray) => {
    let doomButton = document.getElementById('red-x');
    doomButton.children[0].addEventListener('click', (e) => {
        buildDomString(planetArray);
        clickPlanets(planetArray);
    });
};

  const buildPlanet = (e, planetArray) => {
    let target = e.target;
   // console.log("planet", planet);
   let clicked = target.id;
   console.log(clicked);
   const redXURL = 'https://vignette.wikia.nocookie.net/mysingingmonsters/images/2/24/Red-x.png';
    let domString = '';
      domString +=  `<div class="planet">`;
      domString +=      `<h1>${planetArray[clicked].name}</h1>`;
      domString +=      `<button id="red-x"><img src="${redXURL}" width="20px"> </button>`;
      domString +=      `<img class="planet-image" src="${planetArray[clicked].imageURL}" alt="">`;
      domString +=      `<p>${planetArray[clicked].description}</p>`;
      domString +=      `<p>${planetArray[clicked].isGasPlanet}</p>`;
      domString +=      `<p>${planetArray[clicked].numberOfMoons}</p>`;
      domString +=      `<p>${planetArray[clicked].nameOfLargestMoon}</p>`;
      domString +=  `</div>`;
      
      //console.log(domString);
      printToDom(domString, 'milkyWay')
      killPlanet(planetArray);
    };
    



  const startApplication2 = () => {
    let myRequest2 = new XMLHttpRequest();
    myRequest2.addEventListener("load", FileLoaded);
    myRequest2.addEventListener("error", executeThisCodeIfXHRFails);
    myRequest2.open("GET", "planet.json");
    myRequest2.send();
    console.log("myrequest2", myRequest2);
  };
  
  