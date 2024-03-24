//Exceptions.
//If the hand is an exception, it returns the exception set in the right order.
//else returns false
const Exceptions = (hand) =>{
    let geeJoon = hand.filter((x) => x.rank === 16);
    let teen = hand.filter((x) => (x.val === 2) && (x.rank === 1));
    let dey = hand.filter((x) => (x.val === 2) && (x.rank === 2));
    let highEight = hand.filter((x) => (x.val === 8) && (x.rank === 3));
    let lowEight = hand.filter((x) => (x.val === 8) && (x.rank === 13));
    let highSix = hand.filter((x) => (x.val === 6) && (x.rank === 6));
    let lowSix = hand.filter((x) => (x.val === 6) && (x.rank === 11));
    let highTen = hand.filter((x) => (x.val === 0) && (x.rank === 5));
    let lowTen = hand.filter((x) => (x.val === 0) && (x.rank === 9));
    let highFour = hand.filter((x) => (x.val === 4) && (x.rank === 4));
    let lowFour = hand.filter((x) => (x.val === 4) && (x.rank === 7));
    let five = hand.filter((x) => x.val === 5);
    let eleven = hand.filter((x) => x.val === 1);
    let nine = hand.filter((x) => x.val === 9);
    
    let teenOrDey = hand.filter((x) => x.val === 2);
    let anyFour = hand.filter((x) => x.val === 4);
    let anySix = hand.filter((x) => x.val === 6);
    let anySeven = hand.filter((x) => x.val === 7);
    let anyEight = hand.filter((x) => x.val === 8);
    let anyTen = hand.filter((x) => x.val === 0);

    //  high 2/3
    if((teen.length === 1 && dey.length === 1) && (anyTen.length === 1 && eleven.length === 1)){
      let tempArr = [teen[0], anyTen[0], dey[0], eleven[0]];//need [0] because .filter() creates an array within an array.
      return tempArr;
    }
    //  high 6/7
    if((teen.length === 1 && dey.length === 1) && (anyFour.length === 1 && five.length === 1)){
      let tempArr = [teen[0], anyFour[0], dey[0], five[0]];//need [0] because .filter() creates an array within an array.
      return tempArr;
    }
    //  8/H9    8,8,11,10
    if((highEight.length === 1 && lowEight.length === 1) && (anyTen.length === 1 && eleven.length === 1)){
      let tempArr = [anyTen[0], lowEight[0], eleven[0], highEight[0]];//need [0] because .filter() creates an array within an array.
      return tempArr;
    }
    // 8/H9   8,9,10,10
    if((highTen.length === 1 && lowTen.length === 1) && (lowEight.length === 1 && nine.length === 1)){
      let tempArr = [lowTen[0], lowEight[0], highTen[0], nine[0]];//need [0] because .filter() creates an array within an array.
      return tempArr;
    }
    // high 5/7
    if((highEight.length === 1 && lowEight.length === 1) && (nine.length === 1 && anySeven.length === 1)){
      let tempArr = [highEight[0], anySeven[0], nine[0], lowEight[0]];//need [0] because .filter() creates an array within an array.
      return tempArr;
    }
    //  1/H9
    if((lowTen.length === 1 && highTen.length === 1) && (eleven.length === 1 && nine.length === 1)){
      let tempArr = [eleven[0], lowTen[0], highTen[0], nine[0]];//need [0] because .filter() creates an array within an array.
      return tempArr;
    }
    //  7/9   7,8,10,11
    if((anyTen.length === 1 && eleven.length === 1) && (anySeven.length === 1 && anyEight.length === 1)){
      let tempArr = [anySeven[0], anyTen[0], anyEight[0], eleven[0]];//need [0] because .filter() creates an array within an array.
      return tempArr;
    }
    // 7/9    5,6,t/d,geejoon
    if((five.length === 1 && geeJoon.length === 1) && (anySix.length === 1 && teenOrDey.length === 1)){
      let tempArr = [five[0], teenOrDey[0], anySix[0], geeJoon[0]];//need [0] because .filter() creates an array within an array.
      return tempArr;
    }
    // H7/9   4,4,5,geejoon
    if((five.length === 1 && geeJoon.length === 1) && (highFour.length === 1 && lowFour.length === 1)){
      let tempArr = [geeJoon[0], highFour[0], five[0], lowFour[0]];//need [0] because .filter() creates an array within an array.
      return tempArr;
    }
    //  7/H9 6,6,geejoon,11
    if((eleven.length === 1 && geeJoon.length === 1) && (highSix.length === 1 && lowSix.length === 1)){
      let tempArr = [eleven[0], lowSix[0], highSix[0], geeJoon[0]];//need [0] because .filter() creates an array within an array.
      return tempArr;
    }
    //no exceptions
    return false
}

export default Exceptions;