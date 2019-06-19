let game={min:0,max:10};

document.addEventListener("DOMContentLoaded", function(){

	console.log("Ready");
	game.output = document.querySelector(".output");
	game.message = document.querySelector(".message");
	game.guessInput = document.querySelector("input");
	game.btn = document.querySelector("button");
	game.btn.addEventListener("click",guessValue);
	init();

})

function guessValue(){
	if(game.btn.classList.contains("replay"))
	{
		init();
		game.btn.innerHTML = "Guess";
		game.guessInput.style.display = "block";
		game.btn.classList.remove("replay");
	}
	else{
	game.guesses++;
	let tempGuess = game.guessInput.value;
	game.guessInput.value = "";
	tempGuess = parseInt(tempGuess);
	if(tempGuess === game.num){
		message("Your Guessed correct "+game.num+" in "+game.guesses+" guesses.",'green');
		gameOver();
	}
	else{
		let holder = tempGuess>game.num?{"c":"blue","m":"Was lower"}:{"c":"purple","m":"Was higher"};
		message(holder.m, holder.c);
	}
	console.log("Your guess is "+game.num);
	console.log("Your guess is "+tempGuess);
}
}

function ranNumber(min, max){
	return Math.floor(Math.random()*(max-min+1)+min);
}

function init(){
	game.guesses = 0;
	game.num = ranNumber(game.min, game.max);
	let tempMes ="Welcome to the Game. Guess a number From "+game.min+" to "+game.max;
	message(tempMes,"blue");

}

function message(msg, clr){
	game.message.innerHTML = msg;
	game.message.style.color = clr || "black";
}


function gameOver(){
	game.btn.innerHTML = "Restart Game";
	game.guessInput.style.display = "none";
	game.btn.classList.add("replay");
	game.max+=5;

}