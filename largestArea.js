function largestArea(samples) {
    if(!samples || !samples[0] || samples.length == 0) return 0
    
    let dp = [...samples];
    let max = 0;
    
    for( let row = 1; row < samples.length; row++) {
        for (let col = 1; col < samples[0].length; col++) {
            dp[row][col] === 1 ?
            dp[row][col] = Math.min(dp[row-1][col], dp[row][col-1], dp[row-1][col-1]) + 1 : null
            max = Math.max(max, dp[row][col])
        }
    }
    
    return max;

}

function main() {
    const samples = [[1,1,1,1,1], [1,1,1,0,0], [1,1,1,0,0], [1,1,1,0,0], [1,1,1,1,1]]
    const test0 = [[1,1,1],[1,1,0],[1,0,1]]
    const test1 = [[0,1,1], [1,1,0], [1,0,1]];
    const test2 = [[0,0,0], [0,0,0], [0,0,0]];
    const test3 = [ [ 1, 1, 1, 0, 1, 1, 1, 1, 1, 0 ],
    [ 1, 1, 1, 1, 1, 1, 1, 0, 1, 1 ],
    [ 1, 1, 1, 0, 1, 1, 1, 1, 1, 1 ],
    [ 1, 1, 1, 0, 1, 1, 1, 1, 1, 1 ],
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
    [ 1, 1, 1, 1, 0, 1, 1, 0, 1, 1 ],
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ] ];
    console.log(largestArea(samples)) // expected: 3
    console.log(largestArea(test0)) // expected: 2
    console.log(largestArea(test1)) // expected: 1
    console.log(largestArea(test2)) // expected: 0 
    console.log(largestArea(test3)) // expected: 4

}

main();