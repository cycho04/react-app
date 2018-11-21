
const CheckGeeJoon = (hand) => {
    
    let highSix = hand.filter((x) => (x.val === 6) && (x.rank === 6));
    let lowSix = hand.filter((x) => (x.val === 6) && (x.rank === 11));
    let highTen = hand.filter((x) => (x.val === 0) && (x.rank === 5));
    let lowTen = hand.filter((x) => (x.val === 0) && (x.rank === 9));
    let highFour = hand.filter((x) => (x.val === 4) && (x.rank === 4));
    let lowFour = hand.filter((x) => (x.val === 4) && (x.rank === 7));
    let five = hand.filter((x) => x.val === 5);
    let eleven = hand.filter((x) => x.val === 1);
    let nine = hand.filter((x) => x.val === 9);
    let anyTen = hand.filter((x) => x.val === 0);
    let teenOrDey = hand.filter((x) => x.val === 2);
    let anyFour = hand.filter((x) => x.val === 4);

    let geeJoon = hand.filter((x) => x.rank === 16);
    let number = hand.filter((x) => x.val >= 7 && x.val <= 9);
    let anySix = hand.filter((x) => x.val === 6);
    let big = hand.filter((x) => x.realValue >= 10);
    let babies = hand.filter((x) => x.val >= 4 && x.val <= 5);
    
    let tempArr = '';
    let sortedArr = hand.slice().sort(Compare); //Compare() is imported.  slice used, else mutates hand
    
    //if we have a geejoon
    if (geeJoon.length === 1){
        //============================== 6 ======================================
        //3 number
        if (number.length === 3){
        }
        //3 big
        else if (big.length === 3){
        }
        //2 big
        else if (big.length === 2){
            //1 baby
            if(babies.length === 1){
                
            }
            //1 number
            else if(number.length === 1){
                
            }
            //1 six
            else if(anySix.length === 1){
                
            }
        }
        //1 big
        else if (big.length === 1){
            //2 number
            if(number.length === 2){

            }
            //2 babies
            else if(babies.length === 2){

            }
        }
        //1 number and 2 babies.
        else if (number.length === 1 && babies.length === 2){
            return sortedArr;
        }
        //============================== else 3. ==========================================
    }
    //no Geejoon or geejoon pair
    return false;
  }

  export default CheckGeeJoon;