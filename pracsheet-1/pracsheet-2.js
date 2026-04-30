// prob-1(large num btwn 2)

function largeNum(num1, num2) {
  if (num1 > num2) {
    return "Number 1 is the largest";
  } else {
    return "Number 2 is the largest";
  }
  console.log(largeNum(10, 20));
}

//prob-2 (even or odd)

function checkNum(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(checkNum(78));

//prpb-3 (pass or fail)
function passMarks(marks) {
  if (marks > 33) {
    return "Pass";
  } else {
    return "Fail";
  }
}
console.log(passMarks(50));

//prob-4 (large num btwn 3)
function largeNum(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}
console.log(largeNum(50, 30, 80));

//prob-5 (possitive or negetive)

function isNumber(num) {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}
console.log(isNumber(-20));

//prob-7 (nationalid)

function isEligible(age) {
  if (age >= 18) {
    return "Eligible to Vote";
  } else {
    return "Not eligible to Vote";
  }
}
console.log(isEligible(12));

//prob-8 (grade)

function checkGrade(mark) {
  if (mark >= 80) {
    return "A+";
  } else if (mark >= 70 && mark <= 79) {
    return "A";
  } else if (mark >= 60 && mark <= 69) {
    return "A-";
  } else if (mark >= 33 && mark <= 59) {
    return "Passed";
  } else {
    return "Failed";
  }
}
console.log(checkGrade(95));

//prob-9(small number)

function minNumber(num1, num2) {
  if (num1 > num2) {
    return `The smallest number is: ${num2}`;
  } else {
    return `The smallest number is: ${num1}`;
  }
}
console.log(minNumber(48, 16));

//peob-10( check 0)

function isZero(num) {
  if (num === 0) {
    return "Zero";
  } else {
    return "Not Zero";
  }
}
console.log(isZero(0));

//prob-11(sum=100)

function biggerThan100(num1, num2, num3) {
  var sum = num1 + num2 + num3;
  if (sum > 100) {
    return `${sum} bigger than 100`;
  } else {
    return `${sum} Less than 100`;
  }
}
console.log(biggerThan100(10, 20, 80));

//prob-12

function checkLeapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return "Leap Year";
  } else {
    return "Not Leap Year";
  }
}
console.log(checkLeapYear(2200));

//prob-13

function checkPass(Bangla, English, Math, Physics, Chemistry) {
  if (
    Bangla >= 33 &&
    English >= 33 &&
    Math >= 33 &&
    Physics >= 33 &&
    Chemistry >= 33
  ) {
    return "Pass";
  } else {
    return "Fail!";
  }
}
console.log(checkPass(35, 23, 88, 54, 90));

//prob-14

function checkNumber(num) {
  if (num >= 0 && num <= 9) {
    return "Single-digit";
  } else {
    return "Not Single-digit";
  }
}
console.log(checkNumber(5));

//prob-15

function checkSum(num1, num2) {
  if (num1 + num2 === 50) {
    return " The sum is 50";
  } else {
    return " The sum is not 50";
  }
}
console.log(checkSum(25, 25));

//prob-16

function checkTimeOfDay(hour) {
  if (hour >= 6 && hour < 12) {
    return "It's morning";
  } else if (hour >= 12 && hour < 18) {
    return "It's evening";
  } else {
    return "It's night";
  }
}
console.log(checkTimeOfDay(9));

//prob17

unction checkPassword(pass) {
  if (pass.length >= 8) {
      return "Valid Password";
  } else {
      return "Password must be longer than 8 characters.";
  }
}
console.log(checkPassword('56789431'));

//prob-18

function checkNumber (num) {
  if (num > 0 && num % 2 === 0) {
      return 'The number is positive and even';
  }
  else {
      return 'Not positive and even';
  }
}
console.log(checkNumber(65));

//prob-19

function checkweight (weight) {
  if (weight >= 50) {
      return '50kg or more than 50kg'
  }
}
console.log(checkweight(50));  

//prob-20

function isDivisible(num1, num2) {
  let larger = Math.max(num1, num2);
  let smaller = Math.min(num1, num2);
  
  return larger % smaller === 0 ? "Divisible" : "Not Divisible";
}
console.log(isDivisible(10, 5)); 

//prob-21

let totalMoney = 500;
let people = 7;

let eachShare = totalMoney / people;

