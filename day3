let backPacks = list.split("\n");

let sorter = {};
let prioSum = 0;
let priorities = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
for(let i = 0; i < priorities.length; i++){
  sorter[priorities[i]] = i +1;
}
console.log(sorter);
let firstHalf = "";
let secondHalf = "";
for (let k = 0; k < backPacks.length; k++){
firstHalf = backPacks[k].slice(0, backPacks[k].length / 2);
secondHalf = backPacks[k].slice(backPacks[k].length / 2);
for (let i = 0; i < firstHalf.length; i++){
  for (let j = 0; j < firstHalf.length; j++){
    if (firstHalf[i] === secondHalf[j]){
      prioSum += sorter[firstHalf[i]];
      i = firstHalf.length;
      j = firstHalf.length;
    } 
  }
}
}
console.log(prioSum); //first answer

let badgeSum = 0;
function commonChars(A) {
  const [first, ...rest] = A.sort((a,b) => -(a.length - b.length));
  const duplicates = [];
  [...first].forEach(e => {
    let isDuplicate = true;
    for (let x = 0, len = rest.length; x < len; x++) {
      let letters = rest[x];
      const i = letters.search(e);
      if (i !== -1) {
        letters = letters.slice(0, i) + letters.slice(i + 1);
        rest[x] = letters;
      } else {
        isDuplicate = false;
      }
    }
    if (isDuplicate) {
      duplicates.push(e);
    }
  });
  return duplicates;
}
for (let i = 0; i < backPacks.length; i = i+3){
  let testArray = [];
  testArray.push(backPacks[i], backPacks[i+1], backPacks[i+2]);
  console.log(commonChars(testArray));
  badgeSum += sorter[commonChars(testArray)[0]];
}
console.log(badgeSum); //second answser
