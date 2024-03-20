import BaccaratCount from './BaccaratCount';

const FixTeenDeyValue = (hand1, hand2) => {
    const hand = BaccaratCount(hand1, hand2);
    if(hand === 80){
        return 'Gong';
    }
    else if(hand === 90){
        return 'Wong';
    }
    else {
      return hand;
    }
}

export default FixTeenDeyValue;