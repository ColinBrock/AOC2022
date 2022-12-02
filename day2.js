function massRps(rps){
let list = rps.split("\n");
let rpsScore = 0
  for(let i = 0; i < list.length; i++){
    if(list[i][2] === 'Y'){
      rpsScore += 2;
      if(list[i][0] === 'A'){
        rpsScore += 6;
      }
      if(list[i][0] === 'B'){
        rpsScore += 3;
      }
      }
    if(list[i][2] === 'X'){
      rpsScore += 1;
      if(list[i][0] === 'C'){
        rpsScore += 6;
      }
      if(list[i][0] === 'A'){
        rpsScore += 3;
      }
      }
    if(list[i][2] === 'Z'){
      rpsScore += 3;
      if(list[i][0] === 'B'){
        rpsScore += 6;
      }
      if(list[i][0] === 'C'){
        rpsScore += 3;
      }
      }
  }
  return rpsScore
}


// A == Rock
// B == Paper
// C == Sciscors
//X == Lose/Rock 1
//Y == Draw/Paper 2 
//Z == Win/Scissors 3
function massRpsSecret(rps){
let list = rps.split("\n");
let rpsScore = 0
  for(let i = 0; i < list.length; i++){
    if(list[i][2] === 'Y'){
      rpsScore += 3;
      if(list[i][0] === 'A'){
        rpsScore += 1;
      }
      if(list[i][0] === 'B'){
        rpsScore += 2;
      }
      if(list[i][0] === 'C'){
        rpsScore += 3;
      }
      }
    if(list[i][2] === 'X'){
      if(list[i][0] === 'C'){
        rpsScore += 2;
      }
      if(list[i][0] === 'A'){
        rpsScore += 3;
      }
      if(list[i][0] === 'B'){
        rpsScore += 1;
      }
      }
    if(list[i][2] === 'Z'){
      rpsScore += 6;
      if(list[i][0] === 'B'){
        rpsScore += 3;
      }
      if(list[i][0] === 'C'){
        rpsScore += 1;
      }
      if(list[i][0] === 'A'){
        rpsScore += 2;
      }
      }
  }
  return rpsScore
}
console.log(massRpsSecret(input))
