function uppg10(){
    const numbers = [5, 12, 7, 10, 20, 9, 11];
  
    // skapa tre arrayer - bigEven, smallOdd, other
    // loopa igenom numbers och placera talen i respektive array
    // bigEven ska innehålla tal större än 10 och jämnt delbara med 2
    // smallOdd ska innehålla tal mindre än 10 och udda
    // other ska innehålla alla andra tal
    // returnera ett objekt med de tre arrayerna

    // skaoar arryerna
    const bigEven = [];
    const smallOdd = [];
    const other = [];

    // loopar igenom numbers
    numbers.forEach(number => {
        // kollar villkoren och pushar in i respektive array

        // bigEven: tal större än 10 och jämnt delbara med 2
        if (number > 10 && number % 2 === 0) {
            // pushar in i bigEven
            bigEven.push(number);
        // smallOdd: tal mindre än 10 och udda
        } else if (number < 10 && number % 2 !== 0) {
            // pushar in i smallOdd
            smallOdd.push(number);
        // other: alla andra tal
        } else {
            // pushar in i other
            other.push(number);
        }
    });
    // returnerar ett objekt med de tre arrayerna
    return {
        bigEven: bigEven,
        smallOdd: smallOdd,
        other: other
    };
    
  
  }
  console.log(uppg10());
  
  module.exports = { uppg10 };
  