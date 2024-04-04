import { SingleTileValue, PairValues } from './utils';

export interface TileInterface {
	name: string; // non-unique string that matches image name.
	description: string; // Used for the Alt attribute for Images
	value: SingleTileValue; // will use baccarat counting. GeeJoon can be either 3, 6.
	rankValue: number; // individual tile rank / highest[16....1] lowest
	pairValue: PairValues; // pair rank, also used as id when matching with pair tile
	pairSplit?: {
		high: number
		low: number
	} // the minimum low and high hand values that pair will split for [low, high]
}

export const deck: TileInterface[] = [
	//High Tiles
	{ name: "geejoon3", description: "Gee Joon (Saam)", value: 3, rankValue: 1, pairValue: 116, pairSplit: { low: 7, high: 9} }, // 0
	{ name: "geejoon6", description: "Gee Joon (Luk)", value: 3, rankValue: 1, pairValue: 116, pairSplit: { low: 7, high: 9} }, // 1
	{ name: "teen", description: "Teen", value: 12, rankValue: 16, pairValue: 115, pairSplit: { low: 6, high: 8} }, // 2
	{ name: "teen", description: "Teen", value: 12, rankValue: 16, pairValue: 115, pairSplit: { low: 6, high: 8} }, // 3
	{ name: "day", description: "Day", value: 12, rankValue: 15, pairValue: 114, pairSplit: { low: 6, high: 8} }, // 4
	{ name: "day", description: "Day", value: 12, rankValue: 15, pairValue: 114, pairSplit: { low: 6, high: 8} }, // 5
	{ name: "high8", description: "High 8 (Yun)", value: 8, rankValue: 14, pairValue: 113, pairSplit: { low: 7, high: 9} }, // 6
	{ name: "high8", description: "High 8 (Yun)", value: 8, rankValue: 14, pairValue: 113, pairSplit: { low: 7, high: 9} }, // 7
	{ name: "high4", description: "High 4 (Gor)", value: 4, rankValue: 13, pairValue: 112 }, // 8
	{ name: "high4", description: "High 4 (Gor)", value: 4, rankValue: 13, pairValue: 112 }, // 9
	//Symmetric tiles
	{ name: "high10", description: "High 10 (Mooy)", value: 10, rankValue: 12, pairValue: 111 }, // 10
	{ name: "high10", description: "High 10 (Mooy)", value: 10, rankValue: 12, pairValue: 111 }, // 11
	{ name: "high6", description: "High 6 (Chong)", value: 6, rankValue: 11, pairValue: 110 }, // 12
	{ name: "high6", description: "High 6 (Chong)", value: 6, rankValue: 11, pairValue: 110 }, // 13
	{ name: "low4", description: "Low 4 (Bon)", value: 4, rankValue: 10, pairValue: 109 }, // 14
	{ name: "low4", description: "Low 4 (Bon)", value: 4, rankValue: 10, pairValue: 109 }, // 15
	//Half Symmetric tiles
	{ name: "eleven", description: "11 (Foo)", value: 11, rankValue: 9, pairValue: 108 }, // 16
	{ name: "eleven", description: "11 (Foo)", value: 11, rankValue: 9, pairValue: 108 }, // 17
	{ name: "low10", description: "Low 10 (Ping)", value: 10, rankValue: 8, pairValue: 107 }, // 18
	{ name: "low10", description: "Low 10 (Ping)", value: 10, rankValue: 8, pairValue: 107 }, // 19
	{ name: "high7", description: "High 7 (Tit)", value: 7, rankValue: 7, pairValue: 106, pairSplit: { low: 7, high: 7} }, // 20
	{ name: "high7", description: "High 7 (Tit)", value: 7, rankValue: 7, pairValue: 106, pairSplit: { low: 7, high: 7} }, // 21
	{ name: "low6", description: "Low 6 (Look)", value: 6, rankValue: 6, pairValue: 105 }, // 22
	{ name: "low6", description: "Low 6 (Look)", value: 6, rankValue: 6, pairValue: 105 }, // 23
	//Mixed pairs
	{ name: "red9", description: "Red 9 (Gow)", value: 9, rankValue: 5, pairValue: 104 }, // 24
	{ name: "white9", description: "White 9 (Gow)", value: 9, rankValue: 5, pairValue: 104 }, // 25
	{ name: "low8", description: "Low 8 symmetric (Bot)", value: 8, rankValue: 4, pairValue: 103, pairSplit: { low: 7, high: 9} }, // 26
	{ name: "low8slant", description: "Low 8 slant (Bot)", value: 8, rankValue: 4, pairValue: 103, pairSplit: { low: 7, high: 9} }, // 27
	{ name: "red7", description: "Low 7 red (Chut)", value: 7, rankValue: 3, pairValue: 102, pairSplit: { low: 7, high: 7} }, // 28
	{ name: "white7", description: "Low 7 white (Chut)", value: 7, rankValue: 3, pairValue: 102, pairSplit: { low: 7, high: 7} }, // 29
	{ name: "red5", description: "Red 5 (Ng)", value: 5, rankValue: 2, pairValue: 101 }, // 30
	{ name: "white5", description: "White 5 (Ng)", value: 5, rankValue: 2, pairValue: 101 } // 31
]


/* 

not working hands:
gj, low10, h6, l7
h6, 9, 10, gj
gj, 4, 5, 6
gj, 4, 9, 11
*/
