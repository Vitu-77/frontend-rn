const capitalize = (str) => {
    if (str) {
        const capitalizedArray = [];

        for (let index = 0; index < str.length; index++) {
            if (index === 0) {
                capitalizedArray.push(str.charAt(index).toUpperCase());
            }
            else {
                capitalizedArray.push(str.charAt(index).toLowerCase());
            }
        }

        for (let index = 0; index < capitalizedArray.length; index++) {
            if (capitalizedArray[index] === ' ' && capitalizedArray[index + 1]) {
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

    str = str.replace(/[ÀÁÂÃÄÅ]/, "A");
    str = str.replace(/[àáâãäå]/, "a");
    str = str.replace(/[ÈÉÊË]/, "E");
    str = str.replace(/[èéê]/, "e");
    str = str.replace(/[ÌÍ]/, "I");
    str = str.replace(/[ìí]/, "i");
    str = str.replace(/[ÒÓÔÕ]/, "O");
    str = str.replace(/[òóôõ]/, "o");
    str = str.replace(/[ÙÚÛ]/, "U");
    str = str.replace(/[ùúû]/, "u");
    str = str.replace(/[ç]/, "c");
    str = str.replace(/[Ç]/, "C");

    return str.trim();
}

const moneyFormatter = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
});

const toMoneyFormat = (amount) => moneyFormatter.format(amount);

export { capitalize, ignoreAcentuation, toMoneyFormat, moneyFormatter };