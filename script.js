const app = document.getElementById("app");

const categorie = [
    {
        nome: "🌿 Weed",
        immagine: "IMG_0933.png",
        prodotti: [
            "Weed Prodotto 1",
            "Weed Prodotto 2",
            "Weed Prodotto 3"
        ]
    },
    {
        nome: "❄️ Frozen",
        immagine: "IMG_0931.png",
        prodotti: [
            "Frozen Prodotto 1",
            "Frozen Prodotto 2",
            "Frozen Prodotto 3"
        ]
    },
    {
        nome: "🍯 Estrazioni",
        immagine: "",
        prodotti: [
            "Estrazione 1",
            "Estrazione 2",
            "Estrazione 3"
        ]
    },
    {
        nome: "🍫 Dry Work",
        immagine: "",
        prodotti: [
            "Dry Work 1",
            "Dry Work 2",
            "Dry Work 3"
        ]
    },
    {
        nome: "💨 Vape Pen",
        immagine: "",
        prodotti: []
    }
];


function home() {

    app.innerHTML = `

    <div class="card">

    <h1>🔥 GasTerpz</h1>

    <div class="menu">

    ${categorie.map((cat, index) => `

        <div class="product">

        ${
        cat.immagine 
        ? <img src="${cat.immagine}" class="categoria-img">
        : <div class="categoria-vuota">Foto presto</div>
        }

        <h3>${cat.nome}</h3>

        <button onclick="apriCategoria(${index})">
        Entra
        </button>

        </div>

    `).join("")}

    </div>

    </div>

    `;

} function apriCategoria(index) {

    let cat = categorie[index];


    if (cat.nome.includes("Vape")) {

        app.innerHTML = `

        <div class="card">

        <h2>${cat.nome}</h2>

        <p>Sezione Vape Pen</p>

        <button>
        Ordina
        </button>


        <button onclick="home()">
        ⬅ Torna indietro
        </button>

        </div>

        `;

        return;

    }


    app.innerHTML = `

    <div class="card">

    <h2>${cat.nome}</h2>


    <div class="menu">


    ${cat.prodotti.map((prodotto) => `


        <div class="product">


        <div class="categoria-vuota">
        Foto prodotto
        </div>


        <h3>${prodotto}</h3>


        <p class="price">
        Prezzo €
        </p>


        <button>
        Ordina
        </button>


        </div>


    `).join("")}


    </div>


    <button onclick="home()">
    ⬅ Torna indietro
    </button>


    </div>

    `;

} function ordine(nome) {

    alert("Hai selezionato: " + nome);

}


// Avvio Mini App

home();