console.log("Each person will get:", eachShare.toFixed(2), "Taka");

//PROB-22

let arr = [1, 2, 3, 4, 5, 6];
let evens = arr.filter(num => num % 2 === 0);
console.log(evens);

//prob-23

let nums = [1, 2, 2, 3, 4, 4, 5];
let unique = [...new Set(nums)];
console.log(unique);

//prob-24

function factorial(n) {
  return n === 0 ? 1 : n * factorial(n - 1);
}
console.log(factorial(5));

//prob-25

function factorial(n) {
  return n === 0 ? 1 : n * factorial(n - 1);
}
console.log(factorial(5));

//prob-26

let text = "javascript";
let vowels = text.match(/[aeiou]/gi).length;
console.log(vowels);

//prob-27

function isLeap(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

//prob-28

let time = 5;
let timer = setInterval(() => {
  console.log(time);
  time--;
  if (time < 0) {
    clearInterval(timer);
    console.log("Time’s up!");
  }
}, 1000);
 
//prob-29

function generatePassword(length) {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }
  return password;
}
console.log(generatePassword(8));

//prob-30

let ar = [0, false, "", null, undefined, 5, "Hi"];
console.log(ar.filter(Boolean));
 
//prob-31

let nums = [1, 2, 4, 5];
let n = 5;
let expectedSum = (n * (n + 1)) / 2;
let actualSum = nums.reduce((a, b) => a + b, 0);
console.log(expectedSum - actualSum);

//prob-32

function isAnagram(a, b) {
  return a.split("").sort().join("") === b.split("").sort().join("");
}
console.log(isAnagram("listen", "silent"));

//prob--33

let students = [
  { name: "A", marks: 70 },
  { name: "B", marks: 85 },
  { name: "C", marks: 60 }
];
let topper = students.reduce((a, b) => a.marks > b.marks ? a : b);
console.log(topper.name);

//PROB-34

let person = { name: "Raj", age: 25, city: "Dhaka" };
console.log(Object.keys(person).length);

//prob-35

let a = 5, b = 10;
[a, b] = [b, a];
console.log(a, b);

//prob-36
let score = 0;
if (userAnswer === correctAnswer) score++;
 
//prob-37

let answer = Math.floor(Math.random()*10)+1;

//prob-38

let time = 0;
setInterval(() => console.log(time++), 1000);

//prob-39

function MyPromise(fn) {
  this.then = function(cb) {
    fn(cb);
  };
}

//prob-40
Array.prototype.myReduce = function(fn, acc) {
  for (let i of this) acc = fn(acc, i);
  return acc;
};

//prob-41
function total(price, qty, tax) {
  return (price * qty) + tax;
}

//prob-42
function dateDiff(d1, d2) {
  let diff = Math.abs(new Date(d2) - new Date(d1));
  return diff / (1000 * 60 * 60 * 24);
}

//prob-43
input.oninput = () => {
  input.style.color = input.value.length > 10 ? "red" : "black";
};

//prob-44
let str = "hello world";
let result = str.split(" ").join("");
console.log(result);

//prob-45
let n = 5, fact = 1;
for (let i = 1; i <= n; i++) fact *= i;
console.log(fact);

//prob-46
let i = 0;
function type(){
  if(i < text.length){
    output.innerText += text[i++];
    setTimeout(type, 100);
  }
}
type();

//prob-47

loader.style.display = "block";
setTimeout(() => loader.style.display = "none", 2000);

//prob-48

async function tryFetch(url){
  for(let i=0;i<3;i++){
    try {
      let res = await fetch(url);
      return await res.json();
    } catch(e){}
  }
}

//prob-49
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(data => console.log(data));

  //prob-50
  let index = 0;
function next(){
  index = (index + 1) % images.length;
  showImage(index);
}
//prob-51
let original = {a:1, b:{c:2}};
let clone = JSON.parse(JSON.stringify(original));

//prob-52
button.onclick = () => {
  let div = document.createElement("div");
  div.className = "box";
  container.appendChild(div);
};

//prob-53
let users = [
  {id:1, name:"A"},
  {id:2, name:"B"}
];

let obj = {};
users.forEach(u => obj[u.id] = u);
console.log(obj);

//prob-54
let s = "hello_world_js";
let camel = s.split("_").map((w,i)=>
  i===0 ? w : w[0].toUpperCase()+w.slice(1)
).join("");
console.log(camel);

