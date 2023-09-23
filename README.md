# week-generator-class
Simple class for finding the date exactly one week after the supplied date.

If the supplied date was a Friday, every subsequent next() would return the date of the next Friday

All dates are in 'yyyy-mm-dd' format.
## Usage
```js
const WeekGenerator = require('./week-generator.js');
const weekGenerator = new WeekGenerator('2023-09-22');
console.log( weekGenerator.next() ); // '2023-09-29'
console.log( weekGenerator.next() ); // '2023-10-06'
console.log( weekGenerator.start() ); // '2023-09-22' (First input)
console.log( weekGenerator.end() ); // '2023-10-06' (Last input)
```
