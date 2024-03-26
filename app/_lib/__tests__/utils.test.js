
import { dealNewHand } from '../utils';

describe('Testing Util Functions', () => {
    it('tests dealNewHand()', () => {
        const newHands = dealNewHand(8);
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
})