//prob-55
let s = "a1b2c3d4";
let result = [...s].filter(c => isNaN(c)).join("");
console.log(result);
//prob-56
let s = "JavaScript is super powerful";
let longest = s.split(" ").reduce((a,b)=> a.length>b.length?a:b);
console.log(longest);

//prob-57
input.oninput = () => {
  counter.innerText = input.value.length;
};

//prob=58
let person = {a:1, b:2, c:3};
console.log(Object.keys(person).length);

//prob-59
let users = [
  {id:1, name:"A"},
  {id:2, name:"B"}
];

let obj = {};
users.forEach(u => obj[u.id] = u);
console.log(obj);

//prob-60
let o1 = {a:1}, o2 = {b:2};
let m = {...o1, ...o2};
console.log(m);

//prob-61
let s = "a1b2c3d4";
let result = [...s].filter(c => isNaN(c)).join("");
console.log(result);

//prob-62
// Quick usage example:
const fib = memoizedFibonacci();
console.log(fib(10)); 
console.log(iterativeFibonacci(100));

//prob-63
function findMissingNumber(nums) {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}

//prob-64
let s = "a1b2c3d4";
let result = [...s].filter(c => isNaN(c)).join("");
console.log(result);

//prob-65
function flatDeep(arr){
  return arr.reduce((a,b)=> 
    Array.isArray(b) ? a.concat(flatDeep(b)) : a.concat(b), 
  []);
}
console.log(flatDeep([1,[2,[3]]])); 
//prob-66
function findMissingNumberSet(nums) {
    const numSet = new Set(nums);
    for (let i = 0; i <= nums.length; i++) {
        if (!numSet.has(i)) return i;
    }
    return -1;
}
//prob-67
function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
//prob-68
function runningSum(nums) {
    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1];
    }
    return nums;
}

console.log(runningSum([1,2,3,4])); // [1,3,6,10]
//prob-69
function threeSum(nums) {
    nums.sort((a, b) => a - b);
    const result = [];
    
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        let left = i + 1, right = nums.length - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
}

console.log(threeSum([-1,0,1,2,-1,-4])); // [[-1,-1,2],[-1,0,1]]
//prob-70
function subarraySum(nums, k) {
    let count = 0, sum = 0;
    const map = new Map([[0, 1]]);
    
    for (const num of nums) {
        sum += num;
        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    return count;
}

console.log(subarraySum([1, 1, 1], 2));

//prob-71

for(let i=1;i<=3;i++){
  await new Promise(r=>setTimeout(r,1000));
  console.log(i);
}

//prob-73
const pipe = (...fns) => x => fns.reduce((v,f)=>f(v), x);

//prob-74
const add = a => b => c => a+b+c;
console.log(add(1)(2)(3));

//prob-75
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}
//prob-76
function once(fn){
  let done = false;
  return function(){
    if(!done){
      done = true;
      fn();
    }
  }
}
//prob77
for(let i=1;i<=3;i++){
  await new Promise(r=>setTimeout(r,1000));
  console.log(i);
}
//prob-78
try {
  let res = await fetch(url);
} catch(err){
  console.log(err);
}
//prob-78
function once(fn){
  let done = false;
  return function(){
    if(!done){
      done = true;
      fn();
    }
  }
}
//prob-79
try {
  let res = await fetch(url);
} catch(err){
  console.log(err);
}
//prob-80
function counter(){
  let count = 0;
  return () => ++count;
}
let c = counter();
console.log(c(), c(), c());
//prob-81
let mn = "banana";
console.log([...new Set(mn)].join(""));
//prob-82
let a = [1,2,3];
let b = [2,3,4];
console.log(a.filter(x => b.includes(x)));

//prob-83
function chunk(arr, size){
  let res = [];
  for(let i=0;i<arr.length;i+=size){
    res.push(arr.slice(i, i+size));
  }
  return res;
}
console.log(chunk([1,2,3,4,5], 2));
//pr0b-84
function equal(a,b){
  return a.length === b.length && a.every((v,i)=>v===b[i]);
}
//prob-85
function equal(a,b){
  return a.length === b.length && a.every((v,i)=>v===b[i]);
}
//prob-86
let arr = [1,2,4,6];
let mis = [];

