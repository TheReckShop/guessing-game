
var counter = 0
var user = prompt("What is your name?");
console.log('The user\'s name is ' + user);

alert('Hi there, ' + user + ', I am going to ask you a few questions about myself.');

var answer1 = prompt(user +', Am I from Seattle? Please answer with "Y" or "N"');

if (answer1 === 'Y' || answer1 === 'y' || answer1 === 'yes' || answer1 === 'YES') {
  alert('You are correct!');
  counter += 1
} else {
  alert('Sorry you are wrong, I am from Seattle.');

}

var answer2 = prompt(user + ', Was I born in Germany? Please answer with "Y" or "N"');

if (answer2 === 'Y' || answer2 ===  'y' || answer2 ===  'yes' || answer2 ===  'YES') {
  alert('You are correct, I was born in Wiesbaden Germany');
  counter =+ 1;
} else {
  alert('I\'m sorry, that is incorrect.');
}

var answer3 = prompt(user + ', Have I ever seen Star Wars? Please answer with "Y" or "N"');

if (answer3 === 'Y' || answer3 ===  'y' || answer3 ===  'yes' || answer3 ===  'YES') {
  alert('You are wrong, I am the last one.');
} else {
  alert('That\'s right, I have not seen Star Wars.')
  counter += 1
}

var number = 5;
var answer4 = prompt('I\'m thinking of a number 1 through 10, see if you can guess which number it is.');

if (answer4 == 5) {
  alert('Good work!');
  counter += 1
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
