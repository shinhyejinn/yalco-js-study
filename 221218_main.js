const month = 5;
let season = '';

if(month <= 3){
  season = '1분기 입니다'
} else if(month <= 6){
  season = '2분기 입니다'
} else if(month <= 9){
  season = '3분기 입니다'
} else if(month <= 12){
  season = '4분기 입니다'
} else{
  season = '잘못된 월 입니다.'
}

console.log(season);

//[].includes() >> 괄호 안의 변수가 배열안의 값을 가지고 있다면 true 반환

const lunch = {
  name : '짬뽕',
  taste : '매콤한맛',
  cal : 534,
  hot : true
}

for(const key in lunch){
  console.log(key, ':' , lunch[key])
}

// 함수 선언
//1.기본
function add(x, y){
  return x + y;
}

console.log(add(2, 3));

//2. 상수나 변수에 대입
const subt = function(x, y){
  return x - y;
}

console.log(subt(5, 4));

//기존 함수 재정의도 가능
add = function(x,y){
  console.log(`${x}와 ${y}를 더한다`)
  return x + y;
}

console.log(add(4, 5));

//3. 화살표 함수 
//> 한 줄 안에 값만 변환 하기 > function, return 없음
const multy = (x, y) => x * y;

console.log(multy(2, 4));

//두 줄 이상의 작업 시
const mult = (x, y) => {
  console.log(`${x}랑 ${y}곱하기`)
  return x * y;
}

console.log(mult(5, 10));

//인자가 하나일 때는 괄호 없이 선언 가능
//x ** 2 == x를 2제곱
const pow = x => x ** 2
console.log(pow(3))

//함수명에 is는 무언가를 판별하는 것?
//함수를 다른 변수에 할당하기
function isOddNum(number) {
  // console.log((number % 2 ? '홀' : '짝') + '수 입니다.')
  return number % 2 ? '홀' : '짝';
};

const check = isOddNum; //뒤에 괄호 없이 할당할 것(괄호 있으면 함수 실행임)

console.log(check(4)+'수 입니다')

//객체 안에 함수프로퍼티 넣기
let person = {
  name : '혜진',
  age : 28,
  //함수명 지정하지 않음. key값이 함수명을 대신한다.
  intro : function(duce){
    return duce ? 'ㅎㅇㅎㅇ' : 'ㅇㄴㅇㄴ'
  }
}

console.log(person.intro(true));
console.log(person.intro(false));

let person2 = {
  name : '신혜진',
  age : 28,
  married : true,
  //this는 함수를 포함하고 있는 객체를 가리킨다
  intro : function(){
    return `제 이름은 ${this.name}, 나이는 ${this.age}세이고, ${this.married ? '기혼' : '미혼'}입니다`;
  }
}
console.log(person2.intro());

//배열에 함수 담아서 for문으로 반복하기
let math = [
  (a, b) => a + b,
  (a, b) => a - b,
  (a, b) => a / b,
  (a, b) => a * b,
]

//배열을 for문에서 쓸 땐 변수명(내맘대로 지정) of 배열명
for(key of math){
  console.log(key(10, 5))
}

//콜백함수
let list = [1,2,3,4,5]
function doArray(array, func) {
  for(item of array){
    func(item)
  }
}
doArray(list, console.log);

//익명함수 : 변수나 상수에 할당되지 않아 이름이 없음
function doTimes (func, repeat, x, y) {
  let result = x;
  for(i = 0; i < repeat; i++){
    result = func(result, y);
  }
  return result;
}

console.log(
  doTimes((x, y) => x * y, 3, 5, 2),
  doTimes((x, y) => x + y, 3, 5, 2)
)

//calc
const add2 = (a, b) => a + b;
const subtr = (a, b) => a - b;
const multi = (a, b) => a * b;

//eval
//!!는 boolean으로 형변환을 시켜줌
const isOdd = (number) => !!(number % 2);
const isPo = (number) => number > 0;

function calcAndEval(calc, eval, x, y){
  return eval(calc(x, y));
}

console.log(
  calcAndEval(add2, isOdd, 5, 7),
  calcAndEval(subtr, isPo, 5, 7),
  calcAndEval(multi, isOdd, 5, 7)
)

//결과값으로 반환
function getIntro(name, formal){
  return formal 
  ? function() {
    console.log(`안녕하세요, ${name}입니다.`)
  } : function(){
    console.log(`안뇽안뇽, ${name}이에요.`)
  }
}

const jang = getIntro('젠틀맨인척하는 장진영', true);
const shin = getIntro('웅꾸', false);

jang();
shin();

//함수에 함수를 담긔
const add3 = (a, b) => a + b;
const sub2 = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

function comb(arm1, arm2, arm3){
  return(x, y) => arm3(arm2(arm1(x, y), y), y);
}

const add_mul_sub = comb(add3, mul, sub2);
const mul_add_div = comb(mul, add3, div);
const div_add_mul = comb(div, add3, mul);

console.log(
  add_mul_sub(10, 4),
  mul_add_div(10, 4),
  div_add_mul(10, 4)
)


