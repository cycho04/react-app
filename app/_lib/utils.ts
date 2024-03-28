import {deck, TileInterface} from '../_lib/deck';

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
export const createHands = (numOfHands: number): TileInterface[][] => {
    if (!numOfHands) return [];
    const hands: TileInterface[][] = [];
    const usedTiles: number[] = [];

    for (let i = 0; i < numOfHands; i++){
        const hand: TileInterface[] = [];
        for (let j = 0; j < 4; j++) {
            let randomNumber = Math.floor(Math.random() * 32); // Random number between 0 and 31
            while(usedTiles.includes(randomNumber)){
                randomNumber = Math.floor(Math.random() * 32); // Random number between 0 and 31
            }
            hand.push(deck[randomNumber])
            usedTiles.push(randomNumber);
        }
        hands.push(hand)
    }
    return hands;
}