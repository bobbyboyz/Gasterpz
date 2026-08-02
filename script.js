
// GasTerpz Mini App

const app = document.getElementById("app");

const categorie = [
    {
        nome: "🌿 Weed",
        id: "weed"
    },
    {
        nome: "⚡️🧊 Frozen/Static",
        id: "frozen"
    },
    {
        nome: "🍯 Estrazioni",
        id: "estrazioni"
    },
    {
        nome: "🍫 Dry Work",
        id: "dry"
    },
    {
        nome: "💨 Vape Pen",
        id: "vape"
    }
];


function avviaApp() {

    app.innerHTML = `
        <div class="card">
            <h1>🔥 GasTerpz</h1>
            <p>Benvenuto nella nostra Mini App</p>

            <div class="menu">
                ${categorie.map((cat) => `
                    <button onclick="mostra prodotti('${cat.id}')">
                        ${cat.nome}
                    </button>
                `).join("")}
            </div>

        </div>
    `;

}


function apriCategoria(id) {

    let categoria = categorie.find(cat => cat.id === id);

    app.innerHTML = `
        <div class="card">

            <h2>${categoria.nome}</h2>

            <p>Seleziona il prodotto disponibile</p>

            <button onclick="tornaHome()">
                ⬅️ Torna indietro
            </button>

        </div>
    `;

}


function tornaHome() {
    avviaApp();
}


avviaApp();

// GasTerpz Mini App

const app = document.getElementById("app");

const categorie = [
    {
        nome: "🌿 Weed",
        id: "weed"
    },
    {
        nome: "⚡️🧊 Frozen/Static",
        id: "frozen"
    },
    {
        nome: "🍯 Estrazioni",
        id: "estrazioni"
    },
    {
        nome: "🍫 Dry Work",
        id: "dry"
    },
    {
        nome: "💨 Vape Pen",
        id: "vape"
    }
];


function avviaApp() {

    app.innerHTML = `
        <div class="card">
            <h1>🔥 GasTerpz</h1>
            <p>Benvenuto nella nostra Mini App</p>

            <div class="menu">
                ${categorie.map((cat) => `
                    <button onclick="apriCategoria('${cat.id}')">
                        ${cat.nome}
                    </button>
                `).join("")}
            </div>

        </div>
    `;

}


function apriCategoria(id) {

    let categoria = categorie.find(cat => cat.id === id);

    app.innerHTML = `
        <div class="card">

            <h2>${categoria.nome}</h2>

            <p>Seleziona il prodotto disponibile</p>

            <button onclick="tornaHome()">
                ⬅️ Torna indietro
            </button>

        </div>
    `;

}


function tornaHome() {
    avviaApp();
}


avviaApp();

// GasTerpz Mini App

const app = document.getElementById("app");

const categorie = [
    {
        nome: "🌿 Weed",
        id: "weed"
    },
    {
        nome: "⚡️🧊 Frozen/Static",
        id: "frozen"
    },
    {
        nome: "🍯 Estrazioni",
        id: "estrazioni"
    },
    {
        nome: "🍫 Dry Work",
        id: "dry"
    },
    {
        nome: "💨 Vape Pen",
        id: "vape"
    }
];


function avviaApp() {

    app.innerHTML = `
        <div class="card">
            <h1>🔥 GasTerpz</h1>
            <p>Benvenuto nella nostra Mini App</p>

            <div class="menu">
                ${categorie.map((cat) => `
                    <button onclick="apriCategoria('${cat.id}')">
                        ${cat.nome}
                    </button>
                `).join("")}
            </div>

        </div>
    `;

}


function apriCategoria(id) {

    let categoria = categorie.find(cat => cat.id === id);

    app.innerHTML = `
        <div class="card">

            <h2>${categoria.nome}</h2>

            <p>Seleziona il prodotto disponibile</p>

            <button onclick="tornaHome()">
                ⬅️ Torna indietro
            </button>

        </div>
    `;

}


function tornaHome() {
    avviaApp();
}


avviaApp();
