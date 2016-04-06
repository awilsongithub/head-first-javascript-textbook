// make an animal object with properties matching an Animal constructor
// pass the object to new Animal to create an instance
// call a method of octopus ie run
    // "Our cute little ferocious " + octopus.species + " runs through the " + octopus.habitat + " on her " + octopus.legs + " legs."
    var octopusA = {
        species: "octopus",
        habitat: "the ocean",
        legs: 8,
        name: 'Dr. WigglesBiggles'
    }
    var octopusB = {
        species: "octopus",
        habitat: "Lake Michigan",
        legs: 18,
        name: 'Mr. WrangleBodies'
    }
    var animaliaArray = [octopusA, octopusB];

    function Animal (params) {
        this.species = params.species;
        this.habitat = params.habitat;
        this.legs = params.legs;
        this.name = params.name;

        this.run = function() {
            console.log("Our cute little ferocious " + this.species + " " + this.name + " runs through " + this.habitat + " on her " + this.legs + " legs.");
        };
    }

    var octopus1 = new Animal (octopusA);
    octopus1.run();

    var octopus2 = new Animal (octopusB);
    octopus2.run();

    function isThisAnAnimal(obj) {
    	return (obj instanceof Animal);
    }

    if (isThisAnAnimal(octopus1) ) {
    	console.log('yep, made by Animal');
    }
    octopus1.drink = 'Redbull';
    octopus1.partyBoast = function() {
    	console.log('yo, my 8 legs wiggle faster with a little ' + octopus1.drink);
    }
    octopus1.partyBoast();

    // Pre-built constructors
    var now = new Date().toLocaleString();
    console.log(now);

    // enter my bday string and convert to Date format with Date constr.
    // then log the day of the week out of that new object and mehtod chain to convert to locale conventions ie thur not 4
    var myBirthday = new Date('may 30, 1974');
    var bornOn = myBirthday.toLocaleString();
    console.log(bornOn);

    // array methods. if '' empty string param ommitted split will split at spaces and join will join with commas between items.
    var string = 'Word';
    var arrayToy = string.split('').reverse().join('');
    console.log(arrayToy);
