class Taiyaki {
    constructor(taiyaki) {
        this.taiyaki = taiyaki;
    }
    an() {
        console.log(`中身は${this.taiyaki}です`);
    }
}
let anko = new Taiyaki('あんこ');
let cream = new Taiyaki('クリーム');
let cheese = new Taiyaki('チーズ');

anko.an();
cream.an();
cheese.an();