

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age
  const personer = [
    { name: "william", age: 25 },
    { name: "zakaria", age: 32 },
    { name: "oskar", age: 40 },
    { name: "felix", age: 29 },
    { name: "Erik", age: 35 }
  ];

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen
  function tretiopluss(arr) {
    arr.forEach(person => {
      if (person.age > 30) {
        console.log(person.name);
      }
    });
  }

// anropa funktionen och skicka med arrayen som argument
tretiopluss(personer);

}
uppg8();
module.exports = { uppg8 };