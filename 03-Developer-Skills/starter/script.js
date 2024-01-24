// Remember, we're gonna use strict mode in all scripts now!
// 'use strict';

// const measureKelvin = function(){
//     const measurement = {
//         type: 'temp',
//         unit : 'celsius',
//         value: prompt('Degrees celsius:')
//     };
//     console.log(measurement.value);
//     const kelvin = measurement.value + 273; 
//     return kelvin;
// }; 
// console.log(measureKelvin());

// const datal = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];
// console.log('... ${data1 [e]}°C ... $(data1[1])°C ... $ {datal [2]}°C...${data[2]c...`)};
// const printForecast = function (arr) {
// let str = '';
// for (let i = 0; i < arr.length; i++) {
// str = str + '${arr[1]}°C;
// }
// console.log(str);
// printForecast(data1);

let num = [2,3,4,6,7]

// let a = num.forEach((element)=>{
//     return element*element
// })

// let b = num.map((element)=>{
//     return element*element
// })
// console.log(a);
// console.log(b);

let c=num.map((e)=>!e)
let d=num.filter((e)=>false)
console.log(c)
console.log(d)