

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument
const personer = [
    {namn: "erik", age: 31},
    {namn: "per", age: 20},
    {namn: "anna", age: 45},
    {namn: "ola", age: 27},
    {namn: "kalle", age: 22}
]

function personOver30(personArray){
    for (person of personArray) {
        if (person.age > 30) {
            console.log(person.namn);
        }
    }
}

personOver30(personer);


}

module.exports = { uppg8 };