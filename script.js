function threeSum(S, target) {
  S.sort((a,b) => a-b);
  let closetSum = Infinity;
  for(let i = 0;i< S.length-2;i++){
    let left = i+1,right = S.length -1;
    while(left < right){
      let currentSum = S[i] + S[left] + S[right];
      if(Math.abs(currentSum - target)< Math.abs(closetSum - target)){
        closetSum = currentSum;
      }
      if(currentSum < target){
        right--;
      } else{
        return currentSum;
      }
    }
  }
  return closetSum;
  //your code here
}

module.exports = threeSum;
