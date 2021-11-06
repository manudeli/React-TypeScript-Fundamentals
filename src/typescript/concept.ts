export {}

/*
타입스크립트 소개

a. 장점
    타입이 있다는 것
    안정성 - 컴파일 단계에서 미리 오류를 감지할 수 있다.
    가독성 - 타입을 보고 무엇을 하는 지 미리 알 수 있다.

b. 단점
    초기 설정을 해야 한다.
    스크립트 언어의 유연성이 낮아진다.
    컴파일 시간이 길어질 수 있다.
*/

/*
1. 타입 주석과 타입 추론
타입 주석은 변수, 상수 혹은 반환 값이 무슨 타입인지를 나타내는 것을 의미
타입 추론은 해당 변수가 어떤 타입인지 추론하는 것. 생략하면 컴파일 타임에 알아낸다.
*/

let a: number = 1
let b = 2
let c: boolean = false
let d: string = 'TypeScript'
let e = { a: 1 }
let f: number[] = []
let g: 'good' = 'good'
let h: any = 3

function add(a: number, b: number): number {
  return a + b
}
console.log(add(1, 3))

/*
2. 인터페이스
객체의 타입을 정의하는 방법. interface라는 키워드로 가능하다.
*/

interface Company {
  name: string
  age: number
  address?: string
}

const touchflow: Company = {
  name: 'TouchFlow, Inc.',
  age: 3,
}
console.log(touchflow)

/*
3. tuple
배열을 Tuple로 이용하는 방법
*/

const tuple: [string, number] = ['Jonghyeon', 100]
console.log(tuple[1])

/*
4. enum
열거형을 사용하는 방법
*/

enum Color {
  RED = 'red',
  GREEN = 'green',
  BLUE = 'blue',
}

const color = Color.BLUE

/*
5. 대수 타입
여러 자료형의 값을 가질 수 있게 하는 방법
합집합 타입과 교집합 타입이 있다.
*/

let numOrStr: number | string = 1
numOrStr = 'str'

// let numAndStr: number & string = '' // 원시 타입에서 사용할 수는 없다.

interface Name {
  name: string
}

interface Age {
  age: number
}

let jonghyeon: Name & Age = {
  name: 'Jonghyeon',
  age: 26,
}

type Person = Name & Age

let julia: Person = {
  name: 'julia',
  age: 100,
}

/*
6. Optional
ES 2021에도 추가된 기능. 타입스크립트는 이미 있었다.
*/

interface Post {
  title: string
  content: string
}

interface ResponseData {
  post?: Post
  message?: string
  status: number
}

const response: ResponseData[] = [
  {
    post: {
      title: 'Hello',
      content: 'How are you?',
    },
    status: 200,
  },
  {
    message: 'Error!',
    status: 500,
  },
]

console.log(response[0].post?.title)
console.log(response[1].post && response[1].post.title)
console.log(response[1].post?.title)

/*
7. Generic
하나의 인터페이스로 여러 타입을 이용할 수 있게 하는 방법
*/

interface Value<T> {
  value: T
}

const value: Value<string> = {
  value: '1',
}

function toString<T>(a: T): string {
  return `${a}`
}

console.log(toString<string>('5'))

/*
8. Partial, Required, Pick, Omit
기존 interface를 재활용할 수 있게 만든다.
*/

interface User {
  id: number
  name: string
  age: number
  address: string
  createdAt?: string
  updatedAt?: string
}

// Partial: 모든 필드가 Optional이 된다.
const partial: Partial<User> = {
  id: 123,
}

// Required: 모든 필드가 Required가 된다.
const required: Required<User> = {
  id: 123,
  name: 'jonghyeon',
  age: 23,
  address: '주소',
  createdAt: '2021-12-31',
  updatedAt: '2021-12-31',
}

// Pick: 특정 필드만 골라서 사용할 수 있다.
const pick: Pick<User, 'name' | 'age' | 'address'> = {
  name: '',
  age: 12,
  address: '',
}

// Omit: 특정 필드만 빼고 사용할 수 있다.
const omit: Omit<User, 'id' | 'createdAt' | 'updatedAt'> = {
  name: '',
  age: 0,
  address: '',
}

const mixed: Omit<User, 'id' | 'address' | 'age' | 'createdAt' | 'updatedAT'> &
  Pick<Partial<User>, 'address' | 'age'> = {
  name: '',
}

/*
9. extends
특정 인터페이스를 상속받아 인터페이스를 확장할 수 있다.
*/

interface Time {
  hour: number
  minute: number
  second: number
}

interface DateTime extends Time {
  year: number
  month: number
  day: number
}

interface OffsetDateTime extends DateTime {
  offset: number
}

interface ZonedDateTime extends DateTime {
  zoneId: string
}

interface TimeFormat extends Pick<Time, 'hour' | 'minute'> {
  ampm: 'am' | 'pm'
}

const timeFormat: TimeFormat = {
  hour: 10,
  minute: 30,
  ampm: 'am',
}
