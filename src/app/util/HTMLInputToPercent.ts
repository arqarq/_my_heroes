export function HTMLInputToPercent() {
  console.log('—', 'first custom decorator');
  return (target) => {
    target.word = (param) => console.log(param.toUpperCase());
    target.word2 = (par) => {
      return ((param) => console.log(param))(par.toUpperCase());
    };
    target.word3 = (par) => {
      ((param) => console.log(param))(par.toUpperCase());
    };
    target.word4 = (par) => {
      console.log(par.toUpperCase());
    };
    target.word5 = (par) => console.log(par.toUpperCase());
    target.weryfik = (p) => {
      Test.weryfik(p);
    };
  };
}

export function Decorator(decoratedClass) {
  console.log('—', decoratedClass.name);
}

export function Decorator2(message) {
  console.log('—', message);
  return (target) => console.log('—', '—', target.name);
}

export class Test {
  static weryfik(el: HTMLInputElement) {
    let val: any = el.value;
    if (/^[0-9]+\.$/.test(val)) {
      console.log('1. regex: ' + val);
      val = val.slice(0, -1);
    }
    val = +val;
    if (!(val > 0 && val < 101) || (val % 1 !== 0)) {
      console.log('2. zerowanie nullem: ' + val);
      el.value = null;
      return;
    }
    console.log('3. ok: ' + val);
    el.value = val + '';
  }
}
