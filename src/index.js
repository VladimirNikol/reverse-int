module.exports = function reverse (n) {
	str = String(n);
	if (str[0] === "-"){
		str = String(+str * (-1));
		str = str.split('').reverse().join('');
		return str
	} else {
		return str.split('').reverse().join('')
	}
}
