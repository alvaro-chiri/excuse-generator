/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  var randomNumber = Math.floor(Math.random() * 10) + 1;
  document.querySelector("#excuse").innerHTML = generateExcuse();
};

var generateExcuse = function() {
  var who = ["The dog", "My grandma", "His turtle", "My bird"];
  var action = ["ate", "peed", "crushed", "broke"];
  var what = ["my homework", "the keys", "the car"];
  var when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  var whoindex = Math.floor(Math.random() * who.length);
  var actionindex = Math.floor(Math.random() * action.length);
  var whatindex = Math.floor(Math.random() * what.length);
  var whenindex = Math.floor(Math.random() * when.length);

  return (
    who[whoindex] +
    " " +
    action[actionindex] +
    " " +
    what[whatindex] +
    " " +
    when[whenindex]
  );
};
