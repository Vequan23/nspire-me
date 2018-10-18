import quotes from "./quotes.json";
import uniqueRandomArray from "unique-random-array";

export default {
    all: quotes,
    random: uniqueRandomArray(quotes)
};
