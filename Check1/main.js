let numbers = [2, 5, 12, 13, 15, 18, 22];
//ここに答えを実装してください。↓↓↓
for (let i = 0; i <= numbers.length; i++){
    if (numbers[i] % 2 === 0) {
        num = numbers[i];
        isEven();
    }   

    function isEven() {
        console.log(num + 'は偶数です');
    }
}

class Car {
    constructor(gass, num) {
        this.gass = gass;
        this.num = num;
    }
    getNumGass() {
        console.log(`ガソリンは${this.gass}です。ナンバーは${this.num}です`)
    }
}