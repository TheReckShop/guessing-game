var user = prompt("What is your name?");
console.log('The user\'s name is ' + user);

alert('Hi there, ' + user + ', I am going to ask you a few questions about myself.');

var answer1 = prompt(user +', Am I from Seattle? Please answer with "Y" or "N"');

if (answer1 === 'Y') {
  alert('You are correct!');
} else {
  alert('Sorry you are wrong, I am from Seattle.');
}

var answer2 = prompt(user + ', Was I born in Germany? Please answer with "Y" or "N"');

if (answer2 === 'Y') {
  alert('You are correct, I was born in Wiesbaden Germany');
} else {
  alert('I\'m sorry, that is incorrect.');
}

var answer3 = prompt(user + ', Have I ever seen Star Wars? Please answer with "Y" or "N"');

if (answer3 === 'Y') {
  alert('You are wrong, I am the last one.');
} else {
  alert('That\'s right, I have not seen Star Wars.')
}

var number = 5;
var answer4 = prompt('I\'m thinking of a number 1 through 10, see if you can guess which number it is.');

if (answer4 == 5) {
  alert('Good work!');
}
while (answer4 != 5) {
if (answer4 <= 4) {
  alert('You are too low, guess higher.');
} else if (answer4 >= 6) {
  alert('You are too high, guess lower.');
}
var answer4 = prompt('I\'m thinking of a number 1 through 10, see if you can guess which number it is.');
}
alert('Good work!');
