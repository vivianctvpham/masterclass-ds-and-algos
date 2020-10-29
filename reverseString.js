
function reverseString(str) {
    if (!str || str.length < 2 || typeof str != 'string') {
        return 'Hmm, that is not good';
    }

    let result = [];
    for (let i = str.length - 1; i >= 0; i--) {
        result.push(str[i]);
    }
    return result.join('');
}

function reverseString2(str) {
    return str.split('').reverse().join('');
}

const reverseString3 = str => str.split('').reverse().join('')

function main() {
    console.log(reverseString("Hi my name is Vivian"));
    console.log(reverseString2("Hi my name is Vivian"));
    console.log(reverseString3("Hi my name is Vivian"))
}

main();