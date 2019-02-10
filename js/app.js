'use strict';

var username = prompt('Welcome! Before I take you to my profile, Lets play a quick game. What is your name?');
console.log(username);

//Identify user
var user = prompt('Hi ' + username + ', I will be asking you random questions. Are you ready?');

if (user === 'Yes' || user === 'Yes'.toLowerCase() || user === 'Y'.toLowerCase() || user === 'Yes'.toUpperCase()) {
  console.log('Question 1');
  alert('Awesome! Lets get started.');
} else {
  alert('Ding! Ding! Ding! Wrong answer.');
}

var correctAnswers = [];

//First Question
var q1 = prompt('First question, this is going to test your math skills \nWhat is the sum of 1 + 1 - 1 + 1 - 1 + 1 - 1 - 1 + 1 + 1 - 1?');

if (q1 = '1') {
  console.log('if else');
  alert('1 + 1 - 1 + 1 - 1 + 1 - 1 - 1 + 1 + 1 - 1 = 1');
  correctAnswers.push('q1');
} else {
  alert('Wrong. The correct answer is 1');
}


//Second question
var q2 = prompt('Question dos: Can you dream and snore at the same time?');

if (q2 === 'No' || q2 === 'No'.toLowerCase() || q2 === 'N'.toLowerCase() || q2 === 'No'.toUpperCase()) {
  console.log('if else');
  alert('Thats correct! According to the research you cant snore and dream at the same time.');
  correctAnswers.push('q2');
} else {
  alert('Fun fact, you cant dream and snore at the same time.');
}

//Third Question
do {
  var q3 = prompt('Question tres: True or False. banging your head against a wall burns 150 calories an hour?');
} while (q3 === 'True' || q3 === 'True'.toLowerCase() || q3 === 'T'.toLowerCase() || q3 === 'True'.toUpperCase());
console.log('do whole workout');
alert('That is correct, banging your head against the wall can burn 150 calories an hour.');
correctAnswers.push('q3');

//Fourth Question
var q4 = prompt('Question four: True or False. A "buttload" is a real measurement of weight?');
if (q4 === 'True' || q4 === 'True'.toLowerCase() || q4 === 'T'.toLowerCase() || q4 === 'True'.toLowerCase()) {
  console.log('if else buttload');
  alert('That is correct, according to research "buttload" is a real weight measurement. ');
  correctAnswers.push('q4');
} else{
  alert('True! buttload is a real weight measurement according to reaserch.');
}

//Fifth Question
var q5 = prompt('Question five, who is the most awesome person in the galaxy? (Hint : Keith)');
while (q5 !== 'Keith') {
  q5 = prompt('Wrong, try again.(hint: Keith)');
}
alert('Nice one');
console.log('While Loop');
correctAnswers.push('q5');

//Sixth Question
var q6 = prompt('Can you guess how many countries I have been?');
for(var x = 3; x > 1; x--) {
    if (q6 > 6){
        var q6 = prompt ('lower..');
    } else if (q6 < 6) {
        var q6 = prompt ('higher..');
    } else if (q6 === '6') {
        alert('Ding! Ya got it');
        correctAnswers.push('q6');
        {break;}
    }else 
        prompt('try again');
}

//Seventh Question
var countries = ['Philippines', 'Hawaii', 'Japan', 'Korea', 'Guam', 'America'];
var q7 = prompt('I have been to 6 countries. Can you name the counties I\'ve been to?');
for(var y = 3; y >= 1; y--) {
  if (countries.indexOf(q7.toLowerCase()) >= 0) {
      var q7 = prompt('Yes! And?');
      correctAnswers.push('q7');
  } else{
      var q7 = prompt('No, try again..')
  }
}alert('The 6 countries I\'ve been to is posted on the bottom of my profile.')

alert('Thank you for taking the time answering the questions ' + username + '. Your got a total score of ' + correctAnswers.length + '.');