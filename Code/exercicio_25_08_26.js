function rand(min = 1000, max = 6000) {
  let calc = Math.random() * (max - min) + min;
  return calc;
}
function f1(back) {
  setTimeout(function () {
    console.log("valor 1");
    if (back) {
      back();
    }
  }, rand());
}
function f2(back) {
  setTimeout(function () {
    console.log("valor 2");
    if (back) {
      back();
    }
  }, rand());
}
function f3(back) {
  setTimeout(function () {
    console.log("valor 3");
    if (back) {
      back();
    }
  }, rand());
}

f1(function () {
  f2(function () {
    f3(function () {
      console.log("olá mundo");
    });
  });
});
