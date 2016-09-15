"use strict";
const CHOICE = ["rock", "scissor", "paper"]

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let myScore = 0;
let computerScore = 0;

var reset = () => {
	$("#computer").src = "image/icon-question-mark-white.png";
	$("#info").innerHTML = "choose your weapon!";
	$("#info").style.backgroundColor = "#95a5a6";
	$("#myScore").innerHTML = "you: " + myScore;
	$("#computerScore").innerHTML = "computer: " + computerScore;
};


var game = (id) => {
	let userChoice = CHOICE[id];
	console.log("you: " + userChoice);
	let computerChoice = CHOICE[Math.floor(Math.random() * 3)];
	console.log("computer: " + computerChoice);

	if (userChoice === computerChoice) {
		console.log("it is a tie");
		$("#info").innerHTML = "it is a tie, try again!";
		$("#computer").src = "image/icon-" + computerChoice + "-white.png";
		$("#info").style.backgroundColor = "#95a5a6";
		setTimeout(function () {reset();}, 2000);
	} else if (userChoice === "rock") {
		switch (computerChoice) {
			case 'paper':
				$("#computer").src = "image/icon-" + computerChoice + "-white.png";
				console.log("you lost");
				$("#info").innerHTML = "you lost, try again!";
				$("#info").style.backgroundColor = "#e74c3c";
				computerScore++;
				setTimeout(function () {reset();}, 2000);
				break;
			default:
				$("#computer").src = "image/icon-" + computerChoice + "-white.png";
				console.log("you won");
				$("#info").innerHTML = "great, you won!!!!";
				$("#info").style.backgroundColor = "#2ecc71";
				myScore++;
				setTimeout(function () {reset();}, 2000);
		}
	} else if (userChoice === "paper") {
		switch (computerChoice) {
			case 'scissor':
				$("#computer").src = "image/icon-" + computerChoice + "-white.png";
				console.log("you lost");
				$("#info").innerHTML = "you lost, try again!";
				$("#info").style.backgroundColor = "#e74c3c";
				computerScore++;
				setTimeout(function () {reset();}, 2000);
				break;
			default:
				$("#computer").src = "image/icon-" + computerChoice + "-white.png";
				console.log("you won");
				$("#info").innerHTML = "great, you won!!!!";
				$("#info").style.backgroundColor = "#2ecc71";
				myScore++;
				setTimeout(function () {reset();}, 2000);
		}
	} else {
		switch (computerChoice) {
			case 'rock':
				$("#computer").src = "image/icon-" + computerChoice + "-white.png";
				console.log("you lost");
				$("#info").innerHTML = "you lost, try again!";
				$("#info").style.backgroundColor = "#e74c3c";
				computerScore++;
				setTimeout(function () {reset();}, 2000);
				break;
			default:
				$("#computer").src = "image/icon-" + computerChoice + "-white.png";
				console.log("you won");
				$("#info").innerHTML = "great, you won!!!!";
				$("#info").style.backgroundColor = "#2ecc71";
				myScore++;
				setTimeout(function () {reset();}, 2000);
		}
	}
};