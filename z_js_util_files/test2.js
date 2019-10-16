function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
    console.log(a);
    console.log(b);
    console.log(wholeObject.b);
}
keepWholeObject({ a: 'Arek' });
