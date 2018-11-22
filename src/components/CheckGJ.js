
const CheckGeeJoon = (hand) => {

    let geeJoon = hand.filter((x) => x.rank === 16);
    let GJindex =hand.indexOf(geeJoon[0]); 

    let number = hand.filter((x) => x.val >= 7 && x.val <= 9);
    let anySix = hand.filter((x) => x.val === 6);
    let big = hand.filter((x) => x.realValue >= 10);
    let babies = hand.filter((x) => x.val >= 4 && x.val <= 5);
    let temp = hand.slice();


    //if we have a geejoon
    if (geeJoon.length === 1){
        //value is 3 by default
        temp[GJindex].val = 3;

        //3 number
        if (number.length === 3){
            temp[GJindex].val = 6;
            return temp;
        }
        //3 big
        else if (big.length === 3){
            temp[GJindex].val = 6;
            return temp;
        }
        //2 big
        else if (big.length === 2){
            //1 baby
            if(babies.length === 1){
                temp[GJindex].val = 6;
                return temp;
            }
            //1 number
            else if(number.length === 1){
                temp[GJindex].val = 6;
                return temp;
            }
            //1 six
            else if(anySix.length === 1){
                temp[GJindex].val = 6;
                return temp;
            }
        }
        //1 big
        else if (big.length === 1){
            //2 number
            if(number.length === 2){
                temp[GJindex].val = 6;
                return temp;
            }
            //2 babies
            else if(babies.length === 2){
                temp[GJindex].val = 6;
                return temp;
            }
        }
        //1 number and 2 babies.
        else if (number.length === 1 && babies.length === 2){
            temp[GJindex].val = 6;
            return temp;
        }
        //value is three here
        return temp;
    }
    //no Geejoon or geejoon pair
    return false;
  }

  export default CheckGeeJoon;