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
window.onload = init;

function init() {
    // register handler to onclick, onmouseover, onmouseout properties of all imgs in document using loop. Image is a NodeList (array-like) so iterate each item
    var image = document.getElementsByTagName("img");
    for (var i = 0; i < image.length; i++ ) {
        image[i].onclick = showOnClick;
        image[i].onmouseover = showOnMouseOver;
        image[i].onmouseout = reblurOnMouseOut;
    }
} // end init

// the handler always gets passed the event object
function showOnClick(eventObj) {
    // get objects target property which is the element in the event object
    var image = eventObj.target;
    console.log('showAnswer called.');
    // var isItBlurred = image.getAttribute("class");
    // console.log(isItBlurred);
    var name = image.id; // ie zero
    name = "media/" + name + ".jpg";
    image.src = name;
    // setTimeout to reblur in 2 seconds, passing image argument
    setTimeout(reblur, 4000, image);
}

function reblur(image){
    var name = image.id; // ie zero
    name = "media/" + name + "blur.jpg";
    image.setAttribute("src", name);
}

function showOnMouseOver(eventObj) {
    var image = eventObj.target;
    var name = image.id; // ie zero
    name = "media/" + name + ".jpg";
    image.src = name;
}

function reblurOnMouseOut(eventObj){
    var image = eventObj.target;
    var name = image.id; // ie zero
    name = "media/" + name + "blur.jpg";
    image.setAttribute("src", name);
}


// FAILED EFFORT TO SETUP REBLUR
// if (isItBlurred === "blurred") {
//     console.log('class is blurred.');
//     var name = image.id; // ie zero
//     name = "media/" + name + ".jpg";
//     image.src = name;
//     image.class = "focused";
//     console.log(image.class);
//     return;
// }
// else if (isItBlurred === "focused") {
//     var name = image.id;
//     name = "media/" + name + "blur.jpg";
//     image.src = name;
//     image.class = "blurred";
//     return;
// }
