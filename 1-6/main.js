//問１
let numbers = [10, 15, 20, 25];

for (let i=0; i<=numbers.length; i++) {
    if (numbers[i] % 2 === 0){
        console.log(`${numbers[i]}は偶数です`);
    }
}

//問２
let car = {gass: 20.5, num: 1234};

console.log(`ガソリンは${car.gass}です`);
console.log(`ナンバーは${car.num}です`);