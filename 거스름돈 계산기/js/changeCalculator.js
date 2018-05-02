window.onbeforeunload=function(){
  console.log('Load전 입니다.')
}
window.addEventListener('DOMContentLoaded', function () {

    function fadeOut() {
        let load = document.getElementsByClassName('load')[0];
        let count = 1;
        
        let timer = setInterval(function () {
            if(count >=0){
                count-=0.01;
                load.style.opacity = count;
            }else{
                clearInterval(timer);
                load.style.display = 'none';
            }
        }, 10)
        
    }
    fadeOut();
    
    let calButton = document.getElementById('calClick');
    let calCancleButton = document.getElementById('calCancle');

    let calculator = function () {
        let calMount = parseInt(document.getElementById('calInfo').value);
        let totalMount = document.getElementById('total');
        let thonHundValue = document.getElementById('thonHund')
        let tenHundValue = document.getElementById('tenHund');
        let fiveHundValue = document.getElementById('fiveHund');
        let threeHundValue = document.getElementById('threeHund');
        let oneHundValue = document.getElementById('oneHund');
        let tenValue = document.getElementById('ten');
        let oneValue = document.getElementById('one');
        let money = calMount;

        if (calMount >= 10 && calMount <= 500000) {
            document.getElementById('calInfo').value = '';
            totalMount.value = calMount;

            
            thonHundValue.value = Math.floor(money / 10000);
            money = money % 10000;
            tenHundValue.value = Math.floor(money / 1000);
            money = money % 1000;
            fiveHundValue.value = Math.floor(money / 500);
            money = money % 500;
            threeHundValue.value = Math.floor(money / 300);
            money = money % 300;
            oneHundValue.value = Math.floor(money / 100);
            money = money % 100;
            tenValue.value = Math.floor(money / 10);
            money = money % 10;
            oneValue.value = Math.floor(money / 1);
            money = money % 1;
        } else {
            document.getElementById('calInfo').value = '';
            alert('0~ 500,000원 사이를 입력해주세요');
        }
    }

    let calcancle = function () {
        let inputValue = document.getElementsByTagName('input');
        for (let cont = 0; cont < inputValue.length; cont++) {
            inputValue[cont].value = '';
        }
    }
    calButton.addEventListener('click', calculator);
    calCancleButton.addEventListener('click', calcancle);

})
