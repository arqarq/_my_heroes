function metoda(x) {
    console.log(x);
    return x();
}
function metoda2() {
    console.log(this);
    if (typeof this === 'function') {
        this();
    }
    else {
        console.log(this + 'test');
    }
}
var aa = function () {
    console.log('222');
};
console.log('--');
metoda2();
console.log('--');
metoda2.bind(aa)();
console.log('--');
metoda2.bind(metoda(function () {
    console.log('Arek');
    return 'Arekk';
}))();
console.log('--');
var foo = Symbol('foo');
console.log(typeof foo);
var show7 = Boolean('');
console.log(show7);
var foo2 = Symbol["for"]('foo2');
console.log(foo2);
console.log(Symbol.keyFor(foo2));
console.log(foo2.toString());
var obj = {};
obj[Symbol["for"]('sym')] = false;
obj[Symbol["for"]('sym2')] = true;
console.log(obj[Symbol["for"]('sym')]);
console.log(obj[Symbol["for"]('sym2')]);
obj[Symbol["for"]('sym')] = foo2;
console.log(obj[Symbol["for"]('sym')].toString());
console.log(Symbol.keyFor(obj[Symbol["for"]('sym')]));
