function guessingGame() {

var answer1 = document.getElementById('resultOne');
var answer2 = document.getElementById('resultTwo');
var answer3 = document.getElementById('resultThree');
var answer4 = document.getElementById('resultFour');
var answer5 = document.getElementById('resultFive');
var answer6 = document.getElementById('resultSix')
var total = document.getElementById('total');

var user = prompt("What is your name?");
console.log('The user\'s name is ' + user);
var counter = 0;

function firstQuestion() {
  var answer1 = prompt(user +', Am I from Seattle? Please answer with "Y" or "N"');

  if (answer1.toUpperCase() === 'Y'|| answer1.toUpperCase() === 'YES') {
    resultOne.textContent = 'You are correct!';
    counter += 1;
  } else {
    resultOne.textContent = 'Sorry you are wrong, I am from Seattle.';
  }
}

function secondQuestion() {
  var answer2 = prompt(user + ', Was I born in Germany? Please answer with "Yes" or "No"');

  if (answer2.toUpperCase() === 'Y' || answer2.toUpperCase() ===  'YES') {
    resultTwo.textContent = 'You are correct, I was born in Wiesbaden Germany';
    counter =+ 1;
  } else {
    resultTwo.textContent = 'I\'m sorry, that is incorrect';
  }
}

function thirdQuestion() {
  var answer3 = prompt(user + ', Have I ever seen Star Wars? Please answer with "Y" or "N"');
  if (answer3.toUpperCase() === 'Y' || answer3.toUpperCase() ===  'YES' ) {
      resultThree.textContent = 'You are wrong, I am the last one that hasn\'t seen it.';
  } else {
      resultThree.textContent = 'That\'s right, I have not seen Star Wars.';
      counter += 1;
  }
}

function fourthQuestion() {
  var number = 5;
  var answer4 = prompt('I\'m thinking of a number 1 through 10, see if you can guess which number it is.');

  if (answer4 == 5) {
    counter += 1;
  }
  while (answer4 != 5) {
    if (answer4 <= 4) {
      resultFour.textContent = 'You are too low, guess higher.';
    } else if (answer4 >= 6) {
      resultFour.textContent = 'You are too high, guess lower.';
    }
    var answer4 = prompt('I\'m thinking of a number 1 through 10, see if you can guess which number it is.');
  }
    resultFour.textContent = 'Good work!';
}

function fifthQuestion() {

  var answer5 = prompt('Are The Meters the greatest band ever? Please answer "Y" or "N"');

  if (answer5.toUpperCase() == "Y" || answer5.toUpperCase() == 'YES') {
    resultFive.textContent = 'That\'s right, ' + user + ' The Meters are the greatest band ever!';
    counter += 1;
  } else {
    resultFive.textContent = 'I\'m sorry, but you\'re crazy!';
  }
}

firstQuestion();
secondQuestion();
thirdQuestion();
fourthQuestion();
fifthQuestion();

total.textContent = 'You got ' + counter + ' questions correct, nice work ' + user;
console.log(counter);
}

//guessingGame();


function sixthQuestion() {

  var fruits;
  fruits = ['apple', 'banana', 'orange', 'grapes']
  //var arrayLength = fruits.length;

  var answer6 = prompt('What is my favorite fruit? Please answer apple, banana, orange, or grapes?');

  if (answer6.toLowerCase() == fruits[0]) {
    resultSix.textContent = 'That\'s right, it\'s hard to beat a crisp apple in the summer heat!';
  } else {
    alert('While delicious, I\'m sorry to say it\'s not my favorite fruit, try again you\'ll get it!');
  };
}

//sixthQuestion();


function seventhQuestion() {

  var fruits;
  fruits = ['apple', 'banana', 'orange', 'grapes'];

  var answer7 = prompt('What is my favorite fruit? Please answer apple, banana, orange, or grapes?');

  switch (answer7) {

    case 'apple':
      alert('That\'s right, it\'s hard to beat a crisp apple in the summer heat!');
      break;

    case 'banana':
    alert('While good, bananas are not my favorite.');
    break;

    case 'orange':
    alert('While good, oranges are not my favorite.');
    break;

    case 'grapes':
    alert('While good, grapes are not my favorite.');
    break;
  };
}
//seventhQuestion();
