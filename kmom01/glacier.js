/* const value = 25
const text = `lite text`
let newValue = value + 15

newValue += 2

console.log(value)
console.log(text)
console.log(newValue) */
const startår = 2000;
let under_row = ''
let firstRow = ['Year', 'Melt rate (m)', 'Sea level (mm)']

let meltrate = 0.36
const meltperyear = 0.0173
let sealevel = 0
const sealevelchange = 0.756

console.log(startår)
console.log(...firstRow)
console.log(under_row)
for(let i=1; i<50; i++ ) { under_row += '-'}
console.log(under_row)

for (let year=2000; year<2020; year++){

    console.log(year +'        '+ meltrate.toFixed(3)+'        ' + sealevel.toFixed(3)) ;
    meltrate += (meltperyear);
    sealevel += (sealevelchange);
}

/* const calculate(<endYear>, <logRate>) */
    
