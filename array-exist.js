function megaFriend(friends) {

    if (Array.isArray(friends) == false) {
        return "plase provid an array";
    }
    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > friends.length) {
            mega = friend;
        }
    }
    return mega;
}
const friends = ["kalam", "alam", "salam", "balam"];

const myBigbuddy = megaFriend(123);
// console.log(myBigbuddy);


// indexOf
if (friends.indexOf("kalam") != -1) {
    console.log("kalam is exists");
}

// includes

if (friends.includes("kalam")) {
    console.log("kalam exists using includes");
}





