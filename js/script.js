// FUNCTION DECLARATION

const generateTemplateToPrint = (card) => {

    // Conditions for printing

    let isKindOf;

    if (card.kindOf) {
        isKindOf = "- " + card.kindOf;
    } else {
        isKindOf = "";
    }

    let contentAbilities;

    contentAbilities = `<ul>
<li>Descrizione Abilità: ${card.abilities.description}</li>                        
`;

    if (card.abilities.flavorText) {
        contentAbilities += `
                            <li>Testo di Colore: <em>${card.abilities.flavorText}</em></li>                      
                            `;
    }
    contentAbilities += `</ul>`

    cardToPrint = `
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
            <li>Immagine dell'illustrazione: <div class="img-container img-fluid"><img src="${card.illustration.linkPic}"></div></li>    
        </ul>  
    </li>
</ul>
`;
    return cardToPrint;
}

// GET ELEMENT FROM HTML
const displayCard = document.getElementById("magic-card");

// ARRAY "DECK" of OBJECT "CARD"
const deck = [{
    id: 1,
    borderCard: "#000",
    nome: "Archangel of Thune",
    launchCost: ["3", "W", "W"],
    typeOf: "Creature",
    kindOf: "Angel",
    expansion: {
        nameOfExpansion: "Double Masters",
        rarity: "Golden",
        reprintId: 1,
        collectionNr: "5",
        totalCards: "332",
    },
    abilities: {
        description: "Flying, lifelink. Whenever you gain life, put a +1/+1 counter on each creature you control.",
        flavorText: "Even the wicked have nightmares.",
    },
    illustration: {
        author: "James Ryman",
        linkPic: "",
    },
    strenght: 3,
    constitucion: 4,
    backgroundCard: "beige",
}, {
    id: 2,
    borderCard: "#000",
    nome: "Arborea Pegasus",
    launchCost: ["3", "W"],
    typeOf: "Creature",
    kindOf: "Pegasus",
    expansion: {
        nameOfExpansion: "Adventures in the Forgotten Realms",
        rarity: "Common",
        reprintId: 1,
        collectionNr: "2",
        totalCards: "281",
    },
    abilities: {
        description: "When Arborea Pegasus enters the battlefield, target creature gets +1/+1 and gains flying until end of turn",
        flavorText: "The noble steeds of the elven gods can sometimes be persuaded to allow mere mortals on thei backs",
    },
    illustration: {
        author: "Justyna Gil",
        linkPic: "",
    },
    strenght: 2,
    constitucion: 3,
    backgroundCard: "beige",
}, {
    id: 3,
    borderCard: "#000",
    nome: "Devoted Paladin",
    launchCost: ["4", "W"],
    typeOf: "Creature",
    kindOf: "Orc Knight",
    expansion: {
        nameOfExpansion: "Adventures in the Forgotten Realms",
        rarity: "Common",
        reprintId: 1,
        collectionNr: "11",
        totalCards: "281",
    },
    abilities: {
        description: "Beacon of Hope -- When Devoted Paladin enter the battlefield, creatures you control get +1/+1 and gain vigilance untile end of turn.",
        flavorText: "I swore a sacred oath to protect the weak and punish those who treathen them. As long as I draw breath, I will protect you.",
    },
    illustration: {
        author: "Chris Ralles",
        linkPic: "",
    },
    strenght: 4,
    constitucion: 4,
    backgroundCard: "beige",
}]



// TO PRINT IN HTML

let cardToPrint = "";


// TO PRINT ARRAY IN HTML

const generateDeckTemplate = (deck) => {
    let deckTemplate = "";
    for (var i = 0; i < deck.length; i++) {
        let currentCard = deck[i];
        deckTemplate += generateTemplateToPrint(currentCard);
    }
    return deckTemplate;
}

displayCard.innerHTML = generateDeckTemplate(deck);


// GET ELEMENT FROM HTML FILTER FORM

let selectElement = document.getElementById("select");
let inputElement = document.getElementById("user-request");
let buttonFormElement = document.getElementById("button");


buttonFormElement.addEventListener("click", () => {

    // TODO rifare la parte relativa all'opzione selezionata e sparisce l'inputElement(d-none)

    /* selectElement.addEventListener("change", () => {
        inputElement.classList.remove("d-none");
    })
    inputElement.classList.add("d-none"); */

    // GET ELEMENT VALUE FROM INPUT
    let selectValue = selectElement.value;
    console.log(selectValue);
    let inputValue = inputElement.value;
    console.log(inputValue);

    // FILTER LOGIC

    let filteredCards = [];

    // Ciclo for per girare in array principale di oggetti "DECK"

    for (var i = 0; i < deck.length; i++) {
        let currentCard = deck[i];



        // Confronto con switch la presenza o meno dell'elementValue con le proprietà interne all'array di oggetti "DECK"
        /* 
                if (inputValue == currentCard[selectValue]) {
                    console.log("ha funzionato");
                }  */



        switch (selectValue) {
            case "nome":
                if (inputValue == currentCard[selectValue]) {
                    filteredCards.push(currentCard);
                }
            case "id":
                if (inputValue == currentCard[selectValue]) {
                    console.log("HA FUNZIONATO");
                    filteredCards.push(currentCard);
                }
            case "launchCost":
                if (currentCard[selectValue].includes(inputValue)) {
                    console.log("HA FUNZIONATO ARRAY");
                    filteredCards.push(currentCard);
                }
        }
        console.table(filteredCards);
        displayCard.innerHTML = generateDeckTemplate(filteredCards);
    }
















});
