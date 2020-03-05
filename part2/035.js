function checkNumber(val) {
  if(typeof val !== "number") throw "이상한 값";
  console.log("숫자형 값임");
}

try {
  checkNumber(100);
  checkNumber("test");
} catch {
  console.log("에러 발생");
} finally {
  console.log("완료");
}