Array.prototype.pushMethod = function (...value) {
	for (const el of value) {
		this[this.length] = el;
	}
	return this.length;
};

Array.prototype.mySliceMethod = function (begin, end) {
	begin = Math.max(begin, 0);
	end = Math.min(end, this.length);

	let sliced = [];

	if (end === undefined || end > this.length) {
		return (end = this.length);
	}

	for (let i = begin; i < end; i++) {
		sliced.pushMethod(this[i]);
	}
	return sliced;
};

let err = [33, 12, 65, 28, 14, 32];
let part = err.mySliceMethod(1, 3);

var fruits = ['Банан', 'Апельсин', 'Лимон', 'Яблоко', 'Манго'];
var citrus = fruits.mySliceMethod(1, 3);

console.log(citrus);
