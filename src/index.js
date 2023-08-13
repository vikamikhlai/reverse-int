module.exports = function reverse (n) {
    let arr = n.toString().split('');
    if(arr[0] === '-') arr.shift();
    return Number(arr.reverse().join(''));
}
