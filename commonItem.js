const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'a'];

function containsCommonItem (array1, array2) {
    // Is it safe to assume we have two parameters every time?
    let tracker = {};

    for (let i = 0; i < array1.length; i++) {
        if (!tracker[array1[i]]) {
            let item = array1[i]
            tracker[item] = true;
        }
    }
    console.log(tracker)
    for (let j = 0; j < array2.length; j++) {
        if (array2[j] in tracker) {
            return true;
        } // Space Complexity: O(n), Time Complexity: O(n) --Time faster, but space not so great
    }    //With two loops NOT nested, better time solution
    
    // for (let i = 0; i < array1.length; i++) {
    //     for (let j = 0; j < array2.length; j++) {
    //         if (array1[i] === array2[j]) {
    //             return true;
    //         }
    //     }
    // } *** This is brute force // Space Complexity: O(n); Time Complexity: O(n^2)

    return false;
}

function main () {
    console.log(containsCommonItem(array1, array2));
}

main();