// Вивести на сторінку в один рядок через кому числа від 10 до 20
let result = '';
for (let a = 10; a <= 20; a += 1) {
    result =`${result} ${a},`;
}
console.log(result.slice(1,-1));

// Вивести квадрати чисел від 10 до 20
for (let x = 10; x <= 20; x += 1) {
  console.log(x * x);
}

// Вивести таблицю множення на 7
for (let b = 1; b <= 10; b += 1) {
    let mult = b * 7;
    let result = `${b} * 7 = ${mult}`
    console.log(result)
}

// Знайти суму всіх цілих чисел від 1 до 15
let sum = 0;
for (let c = 1; c <= 15; c += 1) {
    sum += c;
}
console.log(sum)

// Знайти добуток усіх цілих чисел від 15 до 35
let mult = 1;
for (let d = 15; d <= 35; d +=1 ) {
    mult *= d;
}
console.log(mult)

// Знайти середнє арифметичне всіх цілих чисел від 1 до 500
let sumOf500 = 0;
for (let e = 1; e <= 500; e += 1) {
    sumOf500 += e;
}
let sumResult = sumOf500 / 500;

console.log(sumResult);

// Вивести суму лише парних чисел в діапазоні від 30 до 80
let pairedSum = 0;
for (let x = 30; x <= 80; x +=2) {
    pairedSum += x;
}
console.log(pairedSum);

// Вивести всі числа в діапазоні від 100 до 200 кратні 3
for (let x = 100; x <= 300; x += 1 ) {
    if (x % 3 === 0) {
        console.log(x);
    }
}

// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// Визначити кількість його парних дільників
// Знайти суму його парних дільників
let userNumber = +prompt('Enter a number')
let dividers = '';
let amountDividers = 0;
let sumDividers = 0;

for (let g = 0; g <= userNumber; g += 1) {
    if (userNumber % g !== 0) continue;
    dividers = `${dividers} ${g},`
    if (g % 2 === 0) {
        amountDividers++
        sumDividers += g;
    }
}
console.log((dividers.slice(1,-1)));
console.log(amountDividers);
console.log(sumDividers);

// Надрукувати повну таблицю множення від 1 до 10
for (let x = 1; x <= 10; x += 1){
    for (let y = 1; y <= 10; y += 1) {
        let mult = x * y;
        let result = `${x} * ${y} = ${mult}`;
        console.log(result)
    }
}