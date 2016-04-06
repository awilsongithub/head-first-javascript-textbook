window.onload = function() {
    // handling exceptions with try {} catch(error) {}
    try {
        var button = document.getElementById('test-button');
        button.onclick = function() {
            alert('button clicked');
        };
    } catch (error) {
        console.log('Error:' + error.message);
    }
};

// JQUERY //
$(document).ready(function(){
    alert('Jquery in the house!');
});

// I'm the  "arguments" object and I'm there for you no matter what!
function noParams() {
    for (var i=0; i<arguments.length; i++) {
        console.log(arguments[i]);
    }
}
noParams('hamburger', 'hotdog');
window.confirm('OK or cancel?');

// .append() inserts content as last child element
$('h3').append('<p>Testing 1-2</p>');

$('#heading-h3').append("<p>Test</p>");
$('#heading-h3').append("<a href='#'>Test</a>");

// Regular Expressions are patterns you define then use with .match as a parameter
var areaCode = new RegExp(/^\d{3}/); // 3 digits at string start
var chicagoCodes = ['312', '773', '708', '847', 'XYZ'];

// should log 4 matches and one no match
for (var i = 0; i < chicagoCodes.length; i++) {
    if ( chicagoCodes[i].match(areaCode) ) {
        console.log('got a match.');
    } else {
        console.log('no match found');
    }
}

// JSON JAVASCRIPT OBJECT NOTATION
// like object syntax except 2 extra quotes rules: single around string and double around each property.
var jsonSample = '{ "name": "bob", "type": "sponge" }';
var jsObject = JSON.parse(jsonSample); // translate to JS object
console.log(jsObject);
var jsonSampleRemake = JSON.stringify(jsObject); // > back into JSON
console.log(jsonSampleRemake);
console.log(jsObject.name); // grab name property 
