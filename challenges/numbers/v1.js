const primeNumbers = (n) => {
  //The goal: Return an array of prime numbers, where a prime number is a positive integer greater than 1 that is only divisible by 1 and itself. It should take in a single variable n representing how many prime numbers you should return.
  let i = 2;
  let primes = [];
  while(primes.length < n) {
    let is_prime = true;
    for(const prime in primes) {
      if(i % prime == 0) {
        is_prime = false;
      }
      is_prime ? primes.push(i) : console.log(`${i} is not prime. Checking next number.`);
    }

    i += 1;
  }
  return primes;
};
