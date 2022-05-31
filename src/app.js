/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  document.querySelector("#excuse").innerHTML = generateExcuse;
  console.log("Hello Rigo from the console! " + randomNumber);
};

let generateExcuse = function() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoindex = Math.floor(Math.random() * who.length) + 1;
  let actionindex = Math.floor(Math.random() * action.length) + 1;
  let whatindex = Math.floor(Math.random() * what.length) + 1;
  let whenindex = Math.floor(Math.random() * when.length) + 1;

  return (
    who[whoindex] +
    "" +
    action[actionindex] +
    "" +
    what[whatindex] +
    "" +
    when[whenindex]
  );
};
