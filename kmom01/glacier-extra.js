const startår = 2000;
let slut_år = 2022
let under_row = ''
let firstRow = ['Year', 'Melt rate (m)', 'Sea level (mm)']

let meltrate = 0.36
const meltperyear = 0.0173
let sealevel = 0
const sealevelchange = 0.756

console.log(startår)
console.log(...firstRow)
console.log(under_row)
for (let i = 1; i < 50; i++) { under_row += '-' }
console.log(under_row)

for (let year = 2000; year < 2020; year++) {

    console.log(year + '        ' + meltrate.toFixed(3) + '        ' + sealevel.toFixed(3));
    meltrate += (meltperyear);
    sealevel += (sealevelchange);
}