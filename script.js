/* ==========================
   GASTERPZ
   SCRIPT.JS
========================== */


const tg = window.Telegram.WebApp;

tg.expand();


let cart = [];

let total = 0;



/* ==========================
   PAGINE
========================== */


function hideAllPages() {

    document.getElementById("home").style.display = "none";


    document.querySelectorAll(".page").forEach(page => {

        page.style.display = "none";

    });

}



function openPage(category) {

    hideAllPages();


    document.getElementById(category).style.display = "block";

}



function goHome() {


    document.querySelectorAll(".page").forEach(page => {

        page.style.display = "none";

    });


    document.getElementById("home").style.display = "block";

}



/* ==========================
   CARRELLO
========================== */


function toggleCart() {


    document
    .getElementById("cartPanel")
    .classList
    .toggle("open");


}



function addToCart(product, price) {


    cart.push({

        nome: product,

        prezzo: price

    });



    total += price;



    document.getElementById("cartCount").innerHTML = cart.length;



    document.getElementById("cartItems").innerHTML +=

    "<p>" + product + " - €" + price + "</p>";



    document.getElementById("cartTotal").innerHTML =

    "Totale €" + total;


}



/* ==========================
   PRODOTTI
========================== */


const prodotti = {


    weed: [

        {nome: "Weed", quantita: ["20g", "50g", "100g", "500g", "1000g"]}

    ],


    frozen: [

        {nome: "Frozen/Static", quantita: ["20g", "50g", "100g", "500g", "1000g"]}

    ],


    dry: [

        {nome: "Dry", quantita: ["20g", "50g", "100g", "500g", "1000g"]}

    ],


    extract: [

        {nome: "Extract", quantita: ["20g", "50g", "100g", "500g", "1000g"]}

    ],


    vape: [

        {nome: "Vape", quantita: ["1 pezzo", "3 pezzi", "5 pezzi"]}

    ]


};




function apriCategoria(categoria) {


    const contenuto = document.getElementById("prodotti");


    if(!contenuto) return;



    contenuto.innerHTML = "";



    prodotti[categoria].forEach(prodotto => {



        let box = document.createElement("div");


        box.className = "prodotto";



        box.innerHTML = `

        <h3>${prodotto.nome}</h3>


        <div class="quantita">

        ${prodotto.quantita.map(q => `

        <button>

        ${q}

        </button>


        `).join("")}

        </div>

        `;



        contenuto.appendChild(box);



    });


}



/* ==========================
   ORDINE TELEGRAM
========================== */


function inviaOrdine() {


    if(cart.length === 0) {


        alert("Il carrello è vuoto");


        return;


    }



    let messaggio = "Ciao, vorrei ordinare:%0A";



    cart.forEach(item => {


        messaggio +=

        item.nome + " €" + item.prezzo + "%0A";


    });



    messaggio +=

    "Totale: €" + total;



    const username = "Gasterpzzz";



    window.open(

        "https://t.me/" +

        username +

        "?text=" +

        messaggio

    );


}
