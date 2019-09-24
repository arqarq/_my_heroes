function keepWholeObject(wholeObject: {a: string, b?: number}) {
  const {a, b = 1001} = wholeObject;
  console.log(a);
  console.log(b);
  console.log(wholeObject.b);
}

keepWholeObject({a: 'Arek'});
