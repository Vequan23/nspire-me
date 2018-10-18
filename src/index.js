var quotes = require("./quotes.json");
var uniqueRandomArray = require("unique-random-array");

module.exports = {
    all: quotes,
    random: uniqueRandomArray(quotes)
};
