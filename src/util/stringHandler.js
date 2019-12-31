const capitalize = (str) => {
    if (str) {
        const newStr = str.replace(/,/g, '').replace(/_/g, ' ');
        const capitalizedArray = [];

        for (let index = 0; index < newStr.length; index++) {
            if (index === 0) {
                capitalizedArray.push(newStr.charAt(index).toUpperCase());
            }
            else {
                capitalizedArray.push(newStr.charAt(index).toLowerCase());
            }
        }

        for (let index = 0; index < capitalizedArray.length; index++) {
            if ((capitalizedArray[index] === ' '
                || capitalizedArray[index] === '-')
                && capitalizedArray[index + 1]) {
                capitalizedArray[index + 1] = capitalizedArray[index + 1].toUpperCase();
            }
        }

        return capitalizedArray.toString().trim().replace(/,/g, '');
    }
    else {
        return;
    }
}

const ignoreAcentuation = (str) => {

    str = str.replace(/[ÀÁÂÃÄÅ]/g, "A");
    str = str.replace(/[àáâãäå]/g, "a");
    str = str.replace(/[ÈÉÊË]/g, "E");
    str = str.replace(/[èéê]/g, "e");
    str = str.replace(/[ÌÍ]/g, "I");
    str = str.replace(/[ìí]/g, "i");
    str = str.replace(/[ÒÓÔÕ]/g, "O");
    str = str.replace(/[òóôõ]/g, "o");
    str = str.replace(/[ÙÚÛ]/g, "U");
    str = str.replace(/[ùúû]/g, "u");
    str = str.replace(/[ç]/g, "c");
    str = str.replace(/[Ç]/g, "C");

    return str.trim();
}

const toRequestFormat = (str) => {
    str = ignoreAcentuation(str);
    str = str.replace(/[- ]/g, '_');

    return str;
}

const moneyFormatter = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
});

const bigIntFormatter = new Intl.NumberFormat({ style: 'bigInt' });

const toMoneyFormat = (amount) => moneyFormatter.format(amount);
const toBigIntFormat = (number) => bigIntFormatter.format(number);

export { capitalize, ignoreAcentuation, toRequestFormat, toMoneyFormat, moneyFormatter, toBigIntFormat };