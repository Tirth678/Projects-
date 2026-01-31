// 1. **Sum values in object arrays**
//     - Input:
        
//         ```jsx
//         { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }
        
//         ```
        
//     - Output:
        
//         ```jsx
//         { food: 60, travel: 20, bills: 100 }
        
//         ```

const data = {
    food: [10,20,30],
    travel: [5,15],
    bills: [40,60]
}
const sumValues = (arr) => {
    let totalCount = {};
    for (const key in obj){ // to iterate over an object using for in...
        let sum = 0;
        for(let i=0; i<arr[key].length; i++){
            sum += arr[key][i];
        }
        totalCount[key] = sum;
    }
    return totalCount;
}
console.log(sumValues(data));