/* index.js */

var msg = "hello javascript";
console.log(msg);
var resultsDiv = document.getElementById("results");
resultsDiv.innerHTML = "<p>This is from javascript</p>";

var result = {
 name: "jQuery",
 language: "JavaScript",
 score: 4.5,
 showLog: function () {

 },
 owner: {
  login: "shawnwildermuth",
  id: 123456,
 }
}

result.phoneNumber = "123-456-7890"

console.log(result.phoneNumber);

var results = [{
   name: "Reactjs",
   language: "JavaScript",
   score: 2.5,
   showLog: function () {
   },
   owner: {
    login: "shawnwildermuth",
    id: 123456,
   }
  },{
   name: "jQuery UI",
   language: "JavaScript",
   score: 3.5,
   showLog: function () {
   },
   owner: {
    login: "shawnwildermuth",
    id: 123456,
   }
}];

results.push(result);

console.log(results);
/*
console.log("msg is " + typeof(msg));
console.log("resultsDiv is " + typeof(resultsDiv));

var none;

console.log("none is " + typeof(none));

var aNumber = 10;
console.log("aNumber is " + typeof(aNumber));

var trueFalse = true;

console.log("trueFalse is " + typeof(trueFalse));

msgs = "this shouldn't work"

if (!none) {
  console.log("none is undefined");
}

if (aNumber === "10") {
  console.log("10 is 10")
}

// function showMsg(msg) {
// console.log("showMsg " + msg);
// }

function showMsg(msg, more) {
  if(more) {
    console.log("showMsg+ " + msg + more);
  } else {
    console.log("showMsg+ " + msg);
  }
}

showMsg("some information")
showMsg("some information", " and even more");

var showIt = function(msg) {
 console.log(msg);
}

console.dir(showIt);

var showIt2 = function showIt3(msg) {
 console.log(msg);
}

showIt("Some message");
showIt2("Some message");
console.dir(showIt2);

function showItThen(msg, callback) {
  showIt(msg);
  callback();
}

showItThen("showItThen called", function() {
 console.log("callback called!");
});

var inGlobal = true;

function testMe() {
 console.log("testMe(): " + inGlobal);

 var someMsg = "some message";
 console.log("testMe(): " + someMsg);

 showItThen("with Clousure", function () {
  showIt("testMe With Clousure(): " + someMsg);
 });

}

// console.log("global: " + someMsg);
testMe();
*/