for(let i=1;i<=6;i++){
  if(!arr.includes(i)) mis.push(i);
}
console.log(mis);
//prob-87
function memo(fn){
  let cache = {};
  return function(n){
    if(cache[n]) return cache[n];
    return cache[n] = fn(n);
  };
}

//prob-88
function memo(fn){
  let cache = {};
  return function(n){
    if(cache[n]) return cache[n];
    return cache[n] = fn(n);
  };
}
//prob-89
let arr = [1,2,4,6];
let missing = [];

for(let i=1;i<=6;i++){
  if(!arr.includes(i)) missing.push(i);
}
console.log(missing);
//prob-90
let str = "JavaScript";
console.log(str.includes("Script"));
//prob-91
function isPowerOfTwo(n){
  return n > 0 && (n & (n - 1)) === 0;
}
console.log(isPowerOfTwo(16)); // true
//prob-92
async function retry(fn, t){
  while(t--){
    try { return await fn(); }
    catch(e){}
  }
}
//prob-93
function equal(a,b){
  return a.length === b.length && a.every((v,i)=>v===b[i]);
}
//prob-94
let n = 123;
let rev = 0;

while(n > 0){
  rev = rev * 10 + (n % 10);
  n = Math.floor(n / 10);
}
console.log(rev);
//prob-95
btn.onclick = () => btn.disabled = true;
//prob-96
let t = "I love JavaScript";
console.log(t.trim().split(/\s+/).length);
//prob-97
function isPalNum(n){
  return n === Number(n.toString().split("").reverse().join(""));
}
console.log(isPalNum(121)); // true
//prob-98
window.addEventListener("online", ()=>console.log("Online"));
window.addEventListener("offline", ()=>console.log("Offline"));

//prob-99
let user = JSON.parse(localStorage.getItem("user"));
console.log(user);
//prob-100
localStorage.setItem("user", JSON.stringify({name:"Raj"}));
//prob-101
window.onscroll = () => {
  if(window.innerHeight + window.scrollY >= document.body.offsetHeight){
    console.log("Load more");
  }
};
//prob-102
localStorage.setItem("user", JSON.stringify({name:"Raj"}));
//prob-103
document.addEventListener("click", e => {
  if(!box.contains(e.target)) console.log("Outside");
});
//prob-104
Function.prototype.myBind = function(ctx){
  let fn = this;
  return function(...args){
    return fn.apply(ctx, args);
  };
};
//prob-105
async function retry(fn, n){
  while(n--){
    try { return await fn(); }
    catch(e){}
  }
}
//prob-106
function sum(a){
  return function(b){
    return b ? sum(a+b) : a;
  }
}
console.log(sum(1)(2)(3)());
//prob-107
async function retry(fn, n){
  while(n--){
    try { return await fn(); }
    catch(e){}
  }
}
//prob-108
function sum(a){
  return function(b){
    return b ? sum(a+b) : a;
  }
}
console.log(sum(1)(2)(3)());
//prob-109
const compose = (...fns) => x =>
  fns.reduceRight((v,f)=>f(v), x);
