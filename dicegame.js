
// function diceRollPureFunction(){
// //need this function to repeat for multi-sided die
// }

// function myRoll(dieNumber){
// 	let randomNumber = Math.floor(Math.random() * dieNumber) +1;
// 	return randomNumber
// }
// console.log(myRoll(6));
// console.log(myRoll(8));
// console.log(myRoll(10));
// console.log(myRoll(12));
// console.log(myRoll(16));
// console.log(myRoll(20));
//_______^^_master random number generators^^^



let dieSideFour = {
	type: "Four-sided Die",
	sides: 4
	roll: roll1(){
		console.log(roll1(this.sides))
   		
	}
}

function roll1(n){
	let randomNumber1 = Math.floor(Math.random() * this.sides) +1;
   		return randomNumber1;
}
// console.log(dieSideFour.sides)

let dieSideSix = {
	type: "Six-sided Die",
	sides:6
	// roll: function roll2(numberOfSides){
 //   		let randomNumber1 = Math.floor(Math.random() * numberOfSides) +1;
 //   		return randomNumber1;
	// }
}
// console.log(dieSideSix.sides)

let dieSideEight = {
	type: "Eight-sided Die",
	sides:8
	// roll: function roll3(numberOfSides){
 //   		let randomNumber1 = Math.floor(Math.random() * numberOfSides) +1;
 //   		return randomNumber1;
	// }
}
// console.log(dieSideEight.sides)

let dieSideTen = {
	type: "Ten-sided Die",
	sides:10
	// roll: function roll4(numberOfSides){
 //   		let randomNumber1 = Math.floor(Math.random() * numberOfSides) +1;
 //   		return randomNumber1;
	// }
}
// console.log(dieSideTen.sides)

let dieSideTwelve = {
	type: "Twelve-sided Die",
	sides:12
	// roll: function roll5(numberOfSides){
 //   		let randomNumber1 = Math.floor(Math.random() * numberOfSides) +1;
 //   		return randomNumber1;
	// }
}
// console.log(dieSideTwelve.sides)

let dieSideTwenty = {
	type: "Twenty-sided Die",
	sides:20
	// roll: function roll6(numberOfSides){
 //   		let randomNumber1 = Math.floor(Math.random() * numberOfSides) +1;
 //   		return randomNumber1;
	// }
}
// console.log(dieSideTwenty.sides)

// function myRoll(numberOfSides){
// 	let randomNumber = Math.floor(Math.random() * numberOfSides) +1;
// 	return randomNumber
// }
// console.log(myRoll(dieSideSix.sides));
// console.log(myRoll(dieSideEight.sides));
// console.log(myRoll(dieSideTen.sides));
// console.log(myRoll(dieSideTwelve.sides));
// console.log(myRoll(dieSideTwenty.sides));

// //_______^^^MASTER RANDOM NUMBER GENERATORS AT FIXED NUMBER OF SIDES^^^

// function runGame() { // master function
// 	let dieNumber1 = myRoll(dieSideSix.sides);
// 	let dieNumber2 = myRoll(dieSideEight.sides);
// 	let dieNumber3 = myRoll(dieSideTen.sides);
// 	let dieNumber4 = myRoll(dieSideTwelve.sides);
// 	let dieNumber5 = myRoll(dieSideTwenty.sides);
// }

// ____________________________
// let diceHeld = [];
// master();

// function myRoll(numberOfSides){
// 	let randomNumber1 = Math.floor(Math.random() * numberOfSides) +1;
// 	 return randomNumber1;
// }



// function rollDice(){
// 	var text = "die roll: ";
// 	var i;
// 	do{
// 		i = myRoll(6);
// 		text += "The number is " + i ;
// 		console.log(text + " ");
// 		if(i == 2 || i == 5){
// 			break;
// 		}else{
// 		diceHeld.push(i);
// 	}
// 	}
// 	// while(i != 2 && i != 5)
	
// 	console.log("This is always 2 or 5: " +i)
	
// 	console.log(diceHeld);
// 	let reducer = diceHeld.reduce(function(total, el){
// 		return total += el;
// 	});
// 	console.log(reducer);
// }
//____________________________________
// console.log(diceHeld.reduce())
// diceHeld.reduce(getSum());
// console.log(diceHeld);



// function determineDicePerValuesDivisibleBy2or5(){
// 	//function for each individual die...AKA "die roll pure function";
// 	//need this function to read value of the die
// 	//write loop to read value of die
// 	//determine value of die if divisible by 2 or 5
// 	//if condition loop determines value is divisible by 2 or 5 then die is pulled from the die pool
// }

// function myRoll(numberOfSides1){
// 	let dieNumber1 = Math.floor(Math.random() * numberOfSides1) +1;
// 	let dieNumber2 = Math.floor(Math.random() * numberOfSides1) +1;
// 	let valueTotal = dieNumber1 + dieNumber2;

// console.log(myRoll(dieSideSix.sides));
// console.log(valueTotal(dieNumber1 + dieNumber2));

//__________________________________________
// function myRoll(numberOfSides){
// 	let randomNumber1 = Math.floor(Math.random() * numberOfSides) +1;
// 	 return randomNumber1;

// }
// console.log(myRoll(dieSideSix.sides) + myRoll(dieSideEight.sides) + myRoll(dieSideTen.sides) + myRoll(dieSideTwelve.sides) + myRoll(dieSideTwenty.sides));

