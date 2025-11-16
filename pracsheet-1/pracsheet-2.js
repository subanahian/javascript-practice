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

//prob

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
