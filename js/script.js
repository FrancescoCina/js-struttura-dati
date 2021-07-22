const displayCard = document.getElementById("magic-card");


var card = {
    borderCard: "#000",
    nome: "Bloodfire Colossus",
    launchCost: ["3", "W", "W"],
    typeOf: "Creature",
    kindOf: "Angel",
    expansion: {
        nameOfExpansion: "Double Masters",
        rarity: "golden",
        reprintId: 1,
        collectionNr: "005",
        totalCards: "332",
    },
    abilities: {
        description: "Flying, lifelink. Whenever you gain life, put a +1/+1 counter on each creature you control.",
        flavorText: "Even the wicked have nightmares.",
    },
    author: "James Ryman",
    strenght: 3,
    constitucio: 4,
    backgroundCard: "beige",
}

console.table(card);


// TO PRINT IN HTML

