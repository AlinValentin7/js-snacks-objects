/**Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, 
per ogni persona, una frase con il nome e cognome 
e l’indicazione se può guidare, in base all’età. */

console.log('snack4')

const persone =  [
    {nome: 'Anna', cognome: ' Pepe', eta: 24, },
    {nome: 'Maurizio', cognome: ' Pisciotto', eta: 40, },
    {nome: 'Davide', cognome: ' de Luca', eta: 83, },
    {nome: 'Piero', cognome: ' Botrugno', eta: 17, },
    {nome: 'Rino', cognome: ' Ceronte', eta: 61, },
    {nome: 'Lara', cognome: ' Gazza', eta: 18, },
]

const Patente = []


for(let i = 0; i < persone.length; i++){
    const persona = persone [i]
    const eta = persona.eta
    const nome = persona.nome
    const cognome = persona.cognome
    let mesaggio
    
    if(eta >= 18 ) {
        mesaggio = nome +  cognome + ' puo giudare ha ' + eta
    }
    else {
        mesaggio = nome +  cognome + ' non puo giudare ha ' + eta
    }
   Patente.push(mesaggio)  
  
}


console.log(Patente)

