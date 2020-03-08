const teacherJay = {
  name: "jane",
  age: 30,
  teachJavascript: function(student) {
    student.gainExp();
  }
};

const studentBbo = {
  name: "Boy",
  age: 20,
  exp: 0,
  gainExp: function() {
    this.exp++;
  }
};

console.log(studentBbo.exp);
teacherJay.teachJavascript(studentBbo);
console.log(studentBbo.exp);
