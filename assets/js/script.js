// Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

let counter = 0;

function addPoints() {
    counter++;
    if (counter == 84) {
        alert('Hai Vinto! ' + 'Hai totalizzato ' + counter + ' punti')
        counter = 0;
    }
}
function generateField(domElement, limit) {
    fieldElement.innerHTML = '';
    console.log(this);

    let bombs = [];


    while (bombs.length < 16) {
        let bomb = Math.floor(Math.random() * 100 + 1);
        if (!bombs.includes(bomb)) {
            bombs.push(bomb)
        }

    }
    console.log(bombs);
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
                if (bombs.includes(i + 1)) {
                    this.classList.toggle('bg-red')
                    console.log('bomba');
                    alert('Hai perso! ' + 'Hai totalizzato ' + counter + ' punti')
                    fieldElement.innerHTML = '';
                    counter = 0;
                } else {
                    this.classList.toggle('bg-lightblue')
                    console.log('Il numero selezionato è ' + this.innerHTML);
                    addPoints();

                }
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






