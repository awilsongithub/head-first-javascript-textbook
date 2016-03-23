/*
==========================================================
CODE RANDOMLY MAKES A CAR OBJECT THEN LOGS A DESCRIPTION
AND DECIDES IF WE SHOULD CONSIDER PURCHASING.

LEARNING TAKEAWAYS:
1. function encapsulation is nice. call it and it returns what you need. done.
2. object blueprint is nice. This is not technically a constructor though.
3. an object is a nice encapsulated data type.
4. functions that use a selection of other function(ality) rock.
==========================================================
*/


function makeCar() {
    // properties possible
    var makes = ["Toyota", 'Honda', 'Buick', 'Ford'];
    var models = ['Prius', 'Civic', 'Taurus', 'LeSabre'];
    var years = [2016, 2015, 2010, 2005, 2000, 1995, 1990, 1975];
    var colors = ['silver', 'black', 'white', 'red'];
    var convertible = [true, false];

    // select properties randomly by index
    var rand1 = Math.floor(Math.random() * makes.length); // floor of 0-4.999
    var rand2 = Math.floor(Math.random() * models.length);
    var rand3 = Math.floor(Math.random() * years.length);
    var rand4 = Math.floor(Math.random() * colors.length);
    var rand5 = Math.floor(Math.random() * 5) + 1; // 1-5 passengers
    var rand6 = Math.floor(Math.random() * 2); // 0 or 1

    // object blueprint
    var car = {
        make: makes[rand1],
        model: models[rand2],
        year: years[rand3],
        color: colors[rand4],
        passengers: rand5,
        convertible: convertible[rand6],
        mileage: 0,
        // add hasFuel, started property
        hasFuel: false,
        started: false,

        //add addFuel, start, drive and stop methods
        addFuel: function(){
            this.hasFuel = true;
        },
        start: function(){
            console.log('start method called');

            if (this.hasFuel == true){
                this.started = true;
                var wantToDrive = prompt('vrooooom. Engine running. Want to drive (enter Y or N)');
                if (wantToDrive == "Y" || wantToDrive == 'y'){
                    this.drive();
                }
            }
            else {
                var wantToFuel = prompt('You need some fuel first. want to add fuel (Y or N)');
                if (wantToFuel == "Y" || wantToFuel == 'y') {
                    this.addFuel();
                    this.start();
                } else {
                    alert('OK. have a nice day.');
                }
            }
        },

        drive: function(){
            var wantToFuel = prompt('vroom, vroom, vrooom.... speed 20...30...40...50...60! Crossing through Delaware oh boy... I can see the Atlantic... uh oh, running out of gas. Want to add fuel (enter Y or N)');
            this.hasFuel = false;
            if (wantToFuel == "Y" || wantToFuel == 'y') {
                this.addFuel();
                this.start();
            }
            else {
                alert('OK, pulling into the garage.');
                this.stop();
            }
        },
        stop: function(){
            this.started = false;
            alert('Ignition off. Click button next time you want to make a new car and drive it!');
        }

    };

    return car;
} // end makeCar

// displayCar function logs a string listing random car generated properties
function displayCar(car) {
    console.group("And Here's Our Car!");
        console.log("Coming off the line is a " + car.color + " " + car.year + " " + car.make + " " + car.model + ".");
        if (car.convertible == true) {
            console.log("It's a convertible for all you folks that like messy hair.");
        }
        if (car.model == "Civic" || car.model == "Prius"){
            console.log("MPG looks good so we'll take a look.");
        }
        else {
            console.log('Not really our type, thanks though.')
        }
    console.groupEnd();
}

// call above functions to make car and display its properties
function makeAndDisplayCar(){
    var carToConsider = makeCar(); // makes an instance of car and returns it
    displayCar(carToConsider); // logs info about instance we just made

    console.log(carToConsider);

    var wantToStart = prompt('Want to start her up? (enter Y or N)');
    wantToStart = wantToStart.toUpperCase(); // built in string method
    console.log(wantToStart);

    if (wantToStart == "Y") {
        carToConsider.start(); // invokes start method which triggers other methods.
    }
}
