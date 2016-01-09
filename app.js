var answer1 = document.getElementById('resultOne');
var answer2 = document.getElementById('resultTwo');
var answer3 = document.getElementById('resultThree');
var answer4 = document.getElementById('resultFour');
var answer5 = document.getElementById('resultFive');
var total = document.getElementById('total');

var questArray = [
  [
    ' Am I from Seattle? Please answer with "Y" or "N"',
    'Y',
    'YES',
    'You are correct!',
    'Sorry you are wrong, I am from Seattle.'
  ],
    [
    'Was I born in Germany? Please answer with "Yes" or "No"',
    'Y',
    'YES',
    'You are correct, I was born in Wiesbaden Germany',
    'I\'m sorry, that is incorrect'
  ],
    [
    'Have I ever seen Star Wars? Please answer with "Y" or "N"',
    'Y',
    'YES',
    'You are wrong, I am the last one that hasn\'t seen it.',
    'That\'s right, I have not seen Star Wars.'
    ]
  ]

var user = prompt("What is your name?");
console.log('The user\'s name is ' + user);
var counter = 0;

function firstQuestion() {
  var answer1 = prompt(questArray[0][0]);

  if (answer1.toUpperCase() === questArray[0][1]|| answer1.toUpperCase() === questArray[0[2]]) {
    resultOne.textContent = questArray[0][3];
    resultOne.className = 'right';
    counter += 1;
  } else {
    resultOne.textContent = questArray[0][4];
    resultOne.className = 'wrong';
  }
}

function secondQuestion() {
  var answer2 = prompt(user + questArray[1][0]);

  if (answer2.toUpperCase() === questArray[1][1] || answer2.toUpperCase() ===  questArray[1][2]) {
    resultTwo.textContent = questArray[1][3];
    resultTwo.className = 'right';
    counter += 1;
  } else {
    resultTwo.textContent = questArray[1][4];
    resultTwo.className = 'wrong';
  }
}
function thirdQuestion() {
  var answer3 = prompt(questArray[2][0]);
  if (answer3.toUpperCase() === questArray[2][1] || answer3.toUpperCase() ===  questArray[2][2] ) {
      resultThree.textContent = questArray[2][3];
      resultThree.className = 'right';
  } else {
      resultThree.textContent = questArray[2][4];
      resultThree.className = 'wrong';
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
