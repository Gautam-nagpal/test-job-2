export function convertValueFromPrice(price) {
    let remainingFrom = price > 100 ? price - 100 : 0;
    let remainingPoints = remainingFrom * 2;
    let overFifty = price >= 50 ? 50 : 0;
    return remainingPoints + overFifty;
}


export const randomNameGenerator = num => {
    let res = '';
    for (let i = 0; i < num; i++) {
        const random = Math.floor(Math.random() * 27);
        res += String.fromCharCode(97 + random);
    };
    return res;
};