//____________^^^SUCCESSFULLY ROLLS 5 DICE ALL MULTI-SIDED DIE^^^_______
//_____write a loop to test for all possible outcomes and confirm values 5 - 56 can be rolled;
//write conditions for six sided & 8 sided dies to play the game.
//when figured out, add die accordingly.
// function myRoll(numberOfSides){
// 	let randomNumber1 = Math.floor(Math.random() * numberOfSides) +1;
// 	 return randomNumber1;
// }
// console.log(myRoll(dieSideSix.sides));
// console.log(myRoll(dieSideSix.sides));


// function pullDieIfValueIsDivisibleBy2or5(){
// 	//function to remove die from dice pool if value is divisible by 2 or 5
// 	//this die is no longer rolled for the remainder of the game
// }



// function determineDiceValueIsNotDivisibleBy2or5(){
// 	//need this function to read value of each die
// 	//write loop to read value of die
// 	//determine value of die is NOT divisible by 2 or 5
// 	//condition loop to sum value of die if value is not divisible by 2 or 5
// }

// function sumDieValueIf(){
// 	//need this function to read value of each die
// 	//write loop to read value of die
// 	//determine value of die if divisible by 2 or 5
// 	//condition loop to sum value of die if value is not divisible by 2 or 5
// 	//condition only occurs if remaining rolled dice value is not divisible by 2 or 5
// 	//sum of die value is calculated and recorded, dice are rerolled;

// function endCondition(){
// 	//player continue rolling until all dice values are multiples of 2 or 5
// }

// function multiplayerConditions
// 	//win condition is now score vs score between users. 
// 	//Lowest score wins the game


// let heldDice = [0];
// rollDice1();
// // rollDice2();

// function roll1(numberOfSides){
//    let randomNumber1 = Math.floor(Math.random() * numberOfSides) +1;
//    return randomNumber1;
// }

// function rollDice1(){
//    let diceResult = roll1(12);
//    if(diceResult == 2 || diceResult == 5 || diceResult == 10)
//    {
//        DieFinished1();
//    }
//    else if (true) {
//    	(diceResult !=2 || diceResult != 5 || diceResult != 10);

//    	heldDice.push(diceResult);
//    	KeepRolling();
//    	// calcScore();
//    	rollDice1();
//    }
//    else{
//        heldDice.push(diceResult);
//        calcScore();
//        rollDice1();
//    }

// }

// function WinGame(){
//    calcScore();
//    console.log("You win!");

// }
// function KeepRolling(){
// 	calcScore();

// 	console.log("Keep Rolling!")
// }
// function DieFinished1(){
// 	calcScore();
// 	console.log("First die is out!")
// }

// function calcScore(){
//    let totalDice = heldDice.reduce(function(total, el){
//        return total += el;
//    });
//    console.log(totalDice);
// }

//_____________________________

// let button = document.getElementsById('button');

// button.onclick = roll1()
	



let heldDice = [0];
rollDice1();
// rollDice2();
// rollDice3();
// rollDice4();
// rollDice5();
// rollDice6();


function roll1(numberOfSides){
   let randomNumber1 = Math.floor(Math.random() * numberOfSides) +1;
   return randomNumber1;
}

function rollDice1(){
   let diceResult = roll1(4);
   if(diceResult == 2 || diceResult == 5 || diceResult == 10)
   {
       DieFinished1();
   }
   else if (true) {
    (diceResult !=2 || diceResult != 5 || diceResult != 10);

    heldDice.push(diceResult);
    KeepRolling();
    // calcScore();
    rollDice1();
   }
   else{
       heldDice.push(diceResult);
       calcScore();
       rollDice1();
   }
}

// function roll2(numberOfSides){
//    let randomNumber1 = Math.floor(Math.random() * numberOfSides) +1;
//    return randomNumber1;
// }

// function rollDice2(){
//    let diceResult = roll2(6);
//    if(diceResult == 2 || diceResult == 5 || diceResult == 10)
//    {
//        DieFinished2();
//    }
//    else if (true) {
//     (diceResult !=2 || diceResult != 5 || diceResult != 10);

//     heldDice.push(diceResult);
//     KeepRolling();
//     // calcScore();
//     rollDice2();
//    }
//    else{
//        heldDice.push(diceResult);
//        calcScore();
//        rollDice2();
//    }
// }
// function roll3(numberOfSides){
//    let randomNumber1 = Math.floor(Math.random() * numberOfSides) +1;
//    return randomNumber1;
// }

// function rollDice3(){
//    let diceResult = roll3(8);
//    if(diceResult == 2 || diceResult == 5 || diceResult == 10)
//    {
//        GameOver();
//    }
//    else if (true) {
//     (diceResult !=2 || diceResult != 5 || diceResult != 10);

//     heldDice.push(diceResult);
//     KeepRolling();
//     // calcScore();
//     rollDice3();
//    }
//    else{
//        heldDice.push(diceResult);
//        calcScore();
//        rollDice3();
//    }
// }

function WinGame(){
   calcScore();
   console.log("You win!");
}
function GameOver(){
	calcScore();
	console.log("All dice are out. Player with highest score loses! WAAAHWAAAAHHHHHH")
}
function KeepRolling(){
  calcScore();
  confirm("click to roll again")

  console.log("Keep Rolling!")
}
function DieFinished1(){
  calcScore();
  console.log("First die is out!")
  confirm("click to roll second dice")
}
// function DieFinished2(){
//   calcScore();
//   console.log("Second die is out!")
// }
// function DieFinished3(){
//   calcScore();
//   console.log("Third die is out!")
// }

function calcScore(){
   let totalDice = heldDice.reduce(function(total, el){
       return total += el;
   });
   console.log(totalDice);
}


