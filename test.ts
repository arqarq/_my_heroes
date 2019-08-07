function metoda(x: () => string): string {
  console.log(x);
  return x();
}

function metoda2() {
  console.log(this);
  if (typeof this === 'function') {
    this();
  } else {
    console.log(this + 'test');
  }
}

let aa = () => {
  console.log('222');
};

console.log('--');
metoda2();
console.log('--');
metoda2.bind(aa)();
console.log('--');
metoda2.bind(metoda(() => {
  console.log('Arek');
  return 'Arekk';
}))();
console.log('--');

let foo = Symbol('foo');
console.log(typeof foo);
let show7 = Boolean<string>('');
console.log(show7);
let foo2 = Symbol.for('foo2');
console.log(foo2);
console.log(Symbol.keyFor(foo2));
console.log(foo2.toString());

let obj = {};
obj[Symbol.for('sym')] = false;
obj[Symbol.for('sym2')] = true;
console.log(obj[Symbol.for('sym')]);
console.log(obj[Symbol.for('sym2')]);
obj[Symbol.for('sym')] = foo2;
console.log(obj[Symbol.for('sym')].toString());
console.log(Symbol.keyFor(obj[Symbol.for('sym')]));
