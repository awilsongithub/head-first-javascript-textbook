/*
===========================================================
GAME IDEAS TO DEVELOP FROM THIS?
TODO combine this with bootflix to create movie trivia game

UNSOLVED PROBLEMS
TODO to be able to toggel blur off adn on with click
    i can change image.class to focused but it doesn't stick
    still gets class from dom element and it's cunchanged
    so another way to track if blurred or focused is wiwth a set of
    variables for each image based on their id
===========================================================

*/

// assign handler to onload property of window object
// register handler to onclick, onmouseover, onmouseout properties of all imgs in document using loop. Image is a NodeList (array-like) so iterate each item
window.onload = function() {
    var image = document.getElementsByTagName("img");
    for (var i = 0; i < image.length; i++ ) {
        // assign reference not function expression if > 1 line function.
        // image[i].onclick = showOnClick;
        image[i].onmouseover = showOnMouseOver;
        image[i].onmouseout = reblurOnMouseOut;
    }
    var counterDisplayButton = document.getElementById('counter-button');
    // call function which returns closure of incrementer f. and count variable and assign it to new variable, then register that variable to the onclick property of counterButton
    var incrementCounter = makeCountUpdate();
    counterDisplayButton.onclick = incrementCounter;
}

// function to create handler closure with function to increment and display count in message-area
function makeCountUpdate() {
    var count = 0;
    var message = "Times button has been clicked: ";
    var div = document.getElementById('message-area');
    function incrementCount() {
        count++;
        div.innerHTML = message + count;
    }
    return incrementCount; // will return as a closure (with its environment)
}

// clear/blur using css class get and setAttribute 
function showOnMouseOver(eventObj) {
    var image = eventObj.target;
    var name = image.getAttribute("class");
    console.log(name);
    name = "clear";
    image.setAttribute("class", name);
}

// clear/blur using css class
function reblurOnMouseOut(eventObj) {
    var image = eventObj.target;
    var name = image.getAttribute("class");
    console.log(name);
    name = "blurred";
    image.setAttribute("class", name);
}

// the handler always gets passed the event object
// get objects target property which is the element in the event object
// function showOnClick(eventObj) {
//     var image = eventObj.target;
//     console.log('showAnswer called.');
//     var name = image.id; // ie zero
//     name = "media/" + name + ".jpg";
//     image.src = name;
//     setTimeout(reblur, 4000, image); // setTimeout passing image argument
// }
//
// function reblur(image){
//     var name = image.id; // ie zero
//     name = "media/" + name + "blur.jpg";
//     image.setAttribute("src", name);
// }

// clear/blur using img src
// function showOnMouseOver(eventObj) {
//     var image = eventObj.target;
//     var name = image.id; // ie zero
//     name = "media/" + name + ".jpg";
//     image.src = name;
// }

// clear/blur using img src
// function reblurOnMouseOut(eventObj){
//     var image = eventObj.target;
//     var name = image.id; // ie zero
//     name = "media/" + name + "blur.jpg";
//     image.setAttribute("src", name);
// }
