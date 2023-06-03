// Project Race Day

// random variable created for racer's race number
let raceNumber = Math.floor(Math.random() * 1000);
console.log(`Random race number generated is ${raceNumber}`);

// variables for early entrant status as a boolean value and a number for runner's age
let earlyEntrant = true;
let runnerAge = 33;

// flow statement to determine runner number that is an adult early entrant and calculates race number
if(earlyEntrant && runnerAge >= 18){
    raceNumber = raceNumber + 1000;
    console.log(`Entrant race number is... ${raceNumber}`);
}

// flow statement to determine racer start time for adults based on early/late entry
if(earlyEntrant && runnerAge >= 18){
    console.log(`Entant number ${raceNumber} start time is 9:30.`)
}else if(!earlyEntrant && runnerAge >= 18){
    console.log(`Entrant number ${raceNumber} start time is 11:00`);
}

// determines start time if entrant is not an adult
if(runnerAge < 18){
    console.log(`Youth registrants run at 12:30PM (regardless of registration).` 
    + `  Entrant ${raceNumber} is under 18 and start time is 12:30PM`);
}
