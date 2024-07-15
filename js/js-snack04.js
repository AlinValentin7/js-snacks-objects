/**Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.

Crea un nuovo array con la lista dei mammiferi.*/

const animals = [
    { nome: 'leone', famiglia: 'felini', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    { nome: 'ragno', famiglia: 'aracnidi', classe: 'insetti'},
    { nome: 'serpente', famiglia: 'colubridi', classe: 'rettili'}
  ]

const mammiferi = []
const altreSpecie = []
for(let i = 0; i < animals.length; i++ ){
    const animalsCategory = animals[i]
    const classe = animalsCategory.classe
    if(classe === 'mammiferi'){
       mammiferi.push(animalsCategory)
    
    }
    else {
        altreSpecie.push(animalsCategory)
    }

}
console.log(mammiferi)
console.log(altreSpecie)