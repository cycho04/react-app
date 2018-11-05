//utility functions
//generatesf new hand

export function houseWay() {
    console.log('House way');
}

//
//============================
//copied from PG-tiles repo/github.
//converting to React Project.
//============================
//


// //disables hw btn
// const disable = (btn) => {
// 	btn.disabled = true;
// }

// // enables hw btn
// const enable = (btn) => {
// 	btn.disabled = false;
// }

// //needs work.
// const exceptions = (hand) => {
	
// 	return false;
// }

// //baccarat counting
// const baccaratCount = (n, m) => {
// 	let number = n + m;
// 	if (number >= 10 && number < 20){
// 		return number -= 10;
// 	} 
// 	else if (number >= 20) {
// 		return number -= 20;
// 	} 
// 	else {
// 		return number;
// 	}
// }

// //geejoon in progess
// function whichGJ(index) {
// 	let baby = 0,
// 		six = 0,
// 		number = 0,
// 		big = 0;
// 		for (let i = 0; i < hand.length; i++){
// 			if (hand[i].realValue === 4 || hand[i].realValue === 5){
// 				baby += 1;
// 			}
// 			else if (hand[i].realValue === 6){
// 				six += 1;
// 			}
// 			else if (hand[i].realValue >= 7 && hand[i].realValue <= 9){
// 				number += 1;
// 			}
// 			else if (hand[i].realValue >= 10){
// 				big += 1;
// 			}
// 		}
// 		//
// 		switch(big){
// 			case 1:
// 				//code
// 				break;
// 			case 2:
// 				//nothing because it behaves the same as 3 big.
// 			case 3:
// 				hand[index].val = 6;
// 				hand[index].realValue = 6;
// 				break;
// 			default:
// 				console.log("nothing found");
// 		}
// 	return false;
// }

// //check for pairs
// function checkPair() {
// 	//loops through each hand
// 	for(let i = 0; i < hand.length; i++) {
// 		//compares i to ii
// 		for (let ii = 0; ii < hand.length; ii++) {
// 			// if there is a pair and its not comparing to itself.
// 			if (hand[i].pair === hand[ii].pair && i != ii) {
// 				//if we split this pair...
// 				if (hand[i].split != false) {
// 					split(i, ii);
// 					return true;
// 				}
// 				else { 
// 					dontSplit(i, ii);
// 					return true;
// 				}
// 			}
// 		}
// 	}
// 	return false; //no pairs
// }

// const intoHighLow = (n, n2) => {
// 	//pushes the pairs into high[].
// 	high.push(hand[n]);
// 	high.push(hand[n2]);
// 	//deletes one
// 	hand.splice(n, 1);
// 	//search for 2nd pair's index since hand.length changes after splice above.
// 	for (let i = 0; i < hand.length; i++){
// 		if (hand[i].pair === high[0].pair){
// 			//deletes the second pair
// 			hand.splice(i, 1);
// 			//sends remaining tile pairs into a new array low.
// 			low.push(hand[0]);
// 			low.push(hand[1]);
// 		}
// 	}
// 	return true;
// }

// function dontSplit(n, n2) {
// 	intoHighLow(n, n2)
// 	moveTiles();
// 	return true;
// }

// function split(n, n2) {
// 	//separates hand into high and low.
// 	intoHighLow(n, n2);

// 	//Gee Joon
// 	if (high[0].pair === 1) {
// 		//one of the pair tiles with the other tiles.
// 		var combo1 = baccaratCount(high[0].val[0], low[0].val);
// 		var combo2 = baccaratCount(high[0].val[0], low[1].val);
// 		//if it meets the split requirements...
// 		if((combo1 >= 7 && combo2 >= 9) || (combo1 >= 9 && combo2 >= 7)){
// 			moveTiles("split");
// 			return true;
// 		} else {
// 			moveTiles();
// 			return
// 		}
// 	//Teen/Dey
// 	} else if(high[0].val === 2) {
// 		var combo1 = baccaratCount(high[0].val, low[0].val);
// 		var combo2 = baccaratCount(high[0].val, low[1].val);
// 		//checks if any of the tiles are 7,8, or 9. for 9 gong and wong.
// 		var check7_9 = low[0].val >= 7 && low[0].val <= 9;
// 		var check7_9_2 = low[1].val >= 7 && low[1].val <= 9;
// 		//regular 6-8 split rule.
// 		if((combo1 >= 6 && combo2 >= 8) || (combo1 >= 8 && combo2 >= 6)){
// 			moveTiles("split");
// 			return true;
// 			//we might have 7,8,9 with T/D. (with 8 and 9, it turns to 0 and 1, so we need this part.)
// 		} else if (check7_9 === true || check7_9_2 === true){
// 			//if both are 7,8, or 9
// 			if (check7_9 === check7_9_2){
// 				moveTiles("split");
// 				return true;
// 				//only if 1..
// 			} else if (check7_9 === true && check7_9_2 === false){
// 				if (low[1].val >= 3 && low[1].val <=6){
// 					moveTiles("split");
// 					return true;
// 				} else {
// 					moveTiles();
// 					return true;
// 				}
// 				//if other one...
// 			} else{
// 				if (low[0].val >= 3 && low[0].val <=6){
// 					moveTiles("split");
// 					return true;
// 				} else {
// 					moveTiles();
// 					return true;
// 				}
// 			}
// 		//does not split.
// 		} else {
// 			moveTiles();
// 			return;
// 	}
// 	} else {
// 		// all other pairs. split pairs are in one array with a length of 2. ex: [7, 9]
// 		var combo1 = baccaratCount(high[0].val, low[0].val);
// 		var combo2 = baccaratCount(high[0].val, low[1].val);
// 		if(combo1 >= high[0].split[0] && combo2 >= high[0].split[0]){
// 			moveTiles("split");
// 		} else {
// 			moveTiles();
// 		}
// 		return true;
// 	}
// }

