/*inizio dal super-bonus, convertendo le card preimpostate
 in card generate tramite javascript, con i dati che ho in array*/

let arrayCards = [
    {
        nome: "Cabin Site",
        img: "img/portfolio/cabin.png",
    },

    {
        nome: "Cake Website",
        img: "img/portfolio/cake.png",
    },

    {
        nome: "Circus Website",
        img: "img/portfolio/circus.png",
    },

    {
        nome: "Game Website",
        img: "img/portfolio/game.png",
    },

    {
        nome: "Safe Website",
        img: "img/portfolio/safe.png",
    },

    {
        nome: "Submarine Website",
        img: "img/portfolio/submarine.png",
    }
];



for (let card of arrayCards) {
    document.getElementById("rowcarte").innerHTML +=
        `<div class="col-12 col-md-6 col-lg-4">
    <div class="card mb-5 border">
        <img class="card-img-top img-fluid" src="${card.img}" alt="Casetta">
        <div class="card-body pb-0">
            <h5 class="text-black text-center">${card.nome}</h5>
        </div>
        <div class="card-body pt-0 text-center">
            <button type="button" class="btn btn-info py-1 m-2 btn-lg px-1">Preview</button>
            <button type="button" class="btn btn-outline-info py-1 m-2 btn-lg px-1">View Site</button>
        </div>
    </div>
</div>
    `
}

let arraySconti = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24",];

function submitForm(event) {
    event.preventDefault();

    let oreLavoro = document.getElementById("inputHours").value;
    console.log(oreLavoro + " orelavoro");

    let tipoLavoro = document.getElementById("sceltaLavoro").value;
    console.log(tipoLavoro + " tipolavoro");

    let sconto = document.getElementById("inputDiscount").value;
    sconto = sconto.toUpperCase();
    console.log(sconto + " codicesconto");

    let prezzoPieno = oreLavoro * tipoLavoro;
    console.log(prezzoPieno);

    let isInArray = arraySconti.includes(sconto, 0);
    console.log(isInArray);

    if (isInArray) {
        let prezzoScontato = prezzoPieno * 25 / 100;
        console.log(prezzoScontato);
        console.log("Il codice vale per un 25% di sconto immediato!");
    } else {
        console.log("Il codice inserito non è valido!");
    }
}



