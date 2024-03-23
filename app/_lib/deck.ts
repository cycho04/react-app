export interface TileInterface {
	name: string; // non-unique string that matches image name.
	description: string; // Used for the Alt attribute for Images
	value: number | number[]; // will use baccarat counting. GeeJoon can be either 3, 6.
	soloRank: number; // individual tile rank
	pairRank: number; // pair rank, also used as id when matching with pair tile
}

export const deck: TileInterface[] = [
	//High Tiles
	{ name: "geejoon3", description: "Gee Joon 3 dots", value: [3, 6], soloRank: 16, pairRank: 1 },
	{ name: "geejoon6", description: "Gee Joon 6 dots", value: [3, 6], soloRank: 16, pairRank: 1 },
	{ name: "teen", description: "Teen", value: 12, soloRank: 1, pairRank: 2 },
	{ name: "teen", description: "Teen", value: 12, soloRank: 1, pairRank: 2 },
	{ name: "day", description: "Day", value: 12, soloRank: 2, pairRank: 3 },
	{ name: "day", description: "Day", value: 12, soloRank: 2, pairRank: 3 },
	{ name: "high8", description: "High 8", value: 8, soloRank: 3, pairRank: 4 },
	{ name: "high8", description: "High 8", value: 8, soloRank: 3, pairRank: 4 },
	{ name: "high4", description: "High 4", value: 4, soloRank: 4, pairRank: 5 },
	{ name: "high4", description: "High 4", value: 4, soloRank: 4, pairRank: 5 },
	//Symmetric tiles
	{ name: "high10", description: "High 10", value: 10, soloRank: 5, pairRank: 6 },
	{ name: "high10", description: "High 10", value: 10, soloRank: 5, pairRank: 6 },
	{ name: "high6", description: "High 6", value: 6, soloRank: 6, pairRank: 7 },
	{ name: "high6", description: "High 6", value: 6, soloRank: 6, pairRank: 7 },
	{ name: "low4", description: "Low 4", value: 4, soloRank: 7, pairRank: 8 },
	{ name: "low4", description: "Low 4", value: 4, soloRank: 7, pairRank: 8 },
	//Half Symmetric tiles
	{ name: "eleven", description: "11", value: 11, soloRank: 8, pairRank: 9 },
	{ name: "eleven", description: "11", value: 11, soloRank: 8, pairRank: 9 },
	{ name: "low10", description: "Low 10", value: 10, soloRank: 9, pairRank: 10 },
	{ name: "low10", description: "Low 10", value: 10, soloRank: 9, pairRank: 10 },
	{ name: "high7", description: "High 7", value: 7, soloRank: 10, pairRank: 11 },
	{ name: "high7", description: "High 7", value: 7, soloRank: 10, pairRank: 11 },
	{ name: "low6", description: "Low 6", value: 6, soloRank: 11, pairRank: 12 },
	{ name: "low6", description: "Low 6", value: 6, soloRank: 11, pairRank: 12 },
	//Mixed pairs
	{ name: "red9", description: "Red 9", value: 9, soloRank: 12, pairRank: 13 },
	{ name: "white9", description: "White 9", value: 9, soloRank: 12, pairRank: 13 },
	{ name: "low8", description: "Low 8 symmetric", value: 8, soloRank: 13, pairRank: 14 },
	{ name: "low8slant", description: "Low 8 slant", value: 8, soloRank: 13, pairRank: 14 },
	{ name: "red7", description: "Low 7 red", value: 7, soloRank: 14, pairRank: 15 },
	{ name: "white7", description: "Low 7 white", value: 7, soloRank: 14, pairRank: 15 },
	{ name: "red5", description: "Red 5", value: 5, soloRank: 15, pairRank: 16 },
	{ name: "white5", description: "White 5", value: 5, soloRank: 15, pairRank: 16 }
]
