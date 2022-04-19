function addNumbers(num1, num2) {

    // console.log(arguments[2]);

    // arguments.push(45);
    let result = 0;
    for (const num of arguments) {
        // console.log(num);
        result = result + num;
    }

    return result;
    // const result = num1 + num2;
    // return num1 + num2;
}

// const sum = addNumbers(23, 13, 10, 45, 9, 20);
// console.log(sum);


// another example 
function getFullName(firstName, lastName) {

    let fullName = '';
    for (const part of arguments) {
        fullName = fullName + part + " ";
    }
    return fullName;
}

const name = getFullName("omuk", "songket", "bin", "hanif", "songket", "bin", "tomuk", "songket");
console.log(name);