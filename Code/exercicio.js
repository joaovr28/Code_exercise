function rand(min = 1, max = 6) {
  let calc = Math.random() * (max - min) + min;
  return calc;
}
setTimeout(function () {
  console.log("valor 1");
}, rand());
setTimeout(function () {
  console.log("valor 2");
}, rand());
setTimeout(function () {
  console.log("valor 3");
}, rand());
