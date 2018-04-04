 //클로저 + 재귀함수 를 이용한 구구단 출력  

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
