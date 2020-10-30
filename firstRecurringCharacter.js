//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(input) {
    if (!input || input.length < 2) return undefined;

    let counter = {};
    let result;

    for (let i = 0; i < input.length; i++) {
        let number = input[i];
        if (counter[number]) {
            result = number;
            break;
        } else {
            counter[number] = 1;
        }
    }

    return result;

}

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

function main() {
    const array1 = [2,5,1,2,3,5,1,2,4];
    const array2 = [2,1,1,2,3,5,1,2,4];
    const array3 = [2,3,4,5];
    const array4 = [2,5,5,2,3,5,1,2,4]
    console.log(firstRecurringCharacter(array1)) // 2
    console.log(firstRecurringCharacter(array2)) // 1
    console.log(firstRecurringCharacter(array3)) // undefined
    console.log(firstRecurringCharacter(array4)) // 5

}

main();