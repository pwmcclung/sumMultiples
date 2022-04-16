function sumMul(n,m){
  
  if (n <= 0 || m <= 0){
  
  return 'INVALID'
  }else{
   let sum = 0;
   for (let i = 1; i * n < m; i++){
    sum += i * n
   }
    return sum
}
}
