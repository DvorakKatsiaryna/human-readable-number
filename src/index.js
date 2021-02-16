module.exports = function toReadable(number) {
    const oneToNineteen = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const str = number.toString();
    if (number === 0) {
        return 'zero';
    }
    if (number < 20) {
        return oneToNineteen[number - 1];
    }
    if (str.length === 2) { 
       return Number(str[1]) === 0 
            ? tens[Number(str[0]) - 1]
            : `${tens[Number(str[0]) - 1]} ${oneToNineteen[Number(str[1]) - 1]}`;
    }
    if (str.length === 3) {
        if (Number(str[1]+str[2]) === 00) {
            return `${oneToNineteen[Number(str[0]) - 1]} hundred`;
        }
        if (Number(str[1]+str[2]) < 20) {
            return `${oneToNineteen[Number(str[0]) - 1]} hundred ${oneToNineteen[Number((str[1] + str[2]) - 1)]}`;
        }
        if (Number(str[2]) === 0) {
            return `${oneToNineteen[Number(str[0]) - 1]} hundred ${tens[Number(str[1] - 1)]}`;
        }
        return `${oneToNineteen[Number(str[0]) - 1]} hundred ${tens[Number(str[1]) - 1]} ${oneToNineteen[Number(str[2]) - 1]}`;
    } 
}
