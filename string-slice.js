const anthem = "Amar sonar Bangla Ami Tomai Valovashi";


// split
// const words = anthem.split(" ");
// console.log(words);

const withoutA = anthem.split("a");
console.log(withoutA);


// slice

const smallSlice = anthem.slice(5, 10);
console.log(smallSlice);

// substr

const anotherPart = anthem.substr(5, 5);


// substring

const otherPart = anthem.substring(0, 5);


const anotherword = ["N", "a", "h", "a", "r"];
const allJoin = anotherword.join("");
const allJoin = anotherword.join(" ");
const allJoin = anotherword.join(" ,");
const allJoin = anotherword.join(" , ");
const allJoin = anotherword.join(" , ");
const allJoin = anotherword.join(" xxx ");

console.log(allJoin);
