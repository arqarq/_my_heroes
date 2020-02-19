const aa = [];
for (let i = 0; i < 10; i++) {
  aa.push({a: i + 1})
}
const tab = aa.filter((value, index) => {
  value.index = index;
  return value.a === 5
})[0];
const index1 = tab.index;
aa.forEach((value) => delete value.index);
const index2 = aa.findIndex((value) => value.a === tab.a);
console.log((index1 === index2) + ',', aa, '\nindex of a === 5:', index1);
