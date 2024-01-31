// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(drivers, sought){
    return drivers.filter(possibleMatch => possibleMatch.toLowerCase() === sought.toLowerCase());

}

function fuzzyMatch(source, stringPartial){
    return source.filter(
        (possibleMatch) => possibleMatch.toLowerCase().indexOf(stringPartial.toLowerCase())=== 0
    );
}

function matchName(source, soughtName){
    return source.filter(
       (record) => record.name === soughtName
    );
}