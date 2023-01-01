const product1 = {
  name : '노트북',
  color : 'gray',
  price : 80000
}

function addModifyProperty(obj, key, value){
  //obj.key = value;    //의도와 다른 작업 수행
  obj[key] = value; 
}
function deleteProperty(obj, key){
  // delete.obj.key    //의도와 다른 작업 수행
  delete obj[key]; 
}

addModifyProperty (product1, 'inch', 16);
console.log(product1);

addModifyProperty (product1, 'price', 75000);
console.log(product1);

deleteProperty (product1, 'color');
console.log(product1);

//ES6 추가 문법
//1. 객체 선언 시 프로퍼티 키와 대입할 상수/변수명이 동일할 시 단축 표현

const x = 1, y = 2;
const obj1 = {
  x: x,
  y: y
}

console.log(obj1)

const obj2 = {x, y}
console.log(obj2)

//함수를 활용하여 객체 간단히 사용하기
function createProduct (name, price, quantity) {
  return{name, price, quantity};
}

const product2 = createProduct('선풍기', 5000, 50);
const product3 = createProduct('청소기', 30000, 40);

console.log(product2, product3);

//2. 메서드 method - 객체에 축약 표현으로 정의된 함수 프로퍼티
//메서드 안썼을 때
const person = {
  name : '홍길동',

  salutate : function(formal){
    return formal
    ? `안녕하십니까. ${this.name}입니다` : `안뇽안뇽 ${this.name}이야` 
  }
}

console.log(person.salutate(true));

//★메서드 정의(ES6 이후)
const person2 = {
  name : '홍길동',

  salutate2(formal2){
    return formal2
    ? `안녕하십니까. ${this.name}입니다` : `안뇽안뇽 ${this.name}이야` 
  }
}

console.log(person2.salutate2(true));

//생성자 함수로 객체 만들기
/*
1. 생성자 함수명은 일반적으로 대문자로 시작
2. 생성자 함수로 만들어진 객체를 인스턴스(instance)라 부름
3. this.~ 로 생성될 인스턴스의 프로퍼티들 정의
4. 생성자 함수는 new 연산자와 함께 사용
5. 암묵적으로 this 반환
6. 생성자 함수에는 메서드 정의 불가 - 객체 리터럴과 클래스에서는 가능
*/

function YalcoChicken (name, no) {
  this.name = name;
  this.no = no;
  this.introduce = function() {
    return `안녕하세요, 얄코치킨 ${this.name} ${this.no}호점 입니다.`
  }
}

//인스턴스 생성
//함수 앞에 new 를 붙이지 않으면 undefined 반환
//함수 호출 시 new의 여부에 따라 호출 원리가 다름
const chain1 = new YalcoChicken('판교', 3);
const chain2 = new YalcoChicken('강남', 20);
const chain3 = new YalcoChicken('대구', 10);

console.log(chain1.introduce());
console.log(chain2.introduce());
console.log(chain3, chain3.introduce());

//새로운 함수 추가 가능
//프로토타입 : 본사에서 배포하는 메뉴얼이라고 이해?
YalcoChicken.prototype.introEng = function() {
  return `Welcome to Yalco chicken at ${this.name} ${this.no}!`;
}
console.log(chain1.introEng());
console.log(new YalcoChicken('제주', 20).introEng());

console.log(chain1 instanceof YalcoChicken);
//생성자는 객체 자체의 로그도 상세가 다르다. 앞에 생성자 함수명이 붙음
//instanceof : 객체가 특정 생ㅓㅇ자 함수에 의해 만들어졌는지 여부 반환
//프로토타입의 constructor의 체인이 해당 생성자 함수 포함 여부를 알고 싶다면 콘솔에서 [Prototype] 펼쳐서 확인

