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
console.log(checkPass(35, 23, 88, 98, 90));

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
