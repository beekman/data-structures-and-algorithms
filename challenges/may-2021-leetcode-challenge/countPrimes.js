let countPrimes = (n) => {
   // pre-populate an unPrimes array with n values of false
   let unPrimes = new Array(n);
   for(let i = 0; i < n; i++) {
      unPrimes[i] = false;
   }
   let result = 0;
   for(let i = 2; i < n; i++) {
      if(unPrimes[i] === false) {
         result++;
         //mark all multiples of n up to the end of the array as unPrime
         for(let j = 2; i * j < n; j++) {
            unPrimes[i * j] = true;
         }
      }
   }
   return result;
};
