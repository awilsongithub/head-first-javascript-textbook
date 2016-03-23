
// register method to handle onclick of button

window.onload = function() {
    // form id's make, nickName, makeCarButton
    var makeCarButton = document.getElementById('makeCarButton');
    makeCarButton.onclick = makeCar;
    console.log('onload function called');
}

function makeCar() {
    console.log('makeCar() called');
    var makeElement = document.getElementById('make');
    var make = makeElement.value;
    var modelElement = document.getElementById('model');
    var model = modelElement.value;

    var newCar = new Car (make, model);
    console.log(newCar);
    newCar.start();
    newCar.drive();

    // clear input fields
    makeElement.value = '';
    modelElement.value = '';
}


// make a constructor function Car and create instances using "new"
function Car (make, model, year, color, passengers, convertible, mileage) {
    this.make = make;
    this.model = model;
    // this.year = year;
    // this.color = color;
    // this.passengers = passengers;
    // this.convertible = convertible; // boolean
    // this.mileage = mileage;
    // this.started = false;

    this.start = function() {
        this.started = true;
    };
    this.stop = function() {
        this.started = false;
    };
    this.drive = function() {
        if (this.started === true) {
            alert('vrooom! vrooom! goes the ' + this.make + ' ' + this.model + '.');
        }
        else {
            alert('call the start method first please.');
        }
    };
}

// var sporty = new Car ('Porsche', '600000X', 1985, 'red', 2, true, 45000);
// sporty.start();
// sporty.drive();
