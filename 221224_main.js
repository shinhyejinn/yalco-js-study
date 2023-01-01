//기본값 매개변수 : 받아오는 인자값이 없을 때 기본으로 설정해준 값을 출력
function add3(a = 1, b = 2) {
  console.log(`${a} + ${b}`)
  return a + b;
}

console.log(
  add3(),
  add3(2, 4)
);



// arguments - 함수 내에서 사용가능한 지역 변수(함수의 인자 수보다 많아도 사용 가능)
// 배열인 것 같지만 실제 배열은 아님

function add(a, b) {
  console.log('1.', arguments);
  console.log('2.', arguments[3]);
  console.log('3.', typeof arguments);

  return a + b;
}
console.log('4.', add(1, 3, 5, 7));

function getAverage() {
  let result = 0;
  for (const num of arguments) {
    result += num;
  }
  return result / arguments.length;
}

console.log(
  getAverage(1, 4, 7),
  getAverage(24, 31, 52, 88),
)

//타입에 안전한 버전
function getAverage2() {
  let result = 0,
    count = 0;
  for (const num of arguments) {
    if (typeof num !== 'number') continue;
    result += num;
    count++;
  }

  return result / count;
}

console.log(
  getAverage2(2, '가', 8, true, 5)
);


const add1 = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

function conbineArms() {
  return (x, y) => {
    let result1 = x;
    for (const arm of arguments) {
      if (typeof arm !== 'function') continue;
      result1 = arm(result1, y);
    }
    return result1;
  }
}

const add1_mul = conbineArms(add1, mul, 1, true);
const add1_mul_sub = conbineArms(add1, mul, sub);
const add1_mul_sub_div = conbineArms(add1, mul, sub, div);

const add1_mul_sub_div_pow = conbineArms(add1, mul, sub, div, (x, y) => x ** y);

console.log(
  add1_mul(8, 3),
  add1_mul_sub(8, 3),
  add1_mul_sub_div(8, 3),
  add1_mul_sub_div_pow(8, 3)
)

//나머지 변수 > 특정 매개변수들 뒤에 정해지지 않은 수의 매개변수들을 받을 때, 마지막 인자로 사용 가능  
//arguments와 달리 실제 배열이다. 
//사용법 : ...변수 그룹명


console.log(
  '3.',
  classIntro(3, '김민지', '영희', '김철수', '연보라')
); //호이스팅

function classIntro(classNo, teacher, ...children) {
  console.log('1.', children),
    console.log('2', arguments);

  let childrenStr = '';
  for (const child of children) {
    if (childrenStr) childrenStr += ', ';
    childrenStr += child;
  }
  return `${classNo}반의 선생님은 ${teacher}, 학생들은 ${childrenStr}입니다.`
}

const add4 = (a, b) => a + b;
const sub2 = (a, b) => a - b;
const mul2 = (a, b) => a * b;
const div2 = (a, b) => a / b;

function doMultiArms(x, y, ...arms){
  let result2 = x;
  for(const arm2 of amrs){
    if (typeof arm2 !== 'function')continue;
    result2 = arm2(result2, y);
  }
  return result2;
}

console.log(
  doMultiArms(8, 3, add4, mul2, 1, ture),
  doMultiArms(8, 3, add4, mul2, sub2),
  doMultiArms(8, 3, add4, mul2, sub2, div2),
  doMultiArms(8, 3, add4, mul2, sub2, div2, (x, y) => x ** y)
)

//키의 동적 사용
