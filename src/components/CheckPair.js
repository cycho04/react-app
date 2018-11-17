// const CheckPairs = (hand) => {
//     //maybe add a pair check func before the loop, to avoid unnecessary looping.
//     for(let i = 0; i < hand.length; i++) {
//         for (let ii = 0; ii < hand.length; ii++) {
//           // if there is a pair and it is not comparing to itself.
//           if (hand[i].pair === hand[ii].pair && i !== ii) {
//             let pairTL = hand.filter((x) => x.rank === hand[i].rank); //array of the pair tiles
//             let otherTL = hand.filter((x) => x.rank !== hand[i].rank); // array of the other 2 tiles. use these two arr to move tiles accordingly
//             //if pair has split rules...
//             if (hand[i].split !== false) {
//               this.split(pairTL, otherTL);//handles split rules.
//               return true;
//             }
//             //pairs that don't split
//             else {
//               let copyArr = otherTL.concat(pairTL); //concats the two small arrays together and renders.
//               this.setState(() => ({hand: copyArr, pairName: pairTL[0].name, rule: 'Don\'t Split'}))
//               return true;
//             }
//           }
//         }
//       }
//       return false; //no pairs
// }

// export default CheckPairs;