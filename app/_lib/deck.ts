import { SingleTileValue, PairValues } from './utils';

export interface TileInterface {
	name: string; // non-unique string that matches image name.
	description: string; // Used for the Alt attribute for Images
	value: SingleTileValue; // will use baccarat counting. GeeJoon can be either 3, 6.
	soloRank: number; // individual tile rank
	pairValue: PairValues; // pair rank, also used as id when matching with pair tile
}

export const deck: TileInterface[] = [
	//High Tiles
	{ name: "geejoon3", description: "Gee Joon (Saam)", value: 3, soloRank: 16, pairValue: 116 }, // 0
	{ name: "geejoon6", description: "Gee Joon (Luk)", value: 3, soloRank: 16, pairValue: 116 }, // 1
	{ name: "teen", description: "Teen", value: 12, soloRank: 1, pairValue: 115 }, // 2
	{ name: "teen", description: "Teen", value: 12, soloRank: 1, pairValue: 115 }, // 3
	{ name: "day", description: "Day", value: 12, soloRank: 2, pairValue: 114 }, // 4
	{ name: "day", description: "Day", value: 12, soloRank: 2, pairValue: 114 }, // 5
	{ name: "high8", description: "High 8 (Yun)", value: 8, soloRank: 3, pairValue: 113 }, // 6
	{ name: "high8", description: "High 8 (Yun)", value: 8, soloRank: 3, pairValue: 113 }, // 7
	{ name: "high4", description: "High 4 (Gor)", value: 4, soloRank: 4, pairValue: 112 }, // 8
	{ name: "high4", description: "High 4 (Gor)", value: 4, soloRank: 4, pairValue: 112 }, // 9
	//Symmetric tiles
	{ name: "high10", description: "High 10 (Mooy)", value: 10, soloRank: 5, pairValue: 111 }, // 10
	{ name: "high10", description: "High 10 (Mooy)", value: 10, soloRank: 5, pairValue: 111 }, // 11
	{ name: "high6", description: "High 6 (Chong)", value: 6, soloRank: 6, pairValue: 110 }, // 12
	{ name: "high6", description: "High 6 (Chong)", value: 6, soloRank: 6, pairValue: 110 }, // 13
	{ name: "low4", description: "Low 4 (Bon)", value: 4, soloRank: 7, pairValue: 109 }, // 14
	{ name: "low4", description: "Low 4 (Bon)", value: 4, soloRank: 7, pairValue: 109 }, // 15
	//Half Symmetric tiles
	{ name: "eleven", description: "11 (Foo)", value: 11, soloRank: 8, pairValue: 108 }, // 16
	{ name: "eleven", description: "11 (Foo)", value: 11, soloRank: 8, pairValue: 108 }, // 17
	{ name: "low10", description: "Low 10 (Ping)", value: 10, soloRank: 9, pairValue: 107 }, // 18
	{ name: "low10", description: "Low 10 (Ping)", value: 10, soloRank: 9, pairValue: 107 }, // 19
	{ name: "high7", description: "High 7 (Tit)", value: 7, soloRank: 10, pairValue: 106 }, // 20
	{ name: "high7", description: "High 7 (Tit)", value: 7, soloRank: 10, pairValue: 106 }, // 21
	{ name: "low6", description: "Low 6 (Look)", value: 6, soloRank: 11, pairValue: 105 }, // 22
	{ name: "low6", description: "Low 6 (Look)", value: 6, soloRank: 11, pairValue: 105 }, // 23
	//Mixed pairs
	{ name: "red9", description: "Red 9 (Gow)", value: 9, soloRank: 12, pairValue: 104 }, // 24
	{ name: "white9", description: "White 9 (Gow)", value: 9, soloRank: 12, pairValue: 104 }, // 25
	{ name: "low8", description: "Low 8 symmetric (Bot)", value: 8, soloRank: 13, pairValue: 103 }, // 26
	{ name: "low8slant", description: "Low 8 slant (Bot)", value: 8, soloRank: 13, pairValue: 103 }, // 27
	{ name: "red7", description: "Low 7 red (Chut)", value: 7, soloRank: 14, pairValue: 102 }, // 28
	{ name: "white7", description: "Low 7 white (Chut)", value: 7, soloRank: 14, pairValue: 102 }, // 29
	{ name: "red5", description: "Red 5 (Ng)", value: 5, soloRank: 15, pairValue: 101 }, // 30
	{ name: "white5", description: "White 5 (Ng)", value: 5, soloRank: 15, pairValue: 101 } // 31
]
