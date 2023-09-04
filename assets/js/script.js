// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.





function generateField(domElement, limit) {
    fieldElement.innerHTML = '';
    console.log(this);

    // genera la griglia
    if (fieldElement.classList.contains("filed")) {
        for (let i = 0; i < limit; i++) {

            const cellElement = document.createElement('div')
            cellElement.className = 'cell'
            cellElement.append(i + 1)
            domElement.append(cellElement)



            console.log(cellElement);
            // aggiungo l'event listener alla cella che ho appena generato
            cellElement.addEventListener('click', function () {
                //console.log('ho cliccato il numero:', cellElement);
                this.classList.toggle('bg-lightblue')
                console.log('Il numero selezionato è ' + this.innerHTML);
            })

        }
    }
}
const startButton = document.querySelector('button');
const fieldElement = document.querySelector('.d-none');
const limit = 100;

startButton.addEventListener('click', function () {
    fieldElement.classList.toggle('filed');
    generateField(fieldElement, limit);
})





