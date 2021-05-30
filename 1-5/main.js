function japanese() {
    console.log('おはよう');
    console.log('こんにちは');
    console.log('こんばんわ');
    console.log('日本語は時間帯によって挨拶が変わります');
    console.log('ひらがな');
    console.log('カタカナ');
    console.log('漢字');
    console.log('３種類も文字があります');
}

japanese();

function createJuice(fruits) {
    console.log(`${fruits}を受け取りました。ジュースにして返します`);
    return fruits += 'ジュース';
}

orangeJuice = createJuice('みかん');
console.log(`${orangeJuice}が届きました`);