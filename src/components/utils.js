//utility functions
//generatesf new hand

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
// 