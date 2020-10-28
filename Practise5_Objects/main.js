var taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341
};

function prequal(car) {
    if (car.mileage > 10000) { //=> true
        return false; // returns false
    } else if (car.year >1960) {
        return false;
    }
    return true;
}

var worthALook = prequal(taxi); // false
if (worthALook) { // the previous function returns false so it's going to execute the second statement  
    console.log("You gotta check out this " + taxi.make + " " + taxi.model);
} else {
    console.log("You should really pass on the " + taxi.make + " " + taxi.model);
}



var cadi = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892
};

var worthALook = prequal(cadi); // false
if (worthALook) { // the previous function returns false so it's going to execute the second statement  
    console.log("You gotta check out this " + cadi.make + " " + cadi.model);
} else {
    console.log("You should really pass on the " + cadi.make + " " + cadi.model);
}

var fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000
};

var worthALook = prequal(fiat); // false
if (worthALook) { // the previous function returns false so it's going to execute the second statement  
    console.log("You gotta check out this " + fiat.make + " " + fiat.model);
} else {
    console.log("You should really pass on the " + fiat.make + " " + fiat.model);
}

var chevy = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021
};

var worthALook = prequal(chevy); // false
if (worthALook) { // the previous function returns false so it's going to execute the second statement  
    console.log("You gotta check out this " + chevy.make + " " + chevy.model);
} else {
    console.log("You should really pass on the " + chevy.make + " " + chevy.model);
}