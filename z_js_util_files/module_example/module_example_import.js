const B = require('./module_example_export');
const {C, E} = require('./module_example_export2');

console.log('a:', B.a, '/', 'c:', C, '/', 'e:', E());
