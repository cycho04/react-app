export interface TileInterface {
	name: string; // non-unique string that matches image name.
	description: string; // Used for the Alt attribute for Images
	value: number; // will use baccarat counting. GeeJoon can be either 3, 6.
	soloRank: number; // individual tile rank
	pairRank: number; // pair rank, also used as id when matching with pair tile
}

export const deck: TileInterface[] = [
	//High Tiles
	{ name: "geejoon3", description: "Gee Joon (Saam)", value: 3, soloRank: 16, pairRank: 1 }, // 0
	{ name: "geejoon6", description: "Gee Joon (Luk)", value: 3, soloRank: 16, pairRank: 1 }, // 1
	{ name: "teen", description: "Teen", value: 12, soloRank: 1, pairRank: 2 }, // 2
	{ name: "teen", description: "Teen", value: 12, soloRank: 1, pairRank: 2 }, // 3
	{ name: "day", description: "Day", value: 12, soloRank: 2, pairRank: 3 }, // 4
	{ name: "day", description: "Day", value: 12, soloRank: 2, pairRank: 3 }, // 5
	{ name: "high8", description: "High 8 (Yun)", value: 8, soloRank: 3, pairRank: 4 }, // 6
	{ name: "high8", description: "High 8 (Yun)", value: 8, soloRank: 3, pairRank: 4 }, // 7
	{ name: "high4", description: "High 4 (Gor)", value: 4, soloRank: 4, pairRank: 5 }, // 8
	{ name: "high4", description: "High 4 (Gor)", value: 4, soloRank: 4, pairRank: 5 }, // 9
	//Symmetric tiles
	{ name: "high10", description: "High 10 (Mooy)", value: 10, soloRank: 5, pairRank: 6 }, // 10
	{ name: "high10", description: "High 10 (Mooy)", value: 10, soloRank: 5, pairRank: 6 }, // 11
	{ name: "high6", description: "High 6 (Chong)", value: 6, soloRank: 6, pairRank: 7 }, // 12
	{ name: "high6", description: "High 6 (Chong)", value: 6, soloRank: 6, pairRank: 7 }, // 13
	{ name: "low4", description: "Low 4 (Bon)", value: 4, soloRank: 7, pairRank: 8 }, // 14
	{ name: "low4", description: "Low 4 (Bon)", value: 4, soloRank: 7, pairRank: 8 }, // 15
	//Half Symmetric tiles
	{ name: "eleven", description: "11 (Foo)", value: 11, soloRank: 8, pairRank: 9 }, // 16
	{ name: "eleven", description: "11 (Foo)", value: 11, soloRank: 8, pairRank: 9 }, // 17
	{ name: "low10", description: "Low 10 (Ping)", value: 10, soloRank: 9, pairRank: 10 }, // 18
	{ name: "low10", description: "Low 10 (Ping)", value: 10, soloRank: 9, pairRank: 10 }, // 19
	{ name: "high7", description: "High 7 (Tit)", value: 7, soloRank: 10, pairRank: 11 }, // 20
	{ name: "high7", description: "High 7 (Tit)", value: 7, soloRank: 10, pairRank: 11 }, // 21
	{ name: "low6", description: "Low 6 (Look)", value: 6, soloRank: 11, pairRank: 12 }, // 22
	{ name: "low6", description: "Low 6 (Look)", value: 6, soloRank: 11, pairRank: 12 }, // 23
	//Mixed pairs
	{ name: "red9", description: "Red 9 (Gow)", value: 9, soloRank: 12, pairRank: 13 }, // 24
	{ name: "white9", description: "White 9 (Gow)", value: 9, soloRank: 12, pairRank: 13 }, // 25
	{ name: "low8", description: "Low 8 symmetric (Bot)", value: 8, soloRank: 13, pairRank: 14 }, // 26
	{ name: "low8slant", description: "Low 8 slant (Bot)", value: 8, soloRank: 13, pairRank: 14 }, // 27
	{ name: "red7", description: "Low 7 red (Chut)", value: 7, soloRank: 14, pairRank: 15 }, // 28
	{ name: "white7", description: "Low 7 white (Chut)", value: 7, soloRank: 14, pairRank: 15 }, // 29
	{ name: "red5", description: "Red 5 (Ng)", value: 5, soloRank: 15, pairRank: 16 }, // 30
	{ name: "white5", description: "White 5 (Ng)", value: 5, soloRank: 15, pairRank: 16 } // 31
]
