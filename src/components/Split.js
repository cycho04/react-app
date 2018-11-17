import BaccaratCount from './BaccaratCount';

//n = pairTL, n2 = otherTL
const Split = (n, n2) => {
    const combo1 = BaccaratCount(n2[0], n[0]);
    const combo2 = BaccaratCount(n2[1], n[1]);
    let dontSplitArr = n.concat(n2);
    let splitArr = [n[0], n2[0], n[1], n2[1]];

    //Gee Joon
    if (n[0].pair === 1) {
      //if it meets the split requirements...
      if((combo1 >= 7 && combo2 >= 9) || (combo1 >= 9 && combo2 >= 7)){
          let tempArr = [splitArr, 'pairs'];
          return tempArr;
      } 
      else {
        let tempArr = [dontSplitArr, 'pair'];
        return tempArr;
      }
    }

    //TeenDey
    else if(n[0].pair === 2){
      //if it splits to make 6/8 or better
      if((combo1 >= 6 && combo2 >= 8) || (combo1 >= 8 && combo2 >= 6)){
        let tempArr = [splitArr, 'pairs'];
          return tempArr;
      }
      else if((n2[0].val === 9 && n2[1].val === 1) || (n2[0].val === 1 && n2[1].val === 9)){
        let tempArr = [splitArr, 'pairs'];
          return tempArr;
      }
      else{
        let tempArr = [dontSplitArr, 'pair'];
        return tempArr;
      }
    }

    //all other pairs(needs work on recognizing teen dey)
    else {
      if(combo1 >= n[0].split && combo2 >= n[0].split){
        //checks for gong/wong
        if((n2[0].val === 2 && combo2 >= n[0].split) || (n2[1].val === 2 && combo1 >= n[0].split)){
            let tempArr = [splitArr, 'pairs'];
            return tempArr;
        }
        else {
            let tempArr = [splitArr, 'pairs'];
            return tempArr;
        }
      }
      else {
        let tempArr = [dontSplitArr, 'pair'];
        return tempArr;
      }
    }
  }

  export default Split;