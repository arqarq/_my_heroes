const aa = new Map()
aa.set(1, 'A')
aa.set(2, 'B')
aa.set(3, 'C')
aa.set(4, 'D')
console.log(aa.size)
console.log(aa.entries())
console.log(aa[Symbol.iterator]())
let it = aa[Symbol.iterator]();
console.log(it.next())

const bb = {1: 'A', 2: 'B', 3: 'C', 4: 'D'}
console.log(Object.entries(bb))
console.log(Object.entries(bb).length)
console.log(Object.values(bb).length)
bb['5'] = 'E'
console.log(Object.entries(bb))
console.log('-', Object.keys(bb))
console.log(Object.entries(bb).length)
console.log(Object.values(bb).length)

const regExp1 = new RegExp(/\d\d:\d\d:\d\d/)
console.log(regExp1.test('12:00:32'))
const regExp2 = new RegExp(/[^0-9]+:[^0-9]+:[^0-9]+/)
console.log(regExp2.test('12:00:32'))
const regExp3 = new RegExp(/[0,9]{2,}:[0,9]{2,}:[0,9]{2,}/)
console.log(regExp3.test('12:00:32'))
