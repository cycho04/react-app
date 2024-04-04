
import { 
    solveFourTiles
} from '../utils';
import { deck } from '../deck';

const hands = [

    /*
        Pairs
    */
    {
        hand: [deck[0], deck[1], deck[16], deck[25]], // geejoon, 11, 9
        lowAnswer: 0,
        highAnswer: 116
    },
    {
        hand: [deck[0], deck[1], deck[9], deck[13]], // geejoon, h4, h6
        lowAnswer: 7,
        highAnswer: 9
    },
    {
        hand: [deck[2], deck[3], deck[16], deck[20]], // teen, teen, 11, h7
        lowAnswer: 8,
        highAnswer: 115
    },
    {
        hand: [deck[2], deck[3], deck[22], deck[24]], // teen, teen, l6, 9,
        lowAnswer: 8,
        highAnswer: 21
    },
    {
        hand: [deck[2], deck[3], deck[9], deck[12]], // teen, teen, h4, h6
        lowAnswer: 6,
        highAnswer: 8
    },
    {
        hand: [deck[6], deck[7], deck[16], deck[25]], // h8, h8, 11, 9
        lowAnswer: 7,
        highAnswer: 9
    },
    {
        hand: [deck[6], deck[7], deck[18], deck[13]], // h8, h8, l10, h6
        lowAnswer: 6,
        highAnswer: 113
    },
    {
        hand: [deck[8], deck[9], deck[22], deck[24]], // h4, h4, l6, 9
        lowAnswer: 5,
        highAnswer: 112
    },

    
    /*
        9, Gong, Wong
    */
    {
        hand: [deck[8], deck[3], deck[22], deck[24]], // h4, teen, 9, l6
        lowAnswer: 0,
        highAnswer: 21
    },
    {
        hand: [deck[16], deck[3], deck[24], deck[20]], // 11, teen, 9, h7
        lowAnswer: 0,
        highAnswer: 9
    },
    {
        hand: [deck[7], deck[3], deck[24], deck[20]], // h8, teen, 9, h7
        lowAnswer: 7,
        highAnswer: 9
    },
    {
        hand: [deck[5], deck[3], deck[24], deck[26]], // day, teen, 9, l8
        lowAnswer: 20,
        highAnswer: 21
    },


    /*
        Babies and GeeJoon
    */
    {
        hand: [deck[12], deck[19], deck[27], deck[0]], // h6, l10, l8, geejoon
        lowAnswer: 8,
        highAnswer: 9
    },
    {
        hand: [deck[15], deck[19], deck[16], deck[1]], // l4, l10, 11, geejoon
        lowAnswer: 5,
        highAnswer: 6
    },
    {
        hand: [deck[30], deck[20], deck[15], deck[13]], // 5, h7, l4, h6
        lowAnswer: 3,
        highAnswer: 9
    },
    {
        hand: [deck[27], deck[15], deck[0], deck[31]], // l8, l4, geejoon, 5
        lowAnswer: 4,
        highAnswer: 9
    },
    {
        hand: [deck[0], deck[5], deck[22], deck[8]], // geejoon, day, l6, h4
        lowAnswer: 7,
        highAnswer: 8
    },
    {
        hand: [deck[10], deck[22], deck[1], deck[8]], // h10, l6, geejoon, h4
        lowAnswer: 6,
        highAnswer: 7
    },
    {
        hand: [deck[30], deck[8], deck[15], deck[19]], // 5, h4, l4, l10
        lowAnswer: 5,
        highAnswer: 8
    },
    {
        hand: [deck[30], deck[8], deck[16], deck[19]], // 5, h4, 11, l10
        lowAnswer: 5,
        highAnswer: 5
    },


    /*
        Big 3 Tiles
    */
    {
        hand: [deck[3], deck[4], deck[10], deck[31]], // teen, day, h10, 5
        lowAnswer: 4,
        highAnswer: 5
    },
    {
        hand: [deck[19], deck[4], deck[16], deck[23]], // l10, day, 11, l6
        lowAnswer: 3,
        highAnswer: 6
    },


    /*
        Classic High Low
    */
    {
        hand: [deck[23], deck[20], deck[7], deck[24]], // l6, h7, h8, 9
        lowAnswer: 5,
        highAnswer: 5
    },
]

describe('Solves Hands', () => {
    it('tests hand recognition', () => {
        hands.forEach(({hand, highAnswer, lowAnswer}) => {
            const {high, low} = solveFourTiles(hand);
            expect(high).toBe(highAnswer)
            expect(low).toBe(lowAnswer)
        })
    })
})