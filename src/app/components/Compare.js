//point system used for sort() in hiLowMiddle()
const Compare = (a, b) => {
    let comparison = 0;//no change
    if(a.realValue < b.realValue){
      comparison = -1;//a comes before b
    }
    else if(a.realValue > b.realValue){
      comparison = 1;//b comes before a
    }
    return comparison;
}

export default Compare;