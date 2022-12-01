   function mostCals(list){
    let highestCal = 0
    let currentCal = 0
    let totalCalArr = [];
    let arr = list.split('\n');
    let calorieArr = arr.map(x => Number(x)); 
    for (let i = 0; i < calorieArr.length; i++){
      if (calorieArr[i] === 0){
        totalCalArr.push(currentCal);
        currentCal = 0
       } else {
        currentCal += calorieArr[i];
        if (currentCal > highestCal){
          highestCal = currentCal;
        }
       }
    }
     totalCalArr.sort(function(x, y){return x - y}).reverse();
     return `First place: ${totalCalArr[0]}\nSecond Place: ${totalCalArr[1]}\nThird Place: ${totalCalArr[2]}\nTotal: ${totalCalArr[0] + totalCalArr[1] + totalCalArr[2]}`;
  }
