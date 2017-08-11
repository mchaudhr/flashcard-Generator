var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");
//
var firstPresident = new BasicCard("\nWho was the first president of the United States?", "George Washington");
var firstPresidentCloze = new ClozeCard("\nGeorge Washington was the first president of the United States", "George Washington");
var brokenCloze = new ClozeCard("\nThis doesn't work", "oops\n");

var operation = process.argv[2];
var argument = process.argv[3];

var question = "";
var answer = "";
var fullAnswer = "";

if (operation === "BasicCard") {

    question = firstPresident.front;
    answer = firstPresident.back;
    fullAnswer = answer;

        if (argument === "question") {
            console.log(question);
        } else if (argument === answer) {
            console.log("\nCorrect!");
            console.log(fullAnswer);
        } else {
            console.log("\n `Type 'question' or  'answer'\n");
        };

} else if (operation === "ClozeCard") {

    question    = firstPresidentCloze.partial + "?";
    answer      = firstPresidentCloze.cloze;
    fullAnswer  = firstPresidentCloze.fullText + ".";

        if (argument === "question") {
            console.log(question);
        } else if (argument === answer) {
            console.log("\nCorrect!");
            console.log(fullAnswer);
        } else if ((argument === undefined) && (argument !== answer) || (argument !== "question")) {
            console.log("\n `Type 'question' or  write answerin quotes\n");
        };

} else {
    console.log("\nChoose 'BasicCard' or 'ClozeCard'\n");
}