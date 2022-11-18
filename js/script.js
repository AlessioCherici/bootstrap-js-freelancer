/*inizio dal super-bonus, convertendo le card preimpostate
 in card generate tramite javascript, con i dati che ho in array*/

let arrayCards = [
    {
        nome: "Cabin Site",
        alt: "Capanna",
        img: "img/portfolio/cabin.png",
    },

    {
        nome: "Cake Website",
        alt: "Torta",
        img: "img/portfolio/cake.png",
    },

    {
        nome: "Circus Website",
        alt: "Circo",
        img: "img/portfolio/circus.png",
    },

    {
        nome: "Game Website",
        alt: "Controller",
        img: "img/portfolio/game.png",
    },

    {
        nome: "Safe Website",
        alt: "Cassaforte",
        img: "img/portfolio/safe.png",
    },

    {
        nome: "Submarine Website",
        alt: "Sottomarino",
        img: "img/portfolio/submarine.png",
    }
];

//funzione che stampa in DOM le cards con i dati giusti (Super-bonus)

for (let card of arrayCards) {
    document.getElementById("rowcarte").innerHTML +=
        `<div class="col-12 col-md-6 col-lg-4">
    <div class="card mb-5 border">
        <img class="card-img-top img-fluid" src="${card.img}" alt="${card.alt}">
        <div class="card-body pb-0">
            <h5 class="text-black text-center">${card.nome}</h5>
        </div>
        <div class="card-body pt-0 text-center">
            <button type="button" class="btn btn-info py-1 m-2 btn-lg px-1">Preview</button>
            <button type="button" class="btn btn-outline-info py-1 m-2 btn-lg px-1">View Site</button>
        </div>
    </div>
</div>
    `;
}

//creo un array per storare i codici sconto utilizzabili (verranno rimossi se utilizzati in seguito [BONUS])

let arraySconti = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24",];

//creo una funzione per ottenere i dati del form, e per calcolare il prezzo

function submitForm(event) {
    event.preventDefault();

    let oreLavoro = document.getElementById("inputHours").value;

    let tipoLavoro = document.getElementById("sceltaLavoro").value;

    let sconto = document.getElementById("inputDiscount").value;
    sconto = sconto.toUpperCase();

    let prezzoPieno = oreLavoro * tipoLavoro;

    let isInArray = arraySconti.includes(sconto, 0);

    //questo if verifica se lo spazio discount code è pieno o vuoto, se pieno procede al check
    if (sconto != "") {
        //condizioni di check con rimozione di codice sconto se valido (BONUS!)
        if (isInArray) {
            document.getElementById("inputDiscount").classList.remove("text-danger");
            let prezzoScontato = prezzoPieno - prezzoPieno * 25 / 100;
            document.getElementById("sconto").innerHTML = "Il codice ti garantisce un 25% di sconto!";
            prezzoScontato = prezzoScontato.toFixed(2);
            document.getElementById("risposta").innerHTML = "Totale<br>" + prezzoScontato;
            arraySconti.splice(arraySconti.indexOf(sconto),1);
        }
        //Questo else Stampa in dom un errore e colora di rosso il testo del codice inserito se sbagliato (BONUS!)        
        else {
            document.getElementById("sconto").innerHTML = "Il tuo codice sconto non è valido!";
            document.getElementById("inputDiscount").classList.add("text-danger");
            prezzoPieno = prezzoPieno.toFixed(2);
            document.getElementById("risposta").innerHTML = "Totale<br>" + prezzoPieno;
        }
    }
    //stampa prezzo pieno 
    else {
        prezzoPieno = prezzoPieno.toFixed(2);
        document.getElementById("risposta").innerHTML = "Totale<br>" + prezzoPieno;
    }
}



