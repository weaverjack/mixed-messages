
//function to create random number with max and min that will vary based on key length
function generateRandomNumber(num) {
    return Math.floor(Math.random()*(num))
};

//create object to hold the message elements that will be randomized. 
const thingsToDo = {
    places: [' to Moab', ' to Hawaii', ' nowhere, just stay home', ' anywhere, pick a random spot on the map'],
    activities: ['ride a bike on a fun trail', 'go out to eat as much as you can tolerate', 'relax, have a cocktail or 10'],
    mindset: ['try to relax as much as possible', 'go crazy put your all into what your doing', 'really get to know the area']
};
//console.log(thingsToDo.places);
//create array to hold randomly chosen strings
let vacationPlan = [];

//loop thru thingsToDo and return message associated with random index
for (let option in thingsToDo) {
    let randomIndex = generateRandomNumber(thingsToDo[option].length);
    //console.log(randomIndex);

    switch (option) {
        case 'places': 
            vacationPlan.push(`You should go${thingsToDo.places[randomIndex]}`)
            break;
        case 'activities': 
            vacationPlan.push(`and ${thingsToDo.activities[randomIndex]}`)
            break;
        case 'mindset':
            vacationPlan.push(`, but make sure you ${thingsToDo.mindset[randomIndex]} while doing so!`)    
        default: vacationPlan.push('')
            break;
    }
};

console.log(vacationPlan)
//take everything in vacationPlan and console.log it in a way that is readable.

function printPlan() {
    let plan = vacationPlan.join(' ');
    console.log(plan);
};

printPlan()