//prob-110
function throttle(fn, delay){
  let last = 0;
  return function(){
    let now = Date.now();
    if(now - last >= delay){
      last = now;
      fn();
    }
  };
}
//prob-110
let arr = [0,false,null,5,"",7];
console.log(arr.filter(Boolean));
//prob-111
function majority(arr){
  let count = {};
  arr.forEach(n=>count[n]=(count[n]||0)+1);
  return Object.keys(count).find(k=>count[k] > arr.length/2);
}
//prob-112
let arr = [1,2,2,3];
let map = new Map();
arr.forEach(x => map.set(x, (map.get(x)||0)+1));
console.log(map);
//prob-113
function isSorted(arr){
  for(let i=1;i<arr.length;i++){
    if(arr[i] < arr[i-1]) return false;
  }
  return true;
}
//prob-113
function isSorted(arr){
  for(let i=1;i<arr.length;i++){
    if(arr[i] < arr[i-1]) return false;
  }
  return true;
}
//prob-114
function random(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//prob-115
let n = 98321;
console.log(Math.max(...n.toString()));
//prob-116
function isPalNum(n){
  return n === Number(n.toString().split("").reverse().join(""));
}
console.log(isPalNum(121)); // true
//prob-116
function isPalNum(n){
  return n === Number(n.toString().split("").reverse().join(""));
}
console.log(isPalNum(121)); // true
//prob-117
for(let i=1;i<=3;i++){
  await new Promise(r=>setTimeout(r,1000));
  console.log(i);
}
//prob-118
let n = 9855321;
console.log(Math.max(...n.toString()));
//prob-119
document.getElementById("list").addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    console.log(e.target.innerText);
  }
});
//prob-120
function binarySearch(arr,target){
  let l=0,r=arr.length-1;
  while(l<=r){
    let m=Math.floor((l+r)/2);
    if(arr[m]===target) return m;
    if(arr[m]<target) l=m+1;
    else r=m-1;
  }
  return -1;
}
//prob-121
function hasCycle(head){
  let slow=head, fast=head;
  while(fast && fast.next){
    slow=slow.next;
    fast=fast.next.next;
    if(slow===fast) return true;
  }
  return false;
}
//prob-122
function reverse(head){
  let prev=null;
  while(head){
    let next=head.next;
    head.next=prev;
    prev=head;
    head=next;
  }
  return prev;
}
//prob-123
function twoSum(arr,target){
  let map = {};
  for(let i=0;i<arr.length;i++){
    let diff = target - arr[i];
    if(map[diff] !== undefined) return [map[diff], i];
    map[arr[i]] = i;
  }
}
//prob-124
document.getElementById("list").addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    console.log(e.target.innerText);
  }
});
//prob-125
function deepFreeze(obj){
  Object.freeze(obj);
  Object.keys(obj).forEach(key => {
    if(typeof obj[key] === "object" && obj[key] !== null){
      deepFreeze(obj[key]);
    }
  });
  return obj;
}
//prob-126
function myInterval(fn, delay){
  let id = {};
  function run(){
    id.timer = setTimeout(()=>{
      fn();
      run();
    }, delay);
  }
  run();
  return id;
}//prob-127
function hasCycle(head){
  let slow=head, fast=head;
  while(fast && fast.next){
    slow=slow.next;
    fast=fast.next.next;
    if(slow===fast) return true;
  }
  return false;
}
//prob-128
function twoSum(arr,target){
  let map = {};
  for(let i=0;i<arr.length;i++){
    let diff = target - arr[i];
    if(map[diff] !== undefined) return [map[diff], i];
    map[arr[i]] = i;
  }
}
//prob-129
class Stack {
  constructor(){
    this.items = [];
  }
  push(val){ this.items.push(val); }
  pop(){ return this.items.pop(); }
  peek(){ return this.items[this.items.length-1]; }
  isEmpty(){ return this.items.length === 0; }
}
//prob-130
class Queue {
  constructor(){
    this.items = [];
  }
  enqueue(val){ this.items.push(val); }
  dequeue(){ return this.items.shift(); }
}
//prob-131
let n = 10;
let sum = 0;
for (let i = 1; i <= n; i++) sum += i;
console.log(sum);
//prob-132
function maxSubArray(arr){
  let max=arr[0], curr=arr[0];
  for(let i=1;i<arr.length;i++){
    curr=Math.max(arr[i], curr+arr[i]);
    max=Math.max(max,curr);
  }
  return max;
}
//prob-133
function reverseWords(str){
  return str.split(" ").reverse().join(" ");
}
//prob-134
function maxSubArray(arr){
  let max=arr[0], curr=arr[0];
  for(let i=1;i<arr.length;i++){
    curr=Math.max(arr[i], curr+arr[i]);
    max=Math.max(max,curr);
  }
  return max;
}
//prob-165
function reverseWords(str){
  return str.split(" ").reverse().join(" ");
}
//prob-166
function maxSubArray(arr){
  let max=arr[0], curr=arr[0];
  for(let i=1;i<arr.length;i++){
    curr=Math.max(arr[i], curr+arr[i]);
    max=Math.max(max,curr);
  }
  return max;
}
//prob-167
function reverseWords(str){
  return str.split(" ").reverse().join(" ");
}
//prob-168
function Person(name){
  this.name=name;
}
Person.prototype.sayHi=function(){
  console.log("Hi "+this.name);
}
//prob-169
function greet(){ console.log(this.name); }
let obj={name:"Raj"};

greet.call(obj);
greet.apply(obj);
let bound=greet.bind(obj);
bound();

