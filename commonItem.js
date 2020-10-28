const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'a'];

function containsCommonItem (array1, array2) {

    
    // for (let i = 0; i < array1.length; i++) {
    //     for (let j = 0; j < array2.length; j++) {
    //         if (array1[i] === array2[j]) {
    //             return true;
    //         }
    //     }
    // }

    return false;
}

function main () {
    console.log(containsCommonItem(array1, array2));
}

main();