import {deck, TileInterface} from '../_lib/deck';

export type NumOfHands = 1 | 2 | 3 | 4 | 5 | 6 |7 | 8;
export type SingleTileValue = 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type NumericTileSetValue = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type TileSetValues = null | NumericTileSetValue | "gong" | "wong" | "pair";

export type HandValues = {
    high: TileSetValues,
    low: TileSetValues
}


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
export const determineHighLowHand = (hand1: TileInterface[], hand2: TileInterface[]): HandValues => {
    const hand1Value = solveTwoTiles(hand1[0], hand1[1])!;
    const hand2Value = solveTwoTiles(hand2[0], hand2[1])!;
    if ( hand1Value > hand2Value ) {
        return {
            high: hand1Value,
            low: hand2Value
        }
    }
    else {
        return {
            high: hand2Value,
            low: hand1Value
        }
    }
}

export const solveTwoTiles = (tile1: TileInterface, tile2: TileInterface): TileSetValues => {
    return getBaccaratScore(tile1.value, tile2.value)
}

export const getBaccaratScore = (num1: SingleTileValue, num2: SingleTileValue): NumericTileSetValue => {
    // TypeScript infers that the result will be of type number, (not NumericTileSetValue) 
    // which is the union of all possible numeric values.
    return (num1 + num2) % 10 as NumericTileSetValue;
}

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