//생성자 함수 자체의 필드와 함수
function YalcoChicken2 (name2, no2) {
  this.name2 = name2;
  this.no2 = no2;
  this.introduce2 = function() {
    return `안녕하세요, 얄코치킨 ${this.name} ${this.no}호점 입니다.`
  }
}
//
YalcoChicken2.brand = '웅꾸치킨';
YalcoChicken2.contact = function(){
  return `${this.brand}입니다. 무엇을 도와드릴까요?`;
}

const chain4 = new YalcoChicken2('대구 수성', 3);
//생성자 함수 자체에는 객체 추가 및 추가한 객체 호출 가능
console.log(YalcoChicken2.contact());

//생성자 함수를 할당한 상수에서는 호출 불가능
//console.log(chain4.contact());


//클래스
//클래스를 사용하여 인스턴스 만들기
class YalcoChicken3{
  constructor(name, no){
    this.name = name;
    this.no = no;
  }
  introduce3(){
    return `안녕하세요, ${this.name} ${this.no}호점 입니다.`
  }
}

const chain5 = new YalcoChicken3('송파', 3);
const chain6 = new YalcoChicken3('가락', 7);
const chain7 = new YalcoChicken3('둥이', 1);

console.log(chain5.introduce3());
console.log(chain6.introduce3());
console.log(chain7.introduce3());

//constructor 메서드
/*
1. 인스턴스 생성 시 인자를 받아 프로퍼티를 초기화함
2. 클래스에 하나만 있을 수 있음 - 초과시 오류 발생
3. 다른 메서드 이름을 쓸 수 없음
4. 기본값 사용 가능
5. 필요 없을 시 생략 가능
6. 값을 반환하지 말 것(retrun X && 생성자 함수처럼 암묵적으로 this 반환)
*/

class Person {
  constructor(name, age, married = false){
    this.name = name;
    this.age = age;
    this.married = married;
  }
}

const person1 = new Person('박영희', 30);
const person3 = new Person('장스방', 32, true);
console.log(person1, person3);

//인스턴스 초기화가 필요없는 클래스
class Empty{}
console.log(new Empty());


//클래스의 메서드
//클래스 : 중앙난방식, 생성자 : 개별난방식
class Cat{
  meew(){
    return '꺵꺵';
  }
}
const ggaeng = new Cat();
console.log(ggaeng, ggaeng.meew());

//필드 field
/*
constructor 밖에서, this.~ 없이 인스턴스의 프로퍼티 정의
아직 공식 기능은 아니지만 다수의 브라우저에서 지원 => 바벨로 헤결 가능
*/

class Slime{
  hp = 50;
  op = 4;
  attack(enemy){
    enemy.hp -= this.op;
    this.hp += this.op/4;
  }
}

const slime1 = new Slime();
const slime2 = new Slime();

console.log(slime1, slime2);

slime1.attack(slime2);

console.log(slime1, slime2);

class WkChicken{
  no = 0;
  menu = {'후라이드' : 10000, '양념치킨' : 12000};

  constructor(name, no) {
    this.name = name;
    if(no) this.no = no;
  }
  introduce(){
    return `안녕하세요, ${this.name} ${this.no}호점 입니다.`
  }
  order(name){
    return `${this.menu[name]}원 입니다.`
  }
}

const chain8 = new WkChicken('청담', 4);
console.log(chain8, chain8.introduce());
console.log(chain8, chain8.order('후라이드'));

chain8.menu['후라이드'] = 20000;
console.log(chain8, chain8.order('후라이드'));

//정적 static 필드와 메서드
// static을 사용하면 값을 변경할 수 없음 const와 비슷
class Wkchicken2{
  static brand = '웅꾸치킨';
  static contact(){
    return `${this.brand}입니다. 무엇을 도와드릴까요?`
  }
  constructor(name, no){
    this.name = name;
    this.no = no;
  }
  introduce(){
    return `ㅎㅇㅎㅇ ${this.name}입니다`;
  }
}
console.log(Wkchicken2);
console.log(Wkchicken2.contact());

