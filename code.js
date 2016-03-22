var stringList = ["March", "April", "May"];

var numList = [13, 78, 34];

var boolList = [false, true, false];

console.log("works");

//1
var newList = '';

for (i = 0; i < stringList.length; i++){
  if(i < stringList.length - 1){
    newList +=  ' ' + stringList[i] + ",";
  }else{
    newList +=  ' ' + stringList[i];
  }
};

console.log('Months listed are' + newList);

//2
var x = numList.length - 1;
console.log(numList[x]);

//3
var numString = '';
for (j = 0; j < numList.length; j++){
  numString += numList[j];
}
console.log(numString);

//4
var total = 0;
for (k = 0; k < numList.length; k++){
  total += numList[k];
}
console.log(total);


//5
if(boolList[1] == true){
  var z = numList[0] + numList[x];
}else{
  var z = numlist[1] * numList[1];
}
console.log(z);


//6
for(l = 0; l < boolList.length; l++){
  if(boolList[l] == true){
    console.log(numList[l]);
  }
}
