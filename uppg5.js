
function uppg5(a, b) {
    // skriv en if-sats som jämför två tal
    // om det första talet är större än det andra, skriv ut "Det första talet är större än det andra"
    // annars skriv ut "Det andra talet är större än det första"
    const tal1 = a;
    const tal2 = b;

    if (tal1 > tal2) {
        console.log("Det första talet är större än det andra");
    } else {
        console.log("Det andra talet är större än det första");
    }


}

uppg5(5, 10);
module.exports = { uppg5 };