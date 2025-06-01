

function uppg6(){

    // Skapa en array med namn som du döper till names
    // Loopa igenom arrayen och skriv ut alla namn i konsolen


    const names = ["william", "kevin", "kaleb", "benny"];

    // Loopa igenom arrayen och skriv ut alla namn i konsolen
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}

uppg6();

module.exports = { uppg6 };