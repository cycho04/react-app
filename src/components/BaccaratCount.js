//handles bacc counts, as well as gong, wong, and pair
const BaccaratCount = (n, m) => {
    //recognizing gong , wong , or pair...
    let number = n.val + m.val;
    if(n.rank === m.rank){
      return 'Pair';
    }
    else if (n.val === 2 || m.val === 2){
      if (number === 10){
        return 80;// so that gong will be higher than 9
      }
      else if (number === 11){
        return 90; // same for wong.
      }
    }
    //regular baccarat counting...
    else if (number >= 10 && number < 20){
      if (number >= 20) {
        return number -= 20;
      }
        return number -= 10;
    }
    //value is under 10, return the sum.
    return number;
}

export default BaccaratCount;