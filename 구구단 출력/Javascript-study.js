//스코프체이닝 + 재귀함수 를 이용한 구구단 출력  

//구구단
let goo = { start: 2, con: 1 }
dan = () => {
  console.log(`${goo.start}x${goo.con}=${goo.start * goo.con}`);
  goo.con += 1;
  (goo.con < 10) ? dan() : goo.con = 1;
}
count = () => {
  for (; goo.start < 10; goo.start += 1) {
    console.log(`${goo.start}단`);
    dan()
  }
}
(goo.start == 2) ? count() : null;

(function () {
  let parent = 2;
  closure()
  function closure() {
    if (parent < 10) {
      console.log(parent + '단 시작합니다.');
      let son = 0
      ser();
      parent++;
      closure();
      function ser() {
        if (son < 9) {
          son++;
          console.log(parent + '*' + son + "=" + parent * son);
          ser();
        }
      }

    }
  }
})()
