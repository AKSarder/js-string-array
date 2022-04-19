const numbers = [2, 1, 5, 4, 3, 6, 9, 7, 8];
// const sortedNumber = numbers.sort();
// console.log(sortedNumber);

const friends = ["kalam", "alam", "salam", "balam", "kali"];

// const sortedFriends = friends.sort();
// console.log(sortedFriends);

// const reversedFriends = friends.reverse();

// console.log(reversedFriends);

// const sortedReversedFriends = friends.sort().reverse();
// console.log(sortedReversedFriends);

// sorted fun 
const bigNumbers = [66, 58, 81, 92, 9, 6, 37, 13, 2];
const sortedBigNumbers = bigNumbers.sort(function (a, b) {
    return a - b;
});

console.log(sortedBigNumbers);
