// function that prints names = buildSolarSystem - they should have the class of cards(all)
// function that hovers and shows image = hoverPlanets
// function that actually clicks the planets = clicksPlanets
// function that actually opens the single planet card = buildPlanet
// to show the image on hover - add a different class to each planet (class=planetname(changes for each planet)image)
// function that works with the red X = killPlanet - called inside the buildPlanet function
//show image function - going to change the card classes inner html to an img tag
// only printing a div with heading tag for search = buildDwarfPlanet
// loop through json file and prints each dwarfplanet file through the json file


const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML = domString;
};

console.log();



const startApplication = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", FileLoaded);
    myRequest.addEventListener("error", executeThisCodeIfXHRFails);
    myRequest.open("GET", "planets.json");
    myRequest.send();
    // console.log("myrequest", myRequest);
  };
  
  startApplication();