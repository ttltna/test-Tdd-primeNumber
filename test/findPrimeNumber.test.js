// const sum = require('./sum');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

import { notPrimeNumber, checkPrimeNumber, countPrimeNumber, checkSqrt, rangeSqrt, lowNumCheck } from "../src/findPrimeNumber.js"

/* 2미만의 수 확인 */
test(`1는(은) 소수일 수 없습니다.`, () => {
  expect(notPrimeNumber(1)).toEqual(`1는(은) 소수일 수 없습니다.`);
});
test(`2는(은) 소수일 수 있습니다.`, () => {
  expect(notPrimeNumber(2)).toEqual(`2는(은) 소수일 수 있습니다.`);
});

/* 소수 판별 */
test("2는 소수입니다.", () => {
  expect(checkPrimeNumber(2)).toEqual("2는(은) 소수입니다.");
});
test("3는 소수입니다.", () => {
  expect(checkPrimeNumber(3)).toEqual("3는(은) 소수입니다.");
});
test("4는 소수가 아닙니다.", () => {
  expect(checkPrimeNumber(4)).toEqual("4는(은) 소수가 아닙니다.");
});

/* 1 ~ num 사이 소수의 갯수 */
test("1부터 5사이에 있는 소수의 개수는 3개입니다.", () => {
  expect(countPrimeNumber(5)).toEqual(3);
});
test("1부터 10사이에 있는 소수의 개수는 4개입니다.", () => {
  expect(countPrimeNumber(10)).toEqual(4);
});
/* 루트가 되는지 루트값이 맞는지 확인 */
test("4의 루트값은!", () => {
  expect(checkSqrt(4)).toBe(2);
});
test("16의 루트값은!", () => {
  expect(checkSqrt(16)).toBe(4);
});

/* 루트값만큼 순회하는지 확인 */
test("100입력시 10번만 도는지 확인!", () => {
  expect(rangeSqrt(120)).toBe(10);
});

/* */
test("1과 3사이의 소수 갯수는", () => {
  expect(lowNumCheck(10000)).toBe(1229);
});
// 1. 소수찾기
// 2. 소수의 배수는 무시
// 3. 

// toBe(a) // 예상한 값이 매개변수와 같은 값일 것인지 확인합니다.
// toEqual(obj) // 매개변수(객체)와 같은 값일 것이라 예상합니다. 객체가 가진 값의 비교가 가능합니다.
// not.toBe(a) // 뒤의 결과를 부정하는 값과 비교합니다.

// toBeNull() // 예상한 값이 null 인지 확인합니다.
// toBeUndefined() // 예상한 값이 undefined 인지 확인합니다.
// toBeDefined() // 예상한 값이 undefined 가 아닌지 확인합니다.
// toBeTruthy() // 예상한 값이 truthy 한 값인지 확인합니다.
// toBeFalsy() // 예상한 값이 falsy 한 값인지 확인합니다.

// toBeGreaterThan(number); // number보다 큰 값인지 확인합니다.
// toBeGreaterThanOrEqual(number); // number보다 크거나 같은 값인지 확인합니다.
// toBeLessThan(number); // number보다 작은 값인지 확인합니다.
// toBeLessThanOrEqual(number); // number보다 작거나 같은 값인지 확인합니다.
// toBeCloseTo(float) // float인 매개변수와 같은 값인지 확인합니다. 부동소수점 에러를 해결하기 위해 고안되었습니다.

// toMatch(string) // string을 포함하는 문자열인지 확인합니다.
// toContain('item') // item을 포함하는 배열(iterator)인지 확인합니다.

// toThrow() // 예외를 발생시키는지 확인합니다.