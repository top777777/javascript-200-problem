let condition = 5 > 10;
condition ? console.log("Left") : console.log("Right");
let result = condition ? (
  console.log("삼항 연산식의 첫번째 표현식입니다."),
  "표현식 1"
) : (
  console.log("삼항 연산식의 두번째 표현식입니다."),
  "표현식 2"
);
console.log(result);