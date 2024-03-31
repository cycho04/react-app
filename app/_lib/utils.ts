import {deck, TileInterface} from '../_lib/deck';

export type NumOfHands = 1 | 2 | 3 | 4 | 5 | 6 |7 | 8;
export type SingleTileValue = 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type NumericTileSetValue = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Gong = 20;
type Wong = 21;
export type PairValues = 101 | 102 | 103 | 104 | 105 | 106 | 107 | 108 | 109 | 110 | 111 | 112 | 113 | 114 | 115 | 116;
type TileSetValues = null | NumericTileSetValue | Gong | Wong | PairValues;

export type HandValues = {
    high: TileSetValues,
    low: TileSetValues
}

/*
    Solving Hand Algo
    - Check for Pairs
    - Nine, Gong, Wong w/ Teen/Dey
    - Babies rule
    - Sook
    - High Low
*/


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

/*
    Solving Hand Algo
    - Check for Pairs
    - Nine, Gong, Wong w/ Teen/Dey
    - Babies rule
    - Sook
    - High Low
*/
// const solveFourTiles = (hand: TileInterface[]): TileInterface[] => {
//     const foundPair = checkForPairsIn4Tiles(hand);
//     if (foundPair){

//     }
//     else {

//     }
// }

// const checkForPairsIn4Tiles = (hand: TileInterface[]): TileInterface[] | false => {
//     const hand1: TileInterface[] = [];
//     const hand2: TileInterface[] = [];
//     let foundPair = false;

//     for(let i = 0; i < hand.length; i++){
//         for(let ii = i + 1; ii < hand.length; ii++){
//             if (hand[i].pairValue === hand[ii].pairValue) {
//                 hand1.push(hand[i], hand[ii]);
//                 foundPair = true;
//                 break;
//             }
//         }
//         if (foundPair) break;
//     }
//     if (foundPair){
//         hand.forEach((tile: TileInterface) => {
//             if (!hand1.indexOf(tile)) {
//                 hand2.push(tile);
//             }
//         })
//         return [...hand1, ...hand2]
//     }
//     else {
//         return false;
//     }
// }

export const determineHighLowHand = (hand1: TileInterface[], hand2: TileInterface[]): HandValues => {
    const hand1Value = solveTwoTiles(hand1[0], hand1[1])!;
    const hand2Value = solveTwoTiles(hand2[0], hand2[1])!;

    const result = hand1Value > hand2Value ? { high: hand1Value, low: hand2Value } : { high: hand2Value, low: hand1Value };

    return result;
}

export const solveTwoTiles = (tile1: TileInterface, tile2: TileInterface): TileSetValues => {
    const isPair = checkForPairs(tile1, tile2);
    if (isPair) return tile1.pairValue;
    const isGongOrWong = checkForGongOrWong(tile1, tile2);
    if (isGongOrWong) return (tile1.value + tile2.value) as TileSetValues;
    return getBaccaratScore(tile1.value, tile2.value)
}

export const checkForPairs = (tile1: TileInterface, tile2: TileInterface): boolean => {
    if (tile1.pairValue === tile2.pairValue) return true;
    return false;
}

export const checkForGongOrWong = (tile1: TileInterface, tile2: TileInterface): boolean => {
    const values = [tile1.value, tile2.value];
    if (values.includes(12) && (values.includes(8) || values.includes(9))) return true;
    return false;
}

export const getBaccaratScore = (num1: SingleTileValue, num2: SingleTileValue): NumericTileSetValue => {
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