//prob-170
console.log(a);
var a=10; // undefined (hoisted)

//prob-171
function outer(){
  let count=0;
  return function(){
    return ++count;
  }
}
let c=outer();
console.log(c(),c());

//prob-172
function flatten(arr){
  let res=[];
  for(let el of arr){
    if(Array.isArray(el))
      res=res.concat(flatten(el));
    else res.push(el);
  }
  return res;
}
//prob-179
function greet(){ console.log(this.name); }
let obj={name:"Raj"};

greet.call(obj);
greet.apply(obj);
let bound=greet.bind(obj);
bound();

//prob-180
class Queue {
  constructor(){
    this.items = [];
  }
  enqueue(val){ this.items.push(val); }
  dequeue(){ return this.items.shift(); }
}
//prob-182
function fib(n){
  if(n<=1) return n;
  return fib(n-1)+fib(n-2);
}
//prob-183
class Node {
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
//prob-184
function clone(node, map=new Map()){
  if(map.has(node)) return map.get(node);

  let newNode = {val:node.val, neighbors:[]};
  map.set(node,newNode);

  for(let nei of node.neighbors){
    newNode.neighbors.push(clone(nei,map));
  }

  return newNode;
}
//prob-185
function cycle(node, visited=new Set(), rec=new Set()){
  if(rec.has(node)) return true;
  if(visited.has(node)) return false;

  visited.add(node);
  rec.add(node);

  for(let nei of graph[node]||[]){
    if(cycle(nei, visited, rec)) return true;
  }

  rec.delete(node);
  return false;
}
//prob-186
function cycle(node, visited=new Set(), rec=new Set()){
  if(rec.has(node)) return true;
  if(visited.has(node)) return false;

  visited.add(node);
  rec.add(node);

  for(let nei of graph[node]||[]){
    if(cycle(nei, visited, rec)) return true;
  }

  rec.delete(node);
  return false;
}
//prob-187
function topo(node, visited=new Set(), stack=[]){
  visited.add(node);

  for(let nei of graph[node]||[]){
    if(!visited.has(nei)) topo(nei, visited, stack);
  }

  stack.push(node);
  return stack;
}
//prob-188
function countComponents(graph){
  let visited=new Set(), count=0;

  for(let node in graph){
    if(!visited.has(node)){
      dfs(node, visited);
      count++;
    }
  }
  return count;
}
//prob-189
let graph = {
  A: ["B","C"],
  B: ["A","D"],
  C: ["A"],
  D: ["B"]
};
//prob-190
function invert(root){
  if(!root) return null;
  [root.left, root.right] = [root.right, root.left];
  invert(root.left);
  invert(root.right);
  return root;
}
//prob-191
function bfs(start){
  let q=[start], visited=new Set([start]);

  while(q.length){
    let node=q.shift();
    console.log(node);

    for(let nei of graph[node]){
      if(!visited.has(nei)){
        visited.add(nei);
        q.push(nei);
      }
    }
  }
}
//prob-192
function LCA(root,p,q){
  if(!root || root===p || root===q) return root;
  let left=LCA(root.left,p,q);
  let right=LCA(root.right,p,q);
  if(left && right) return root;
  return left || right;
}
//prob-193
function postorder(root){
  if(!root) return;
  postorder(root.left);
  postorder(root.right);
  console.log(root.val);
}
//prob-194
let obj = {
  name:"JS",
  show(){
    console.log(this.name);
  }
};
//prob-195
for(let i=1;i<=3;i++){
  setTimeout(()=>console.log(i),1000);
}
//prob-196
function kthLargest(arr,k){
  arr.sort((a,b)=>b-a);
  return arr[k-1];
}
//prob-197
let obj = {
  name:"JS",
  show(){
    console.log(this.name);
  }
};
//prob-198
function outer(){
  let i=0;
  return () => i++;
}
//prob-199
function reverseString(str) {
  return str.split('').reverse().join('');
}
//200
function isAnagram(a, b) {
  return a.split('').sort().join('') === b.split('').sort().join('');
}
//201
let a = {x:1};
let b = a;
b.x = 5;
console.log(a.x);
//prob-201
onsole.log(isNaN("hello")); // true
console.log(Number.isNaN("hello")); // false

//prob-202
function search(arr,target){
  let l=0,r=arr.length-1;

  while(l<=r){
    let m=Math.floor((l+r)/2);

    if(arr[m]===target) return m;

    if(arr[l] <= arr[m]){
      if(target>=arr[l] && target<arr[m]) r=m-1;
      else l=m+1;
    } else {
      if(target>arr[m] && target<=arr[r]) l=m+1;
      else r=m-1;
    }
  }
  return -1;
}
//prob-203
class LRU {
  constructor(limit){
    this.cache = new Map();
    this.limit = limit;
  }

