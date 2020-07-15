const words = require('an-array-of-english-words');
const bodyParser = require('body-parser')
const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http');

const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const suffixes = ['','ae','a','u'];
const vowels = ['a','o','u','i','e'];
app.use(cors());
app.use(bodyParser.json());

var newWords = (function getNewWords(words){
	function getPhonics(str){
		var res = [];
		for(var i in str){
			if(str[i] === str[i-1]){
				res[res.length-1].push(str[i]);
			}
			else{
				res.push([]);
				res[res.length-1].push(str[i]);
			}
		}
		return res;
	}


	var res = [];
	var letters = [0,0,0,0];
	var resObj = {};

	for(var word of words){
		let translated = letters.map(letter => alphabet[letter]).join('');
		var pronouncePre = getPhonics(translated).map((phonic) => {
			if(phonic[0] === suffixes[phonic.length-1]){
				return phonic[0];
			}
			return phonic[0] + suffixes[phonic.length-1];
		});
		var pronounce = [];	
		for(var i = 0; i < pronouncePre.length; i++){
			

			var isVowel = Boolean(vowels.indexOf(pronouncePre[i])+1);
			var isVowelNext = Boolean(vowels.indexOf(pronouncePre[i+1])+1);
			
			pronounce.push(pronouncePre[i]);
			if(!pronouncePre[i+1]){
				break;
			}
			if(isVowel && isVowelNext){
				pronounce.push('-');
			}
			if(!isVowel && !isVowelNext){
				pronounce.push('i');
			}	
		}	
		pronounce = pronounce.join('');	

		res.push({word, translated, pronounce});
		resObj[word] = translated;
		letters[0]++;
		var addNextLetter = false;
		letters = letters.map((letter) => {
			if(addNextLetter){
				letter++;
			}	
			if(letter > 25){
				letter = 0; 
				addNextLetter = true;
			}
			else{
				addNextLetter = false;
			}
			return letter;
		});
	}
	return {res, resObj};
})(words);

console.log(newWords);
app.get('/words', (req, res) => {
	return res.json(newWords.res);
}); 
app.get('/wordsObj', (req, res) => {
	return res.json(newWords.resObj);
});

http.createServer(app).listen(3000, ()=> {
	console.log('Server running on port 3000');
});