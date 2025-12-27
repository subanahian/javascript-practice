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
