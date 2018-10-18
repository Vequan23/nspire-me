var quotes = require("./quotes.json");
var uniqueRandomArray = require("unique-random-array");

modules.exports = {
    all: quotes,
    random: uniqueRandomArray(quotes)
};
