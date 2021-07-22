const displayCard = document.getElementById("magic-card");


var card = {
    borderCard: "#000",
    nome: "Archangel of Thune",
    launchCost: ["3", "W", "W"],
    typeOf: "Creature",
    kindOf: "Angel",
    expansion: {
        nameOfExpansion: "Double Masters",
        rarity: "Golden",
        reprintId: 1,
        collectionNr: "005",
        totalCards: "332",
    },
    abilities: {
        description: "Flying, lifelink. Whenever you gain life, put a +1/+1 counter on each creature you control.",
        flavorText: "Even the wicked have nightmares.",
    },
    illustration: {
        author: "James Ryman",
        linkPic: "img/pic.jpg"
    },
    strenght: 3,
    constitucion: 4,
    backgroundCard: "beige",
}

console.table(card);


// TO PRINT IN HTML

let cardToPrint = "";


// Conditions for printing

let isKindOf;

if (card.kindOf) {
    isKindOf = "- " + card.kindOf;
} else {
    isKindOf = "";
}

let contentAbilities;

if (card.abilities.flavorText) {
    contentAbilities = `<ul>
                            <li>Descrizione Abilità: ${card.abilities.description}</li>
                            <li>Testo di Colore: ${card.abilities.flavorText}</li>
                        </ul>                          
                            `;
} else {
    contentAbilities = `<ul>
                            <li>Descrizione Abilità: ${card.abilities.description}</li>
                        </ul>                          
    `;
}

cardToPrint =

    `
<ul>
    <li class="list-group-item"> Nome Carta: ${card.nome}</li>
    <li class="list-group-item"> Costo di Evocazione: ${card.launchCost}</li>
    <li class="list-group-item"> Colore Bordo della Carta: ${card.borderCard}</li>
    <li class="list-group-item"> Tipologia di Carta: ${card.typeOf} ${isKindOf}</li>
    <li class="list-group-item"> Espansione Carta:
        <ul>
            <li>Nome espansione: ${card.expansion.nameOfExpansion}</li>
            <li>Rarità Carta: ${card.expansion.rarity}</li>
            <li>Ristampa: ${card.expansion.reprintId}</li>
            <li>Numero della Collezione ${card.expansion.collectionNr}/${card.expansion.totalCards}</li>
        </ul>
    </li>
    <li class="list-group-item"> Abilità: ${contentAbilities}</li>
    <li class="list-group-item">Forza: ${card.strenght}</li>
    <li class="list-group-item">Costituzione: ${card.constitucion}</li>
    <li class="list-group-item">Sfondo della Carta: ${card.backgroundCard}</li>
    <li class="list-group-item">Illustrazione della Carta:
        <ul>
            <li>Nome dell'autore: ${card.illustration.author}</li>
            <li>Immagine dell'illustrazione: <div class="img-fluid"><img src="${card.illustration.linkPic}"></div></li>    
        </ul>  
    </li>
</ul>
`

displayCard.innerHTML = cardToPrint;