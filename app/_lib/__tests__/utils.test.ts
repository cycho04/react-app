
import { 
    createHands,
    getBaccaratScore,
    solveTwoTiles
} from '../utils';
import { deck } from '../deck';

describe('Testing Util Functions', () => {
    it('tests createHands()', () => {
        const newHands = createHands(8);
        expect(newHands).toHaveLength(8);
      
        newHands.forEach(hand => {
            expect(hand).toHaveLength(4);
            hand.forEach(tile => {
                expect(tile).toHaveProperty("name");
                expect(tile).toHaveProperty("description");
                expect(tile).toHaveProperty("value");
                expect(tile).toHaveProperty("soloRank");
                expect(tile).toHaveProperty("pairRank");
            })          
        });
    })

    it('tests getBaccaratScore()', () => {
        expect(getBaccaratScore(0, 0)).toBe(0);
        expect(getBaccaratScore(0, 10)).toBe(0);
        expect(getBaccaratScore(10, 10)).toBe(0);
        expect(getBaccaratScore(2, 10)).toBe(2);
        expect(getBaccaratScore(2, 1)).toBe(3);
        expect(getBaccaratScore(10, 10)).toBe(0);
    })

    it('tests solveTwoTiles()', () => {
        // basic 
        expect(solveTwoTiles(deck[6], deck[8])).toBe(2); // high8 + high4
        expect(solveTwoTiles(deck[24], deck[31])).toBe(4); // red9 + white5
        expect(solveTwoTiles(deck[10], deck[18])).toBe(0); // high10 + low10
        expect(solveTwoTiles(deck[4], deck[16])).toBe(3); // day + eleven
        expect(solveTwoTiles(deck[9], deck[14])).toBe(8); // high4 + low4
    })
})