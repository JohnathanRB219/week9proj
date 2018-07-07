var questions = [ 
{

	question: "what is 2 + 2 ?",
	answer: 4
},
{
	question: "what is the square root of 81 ?",
	answer: 9
},
{
	question: "what is 8 * 9 ?",
	answer: 72

},
{
	question: " what is 36 / 6 ?",
	answer: 6
},
{
	question: "what is 11 * 8 + 81 - 5 ?",

	answer: 164
},
]

for (var i = 0; i < questions.length; i++) {
	
	var question = questions[i].question;

	var el = document.getElementById('question' + [i]);


	console.log(question,el);

	el.textContent = question;

}

function checkResults() {

	var correct = 0;


	var incorrect = 0;



	for(var i = 0; i < questions.length; i++) {

		var answer = questions[i].answer;

		var guess = document.getElementById('answer' + [i]).value;

		console.log(guess);

		var questionSpot = document.getElementById('question' + [i]);


		if(answer == guess) {

			questionSpot.idName = 'correct';

			correct++;

		} else{

			questionSpot.idName = 'incorrect';

			incorrect++;
		};
	};


	document.getElementById('correct').textContent = correct;
	document.getElementById('incorrect').textContent = incorrect;

}