// function checkTeen() {
// 	return false;
// }

// const ascendingOrder = () => {
// 	//switch placeholders
// 	let switch1 = "";
// 	let switch2 = "";
// 	//starts from [0] and applies the switch 4 times(first forloop does)
// 	for(let i = 0; i < hand.length; i++){
// 		for(let ii = 0; ii < hand.length; ii++) {
// 			//if it is not the last tile
// 			if(ii != hand.length - 1) {
// 				//compares the current tile its neighbor. if the current is bigger, switch with neighbor.
// 				if(hand[ii].realValue > hand[ii+1].realValue){
// 					switch1 = hand[ii];
// 					switch2 = hand[ii+1];
// 					hand[ii] = switch2;
// 					hand[ii+1] = switch1;
// 				}
// 			}
// 		}
// 	}
// }

// function hiLow(){
// 	ascendingOrder();
// 	moveTiles("hilow");
// }

// //babies rule
// function checkBB(){
// 	ascendingOrder();
// 	//counts the types of tiles in hand[]
// 	let baby = 0;
// 	let number =0;
// 	let big = 0;

// 	for(let i = 0; i < hand.length; i++){
// 		//if its a baby (not including 6 as a baby)
// 		if (hand[i].realValue <= 5){
// 			baby += 1;
// 		}
// 		//if its a big tile
// 		else if (hand[i].realValue >= 10){
// 			big += 1;
// 		}
// 		//only temporary, due to incomplete GJ value. change to a simple else once it is resolved.
// 		else if (hand[i].realValue > 5 && hand[i].realValue < 10) {
// 			number += 1;
// 		}
// 	}

// 	//if we have 2 babies and 2 numbers
// 	if (baby == 2 && number == 2){
// 		moveTiles("asIs");
// 		return true;
// 	}
// 	//2 babies and 1 big and 1 number
// 	else if (baby == 2 && number == big){
// 		moveTiles("asIs");
// 		return true;
// 	}
// 	//if we have 2 babies and 2 big 
// 	else if (baby == 2 && big == 2){
// 		moveTiles("hilow");
// 		return true;
// 	}
// 	//need 3 babies rule
// }

// function reset() {
// 	//resets tilesSet from master array. Even after splice, it now has full deck again.
// 	tilesSet = [];
// 	for (let i = 0; i < master.length; i++) {
// 		tilesSet.push(master[i]);
// 	}
// 	low = [];
// 	high = [];
// }

// //moves the tiles visually on the webpage
// function moveTiles(x) {
// 	if (x === "split"){
// 		cards[0].src = low[0].img;
// 		cards[1].src = high[0].img;
// 		cards[2].src = low[1].img;
// 		cards[3].src = high[1].img;
// 	}
// 	else if (x === "hilow") {
// 		cards[0].src = hand[0].img;
// 		cards[1].src = hand[3].img;
// 		cards[2].src = hand[1].img;
// 		cards[3].src = hand[2].img;
// 	} 
// 	else if (x === "asIs") {
// 		cards[0].src = hand[0].img;
// 		cards[1].src = hand[1].img;
// 		cards[2].src = hand[2].img;
// 		cards[3].src = hand[3].img;
// 	} 
// 	else {
// 	cards[0].src = low[0].img;
// 	cards[1].src = low[1].img;
// 	cards[2].src = high[0].img;
// 	cards[3].src = high[1].img;
// 	}
// }