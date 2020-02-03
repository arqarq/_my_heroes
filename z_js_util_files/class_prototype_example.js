const Klasa = function (p = 'ghi') {
    this.a = p;

    this.new = function (p = 'mno') {
        return this.a + ' ' + p
    }
};

const inst1 = new Klasa('abc');
const inst2 = new Klasa('def');
const inst3 = new Klasa();
console.log('prototypy przed:', inst1.proto + ',', inst2.proto + ',', inst3.proto);
Klasa.prototype.proto = 'string w prototypie';
console.log(inst1.a + ',', inst1.proto);
console.log(inst2.a + ',', inst2.proto);
console.log(inst3.a + ',', inst3.proto);
console.log(inst1.new('jkl'));
console.log(inst1.new());