  get(key){
    if(!this.cache.has(key)) return -1;
    let val = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key,val);
    return val;
  }

  set(key,val){
    if(this.cache.has(key)) this.cache.delete(key);
    else if(this.cache.size >= this.limit){
      this.cache.delete(this.cache.keys().next().value);
    }
    this.cache.set(key,val);
  }
}
//prob-204
function cycle(node, visited=new Set(), rec=new Set()){
  if(rec.has(node)) return true;
  if(visited.has(node)) return false;

  visited.add(node);
  rec.add(node);

  for(let nei of graph[node]||[]){
    if(cycle(nei, visited, rec)) return true;
  }

  rec.delete(node);
  return false;
}
//prob-205
function longestK(s, k){
  let map = {}, left = 0, max = 0;

  for(let right=0; right<s.length; right++){
    map[s[right]] = (map[s[right]] || 0) + 1;

    while(Object.keys(map).length > k){
      map[s[left]]--;
      if(map[s[left]] === 0) delete map[s[left]];
      left++;
    }

    max = Math.max(max, right - left + 1);
  }

  return max;
}
//prob-206
let arr = [1,2,3,4];
let prefix = [arr[0]];

for(let i=1;i<arr.length;i++){
  prefix[i] = prefix[i-1] + arr[i];
}

console.log(prefix);

//prob-207
let arr = [1,2,3,4];
let prefix = [arr[0]];

for(let i=1;i<arr.length;i++){
  prefix[i] = prefix[i-1] + arr[i];
}

console.log(prefix);

//prob-208
const memo = fn => {
  let cache={};
  return n => cache[n] || (cache[n] = fn(n));
};

//prob-209
<img loading="lazy" src="img.jpg"></img>

//prob-210
const memo = fn => {
  let cache={};
  return n => cache[n] || (cache[n] = fn(n));
};
//prob-211
if(window.innerHeight + window.scrollY >= document.body.offsetHeight){
  fetchMore();
}
//prob-212
function sqrt(n){
  let l=0, r=n;

  while(l<=r){
    let m=Math.floor((l+r)/2);
    if(m*m === n) return m;
    if(m*m < n) l=m+1;
    else r=m-1;
  }

  return r;
}
//prob-212
let arr = [1,2,3,4];
let prefix = [arr[0]];

for(let i=1;i<arr.length;i++){
  prefix[i] = prefix[i-1] + arr[i];
}

console.log(prefix);
//prob-213
function rateLimiter(limit, interval){
  let calls = [];

  return function(){
    let now = Date.now();
    calls = calls.filter(t => now - t < interval);

    if(calls.length < limit){
      calls.push(now);
      console.log("Allowed");
    } else {
      console.log("Blocked");
    }
  };
}
//prob-214
class TaskQueue {
  constructor(limit){
    this.limit = limit;
    this.running = 0;
    this.queue = [];
  }

  add(task){
    this.queue.push(task);
    this.run();
  }

  run(){
    if(this.running >= this.limit || !this.queue.length) return;

    let task = this.queue.shift();
    this.running++;

    task().then(()=>{
      this.running--;
      this.run();
    });

    this.run();
  }
}
//prob-215
async function poll(fn, interval){
  while(true){
    let res = await fn();
    if(res) break;
    await new Promise(r => setTimeout(r, interval));
  }
}
//prob-216
var twoSum = function(nums, target) {
    let map = {};

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];

        if (map[diff] !== undefined) {
            return [map[diff], i];
        }

        map[nums[i]] = i;
    }
};
//prob-217
function rateLimiter(limit, interval){
  let calls = [];

  return function(){
    let now = Date.now();
    calls = calls.filter(t => now - t < interval);

    if(calls.length < limit){
      calls.push(now);
      console.log("Allowed");
    } else {
      console.log("Blocked");
    }
  };
}