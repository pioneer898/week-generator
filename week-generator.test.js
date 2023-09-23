const WeekGenerator = require('./week-generator');

test('handles months',()=>{
  const wg = new WeekGenerator('2023-09-01');
  expect(wg.next()).toBe('2023-09-08');
  expect(wg.next()).toBe('2023-09-15');
  expect(wg.next()).toBe('2023-09-22');
  expect(wg.next()).toBe('2023-09-29');
  expect(wg.next()).toBe('2023-10-06');
  expect(wg.next()).toBe('2023-10-13');
  expect(wg.next()).toBe('2023-10-20');
  expect(wg.next()).toBe('2023-10-27');
  expect(wg.next()).toBe('2023-11-03');
  expect(wg.next()).toBe('2023-11-10');
  expect(wg.next()).toBe('2023-11-17');
});

test('handles new year',()=>{
  const wg = new WeekGenerator('2023-12-01');
  expect(wg.next()).toBe('2023-12-08');
  expect(wg.next()).toBe('2023-12-15');
  expect(wg.next()).toBe('2023-12-22');
  expect(wg.next()).toBe('2023-12-29');
  expect(wg.next()).toBe('2024-01-05');
});

test('handles february on non-leap year',()=>{
  const wg = new WeekGenerator('2023-02-03');
  expect(wg.next()).toBe('2023-02-10');
  expect(wg.next()).toBe('2023-02-17');
  expect(wg.next()).toBe('2023-02-24');
  expect(wg.next()).toBe('2023-03-03');
  expect(wg.next()).toBe('2023-03-10');
});

test('handles february on leap year',()=>{
  const wg = new WeekGenerator('2024-02-02');
  expect(wg.next()).toBe('2024-02-09');
  expect(wg.next()).toBe('2024-02-16');
  expect(wg.next()).toBe('2024-02-23');
  expect(wg.next()).toBe('2024-03-01');
  expect(wg.next()).toBe('2024-03-08');
});

test('handles 100 not leap year',()=>{
  const wg = new WeekGenerator('1900-02-02');
  expect(wg.next()).toBe('1900-02-09');
  expect(wg.next()).toBe('1900-02-16');
  expect(wg.next()).toBe('1900-02-23');
  expect(wg.next()).toBe('1900-03-02');
  expect(wg.next()).toBe('1900-03-09');
});

test('handles 400 leap year',()=>{
  const wg = new WeekGenerator('2000-02-04');
  expect(wg.next()).toBe('2000-02-11');
  expect(wg.next()).toBe('2000-02-18');
  expect(wg.next()).toBe('2000-02-25');
  expect(wg.next()).toBe('2000-03-03');
});

test('test start method',()=>{
  const wg = new WeekGenerator('2024-02-02');
  for(let i=0;i<10;i++){
    wg.next();
  }
  expect(wg.start()).toBe('2024-02-02')
});

test('test end method',()=>{
  const wg = new WeekGenerator('2024-02-02');
  for(let i=0;i<10;i++){
    wg.next();
  }
  expect(wg.end()).toBe('2024-04-12')
});