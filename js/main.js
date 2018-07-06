var question = [ {

	question: "what is 2 + 2 ?",
	answer: 2
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

for( var i = 0; i < question.length; i++) {
	var qeustion = question[i].question;

	var el = document.getElementById('question' + [i]);


	console.log(question, el);



}