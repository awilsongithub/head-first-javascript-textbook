/*
DOG CONSTRUCTOR AND PROTOTYPE
*/
function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}
var tuffy = new Dog("Tuffy", "Rat Terrier", 20);
// add on to prototype of Dog object
Dog.prototype.run = function(){
    console.log(this.name + " runs super duper fast.");
}
// call tuffy.run. does it work since intsantiated before prototype run method ? yes, you can add to prototype long after "dogs have been born into the code." Dog instances still inherit the new properties! Post-birth dna modification. Client server type sh*t!
tuffy.name;
tuffy.run();

Dog.prototype.species = "Canine";
Dog.prototype.bark = function() {
    if (this.weight > 25) {
        console.log(this.name + ' says Woof!');
    } else {
        console.log(this.name + ' says Yip!');
    }
}

Dog.prototype.wag = function(){
    console.log('wag, wag, wag...');
}

/*
SHOWDOG CONSTRUCTOR MAKES INSTANCES
DELEGATING SOME OF THE WORK TO DOG
PROTOTYPE IS CREATED FROM A DOG INSTANCE
WHICH HAS ACCESS UP THE PROTOTYPE CHAIN
TO THE DOG PROTYPE
*/
function ShowDog(name, breed, weight, handler) {
    // Be DRY: pass this object to Dog, delegating work Dog can do
    Dog.call(this, name, breed, weight);
    this.handler = handler;
}
ShowDog.prototype = new Dog();

// explicitly set constructor or it will return Dog and do this AFTER you create the constructor from a new Dog instance.
ShowDog.prototype.constructor = ShowDog;

ShowDog.prototype.league = "Webville";
ShowDog.prototype.stack = function() {
    console.log('stack');
};
ShowDog.prototype.bait = function() {
    console.log('bait');
};
ShowDog.prototype.gait = function(kind) {
    console.log(kind + 'ing.');
};
ShowDog.prototype.groom = function() {
    console.log('groom');
};
ShowDog.prototype.toString = function() {
    return this.name + ' is a ' + this.breed + ' belonging to ' + this.handler;
}

// MAKE AN AGILITYSHOWDOG CONSTRUCTOR DESCENDED FROM SHOWDOG
function AgilityShowDog(name, breed, weight, handler, level) {
    ShowDog.call(this, name, breed, weight, handler);
    this.level = level;
}

// make it inherit from showdog but creating the prototype from an instance of showdog
AgilityShowDog.prototype = new ShowDog();

// but then assign the constructor for AGILITYSHOWDOG to AGILITYSHOWDOG
AgilityShowDog.prototype.constructor = AgilityShowDog;

// instantiate an AgilityShowDog
var jumpy = new AgilityShowDog('Jumpy', 'Cattle Dog', 45, 'Smith', 'Advanced');
console.log(jumpy);
AgilityShowDog.prototype.jump = function() {
    console.log( this.name + ' jumps over a car!');
};
jumpy.jump();

// INSTANTIATIONS
var fifi = new Dog('fifi', 'yorkshire terrier', 7);
var fox = new Dog('fox', 'Shiba Inu', 20);
var terry = new ShowDog('Terry', 'terrier', '25', 'Adam');

// CUSTOMIZATIONS/OVERRIDES
fifi.bark = function() {
    console.log(this.name + ' says WOOF!');
};

// FUNCTION CALLS. JS LOOKS IN INSTANCE, THEN UP THE PROTOTYPE CHAIN
fifi.bark();
fifi.wag();
fifi.run();

fox.bark();
fox.wag();
fox.run();

terry.stack(); // using showdog prototype
terry.bark(); // using dog prototype
console.log(terry.species); // in dog PROTOTYPE
console.log(terry.league); // in showdog prototype

if (fifi instanceof Dog) {
    console.log('Fifi is a Dog');
}
if (fifi instanceof ShowDog){
    console.log('Fifi is a showDog');
}
console.log('fifi constructor is ' + fifi.constructor);
console.log('terry constructor is ' + terry.constructor);
console.log(terry.toString()); // uses custom ShowDog.prototype.toString method


// EXTENDING THE BUILT-IN STRING OBJECT

// string prototype method can now be called on any string
String.prototype.clicheCheck = function() {
    var cliche = "tell me about it";
    console.group("I'm checkin to see if you used my cliche.");
    // check for cliche existience somewher in string called on
    if (this.indexOf(cliche) >=0) {
        return true;
        // just returns true. response to finding not specified here
    }
    return false;
}; // semi colon since "="

var sentences = ["that was awesome.", 'dude, tell me about it.'];
// iterate over sentences, calling clicheCheck string method
for (var i=0; i<sentences.length; i++) {
    var phrase = sentences[i];
    if ( phrase.clicheCheck() ) {
        console.log('Stop using my cliche!');
    }
    else {
        console.log("Cliche not found.");
    }
}
console.groupEnd();


console.log(ShowDog instanceof Object);
console.log('and we know functions are objects when we see things like Dog.constructor where a constructor function has methods!');
console.log('EVERYTHING IS AN OBJECT!');
