const arrayString = ["melancia", "limão", "laranja", "maçã"]
    //    indices         0         1         2         3
    //   .length          4

const arrayNumber = [12, 45, 3]

const arrayMix = ["wallacy", 23, false]

const arrayUmValor = [3]

const arrayEmpty = []

console.log(arrayString.length);
console.log(arrayString[3]); 
console.log(arrayMix.includes(false));
console.log(arrayUmValor[0]);
console.log(arrayUmValor.length);

const copia = arrayString
copia.push("mamão")
console.log(copia);
// copia.pop() retira o ultimo array
copia.slice(2,3)
console.log(copia);


// const arrayNumber = [4,2,1,0,3,7,8,9]
// const copia = arrayNumber.slice();

// copia.pop()
// copia.push(6)
// copia.splice(2,1)
// console.log(arrayNumber);
// console.log(copia);