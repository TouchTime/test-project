/**
 * 从右往左执行函数组合（右侧函数的输出作为左侧函数的输入）。
 * 最后一个函数可以是任意元函数（参数个数不限），其余函数必须是一元函数。
 */
function compose(...args) {
  const voidArr = args.reverse();
  return function (...params) {
    voidArr.forEach(function (voids) {
      if (Array.isArray(params)) {
        params = voids(...params);
      } else {
        params = voids(params);
      }
    });

    return params;
  };
}
function classyGreeting(firstName, lastName) {
  return "The name's " + lastName + ", " + firstName + " " + lastName;
}
function toUpperCase(string) {
  return string.toUpperCase();
}
var yellGreeting = compose(toUpperCase, classyGreeting);
var result = yellGreeting("James", "Bond");
console.log(result); // THE NAME'S BOND, JAMES BOND

/**
 * 创建一个预编译模板方法。
 */
function template(string) {
  const reg = /\{\{(.+?)\}\}/g;
  const matchArr = string.match(reg);
  const matchObjArr = matchArr.map((item) =>
    item.substring(2, item.length - 2).trim()
  );

  return function (obj) {
    let str;
    matchObjArr.forEach((item, index) => {
      str = (str || string).replace(matchArr[index], obj[item]);
    });
    return str;
  };
}
var compiled = template(
  "hello everyone, my name is {{ name }}, {{ age }} years old"
);
var result1 = compiled({
  name: "patrick",
  age: "28",
});
console.log(result1); // hello everyone, my name is patrick, 28 years old

var result2 = compiled({
  name: "teddy",
  age: "30",
});
console.log(result2); // hello everyone, my name is teddy, 30 years old
