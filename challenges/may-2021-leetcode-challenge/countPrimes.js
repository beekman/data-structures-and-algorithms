let countPrimes = (n) => {
   // pre-populate an unPrimes array with n values of false
   let unPrimes = new Array(n).fill(false);
   let result = 0;
   for(let i = 2; i < n; i++) {
      if(unPrimes[i] === false) {
         //if the number is marked as unPrime, add 1 to the result
         result++;
         // multiples of numbers below i have been computed already, so start with i*i
         for(let j = i * i; i * j < n; j++) {
            notPrimes[i * j] = true;
         }
      }
   }
   return result;
};
