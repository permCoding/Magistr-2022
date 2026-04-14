const getRandomName = (len=8) => {
    let result = '';
    const alph = 'abcdefghijklmnopqrstuvwxyz';
    const alphLength = alph.length;
    for (let counter=0; counter<len; counter++) {
        result += alph.charAt(Math.floor(Math.random() * alphLength));
    }
    return result.charAt(0).toUpperCase() + result.slice(1);
}

const getRandomRate = (min, max) => {
    return Math.floor(min + Math.random() * (max-min));
}

module.exports = {
    getRandomName,
    getRandomRate
};
