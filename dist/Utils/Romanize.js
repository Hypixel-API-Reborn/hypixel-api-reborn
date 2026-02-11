export default function Romanize(num) {
    const digits = String(Number(num)).split('');
    const key = [
        '',
        'C',
        'CC',
        'CCC',
        'CD',
        'D',
        'DC',
        'DCC',
        'DCCC',
        'CM',
        '',
        'X',
        'XX',
        'XXX',
        'XL',
        'L',
        'LX',
        'LXX',
        'LXXX',
        'XC',
        '',
        'I',
        'II',
        'III',
        'IV',
        'V',
        'VI',
        'VII',
        'VIII',
        'IX'
    ];
    let roman = '';
    let i = 3;
    while (i--) {
        roman = (key[Number(digits.pop()) + i * 10] || '') + roman;
    }
    return Array(Number(digits.join('') + 1)).join('M') + roman;
}
//# sourceMappingURL=Romanize.js.map