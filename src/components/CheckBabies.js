//and Geejoon

import Compare from './Compare';

const CheckBabies = (hand) => {
  
    let highFour = hand.filter((x) => (x.val === 4) && (x.rank === 4));
    let lowFour = hand.filter((x) => (x.val === 4) && (x.rank === 7));
    let five = hand.filter((x) => x.val === 5);
    let eleven = hand.filter((x) => x.val === 1);
    let nine = hand.filter((x) => x.val === 9);
    let anyFour = hand.filter((x) => x.val === 4);
    let anySix = hand.filter((x) => x.val === 6);

    let geeJoon = hand.filter((x) => x.rank === 16);
    let number = hand.filter((x) => x.val >= 6 && x.val <= 9);
    let number7_9 = hand.filter((x) => x.val >= 7 && x.val <= 9);
    let big = hand.filter((x) => x.realValue >= 10);
    let babies = hand.filter((x) => x.val >= 4 && x.val <= 5);
    
    let tempArr = '';
    let sortedArr = hand.slice().sort(Compare); //Compare() is imported.  slice used, else mutates hand
  
    //geejoon
    if (geeJoon.length === 1){
      //goes with 3
      //1 baby
      if(babies.length === 1){
        //9 and 11
        if(nine.length === 1 && eleven.length === 1){
          tempArr = [geeJoon[0], nine[0], eleven[0], babies[0]];
          return tempArr;
        }
        //2 numbers
        else if(number7_9.length === 2){
          tempArr = [geeJoon[0], babies[0], number7_9[0], number7_9[1]];
          return tempArr;
        }
        //1 number and 1 big
        else if(number7_9.length === 1 && big.length === 1){
          tempArr = [geeJoon[0], babies[0], number7_9[0], big[0]];
          return tempArr;
        }
        // 1 number and 1 six
        else if (number7_9.length === 1 && anySix.length === 1){
          tempArr = [geeJoon[0], babies[0], number7_9[0], anySix[0]];
          return tempArr;
        }
        // 1 six and 1 big
        else if (anySix.length === 1 && big.length === 1){
          tempArr = [geeJoon[0], babies[0], number7_9[0], number7_9[1]];
          return tempArr;
        }
      }

      //goes with six
      //1 six...
      if(anySix.length === 1){
        //1 number, 1 big
        if(number7_9.length === 1 && big.length === 1){
          tempArr = [geeJoon[0], anySix[0], number7_9[0], big[0]];
          return tempArr;
        }
        //2 numbers
        else if(number7_9.length === 2){
          tempArr = [geeJoon[0], anySix[0], number7_9[0], number7_9[1]];
          return tempArr;
        }
      } 
      //2 sixes
      else if(anySix.length === 2){
        let remainingTile = hand.filter((x) => x.rank !== 16 && x.val !== 6);
        tempArr = [geeJoon[0], anySix[0], anySix[1], remainingTile[0]];
        return tempArr;
      }
      //2 babies
      else if(babies.length === 2){
        let remainingTile = hand.filter((x) => x.rank !== 16 && (x.val !== 5 && x.val !== 4));
        tempArr = [geeJoon[0], remainingTile[0], babies[0], babies[1]];
        return tempArr; 
      }
    }

    //3 big
    else if (big.length === 3){
      return sortedArr;
    }

    //3 babies
    else if (babies.length === 3){
      let remainingTile = hand.filter((x) => x.val !== 4 && x.val !== 5);
      //big tile
      if(remainingTile[0].val <= 2){
        let tempArr = [lowFour[0], highFour[0], five[0], remainingTile[0]];
        return tempArr;
      }
      //red 8 or 9
      else if(remainingTile[0].val === 9 || remainingTile[0].rank === 3){
        tempArr = [lowFour[0], highFour[0], five[0], remainingTile[0]];
        return tempArr;
      }
      //6,7,low 8
      else {
        tempArr = [lowFour[0], remainingTile[0], five[0], highFour[0]];
        return tempArr;
      }
    }

    //2 babies
    else if (babies.length === 2){
      let remainingTile = hand.filter((x) => x.rank !== 16 && (x.val !== 4 && x.val !== 5));
      //  1 geejoon
      if(geeJoon.length === 1){
        tempArr = [babies[0], babies[1], geeJoon[0], remainingTile[0]];
        return tempArr;
      }
      // 11 and 9
      else if(eleven.length === 1 && nine.length === 1){   
        //5 and high 4
        if(five.length === 1 && anyFour.length === 1){
          tempArr = [five[0], nine[0], eleven[0], anyFour[0]];
          return tempArr;
        }  
        //both 4's
        if(lowFour.length === 1 && highFour.length === 1){
          tempArr = [highFour[0], nine[0], lowFour[0], eleven[0]];
          return tempArr;
        } 
      }
      //  1 big 1 number
      else if(big.length === 1 && number.length === 1){     
        tempArr = [babies[0], babies[1], number[0], big[0]];
        return tempArr;
      }
      //  2 number
      else if(number.length === 2){     
        tempArr = [babies[0], babies[1], number[0], number[1]];
        return tempArr;
      }
      //  2 big
      else if(big.length === 2){     
        tempArr = [babies[0], big[0], babies[1], big[1]];
        return tempArr;
      }
    }
    return false;
  }

  export default CheckBabies;
