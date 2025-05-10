function uppg10(){
    const numbers = [5, 12, 7, 10, 20, 9, 11];
  
    // skapa tre arrayer - bigEven, smallOdd, other
    // loopa igenom numbers och placera talen i respektive array
    // bigEven ska innehålla tal större än 10 och jämnt delbara med 2
    // smallOdd ska innehålla tal mindre än 10 och udda
    // other ska innehålla alla andra tal
    // returnera ett objekt med de tre arrayerna
    const bigEven = []
    const smallOdd = []
    const other = []

    for (siffra of numbers) {
      if (siffra % 2 == 0 && siffra > 10) {
        bigEven.push(siffra)
      } else if (siffra % 2 !== 0 && siffra < 10) {
        smallOdd.push(siffra)
      } else {
        other.push(siffra)
      }
    }
    
  console.log(smallOdd)




  }
  
  module.exports = { uppg10 };
  