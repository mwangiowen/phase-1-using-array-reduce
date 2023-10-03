const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
let totalBatteries = batteryBatches.reduce(function(sum,ellement){
    return sum + ellement
},0)
console.log(totalBatteries)

// Code your solution here
