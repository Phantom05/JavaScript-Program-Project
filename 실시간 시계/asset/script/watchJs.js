'use strict';

{
  window.addEventListener('DOMContentLoaded', function () {
    setInterval(function () {
      var time = document.getElementById('time');
      var titleDay = document.getElementById('dateNow');
      var date = new Date();
      var year = String(date.getFullYear());
      var mon = String(date.getMonth() + 1);
      var day = String(date.getDate());

      var hour = String(date.getHours());
      var min = String(date.getMinutes());
      var sec = String(date.getSeconds());
      hour.length == 1 ? hour = '0' + hour : hour;
      min.length == 1 ? min = '0' + min : min;
      sec.length == 1 ? sec = '0' + sec : sec;

      year.length == 1 ? year = '0' + year : year;
      mon.length == 1 ? mon = '0' + mon : mon;
      day.length == 1 ? day = '0' + day : day;

      var customYear = year.substr(2, 2);
      var timeNow = hour + ':' + min + ':' + sec;
      var dateNow = customYear + '-' + mon + '-' + day;

      time.innerText = timeNow;
      titleDay.innerText = dateNow;
    }, 1000);

    var timeBt = document.getElementById('timeBt');
    var labBt = document.getElementById('labBt');
    var timeView = document.getElementById('timeView');
    var labView = document.getElementById('labView');
    var analogbutton = document.getElementById('analogbutton');
    var stopbutton = document.getElementById('stopbutton');
    var lab = document.getElementById('lab');
    var resetBt = document.getElementById('resetBt');
    var outButton = document.getElementById('outButton');
    var labBoxId = document.getElementById('labBoxId');
    var titleFont = document.getElementById('titleFont');
    var analogWatch = document.getElementById('analogWatch');

    var buttonList = document.querySelectorAll('.watch__controler-cont li');
    console.log(buttonList);

    function activeBt() {
      for (var i = 0; i < buttonList.length; i++) {
        buttonList[i].style.width = "30%";
      }
    }
    function noneActivBt() {
      for (var i = 0; i < buttonList.length; i++) {
        buttonList[i].style.width = "47%";
      }
    }

    labBt.addEventListener('click', function (e) {

      if (labBt.getAttribute('data-start') == "start") {
        labBt.firstElementChild.textContent = '시작';

        labBt.classList.add('startColor');
        labBt.setAttribute('data-start', "stop");
        stopbutton.classList.add('ft-Wt');
        analogbutton.setAttribute('data-name', 'unact');
        analogbutton.textContent = "랩";
        timeView.classList.add('changeClose');
        labView.classList.add('changeView');
        timeBt.setAttribute('data-name', 'actLabFun'); // labBt act
        labBoxId.classList.add('changeView');
        titleFont.textContent = "디지털";
        main__analog.classList.remove('analog_Show');

        if (timeView.classList.contains('aniChangeAanl')) {
          timeView.classList.remove('aniChangeAanl');
          console.log('aniChangeAanl');
        } else if (timeView.classList.contains('aniChangeDigi')) {
          timeView.classList.remove('aniChangeDigi');
          console.log('aniChangeDigi');
        } else {
          console.log('deefault');
        }

        setTimeout(function () {
          outButton.classList.add('changeView');
          resetBt.classList.add('changeView');
        }, 500);
        activeBt();
      } else if (labBt.getAttribute('data-start') == "stop") {
        labBt.classList.replace('startColor', 'stopColor');
        labBt.firstElementChild.textContent = '정지';
        labBt.setAttribute('data-start', "restart");
        analogbutton.setAttribute('data-name', 'unact');
        analogbutton.textContent = "랩";

        Interval = setInterval(startTimer, 10); //timer start
      } else if (labBt.getAttribute('data-start') == "restart") {
        labBt.firstElementChild.textContent = '재시작';
        labBt.classList.replace('stopColor', 'startColor');
        labBt.setAttribute('data-start', "stop");
        analogbutton.setAttribute('data-name', 'unact');
        analogbutton.textContent = "랩";

        clearInterval(Interval); //timer stop
      } else {}
    });

    resetBt.addEventListener('click', function () {
      tens > 1 ? clearInterval(Interval) : false;

      tens = "00";
      seconds = "00";
      minit = "00";
      labTens.innerHTML = tens;
      labSec.innerHTML = seconds;
      labMin.innerHTML = minit;
      labBt.firstElementChild.textContent = '시작';
      labBt.setAttribute('data-start', "stop");
      stopbutton.classList.add('ft-Wt');
      analogbutton.setAttribute('data-name', 'unact');
      labBox__left.innerHTML = "";
      labBox__right.innerHTML = '';
      labNumber = 0;

      labBt.classList.replace('stopColor', 'startColor');
    });

    outButton.addEventListener('click', function () {
      labBt.setAttribute('data-start', 'start');
      timeView.classList.remove('changeClose');
      labView.classList.remove('changeView');
      outButton.classList.remove('changeView');
      resetBt.classList.remove('changeView');
      labBt.firstElementChild.textContent = '스톱워치';
      labBt.classList.remove('stopColor');
      analogbutton.textContent = '아날로그';
      analogbutton.setAttribute('data-name', 'analog');
      timeBt.setAttribute('data-name', "noneLabFun");
      labBoxId.classList.remove('changeView');
      labBox__left.innerHTML = '';
      labBox__right.innerHTML = '';
      labNumber = 0;

      noneActivBt();
      tens > 1 ? clearInterval(Interval) : false;

      tens = "00";
      seconds = "00";
      minit = "00";
      labTens.innerHTML = tens;
      labSec.innerHTML = seconds;
      labMin.innerHTML = minit;

      labBt.classList.remove('startColor');
      titleFont.textContent = "디지털";
    });

    var labMin = document.getElementById('min');
    var labSec = document.getElementById('seconds');
    var labTens = document.getElementById('tens');
    var minit = 0;
    var seconds = 0;
    var tens = 0;

    function startTimer() {
      tens++;
      if (tens < 9) {
        labTens.innerHTML = "0" + tens;
      }
      if (tens > 9) {
        labTens.innerHTML = tens;
      }
      if (tens > 99) {
        seconds++;
        labSec.innerHTML = "0" + seconds;
        tens = 0;
        labTens.innerHTML = "0" + 0;
      }
      if (seconds > 9) {
        labSec.innerHTML = seconds;
      }
      if (seconds > 59) {
        minit++;
        labMin.innerText = "0" + minit;
        seconds = 0;
        seconds.innerHTML = "+" + 0;
      }
      if (minit > 9) {
        labMin.innerText = minit;
      }
    }

    var labBox__left = document.getElementById('labBox__left');
    var labBox__right = document.getElementById('labBox__right');
    var labNumber = 0;
    var server = document.getElementById('server');

    var main__digital = document.getElementById('main__digital');
    var main__analog = document.getElementById('main__analog');

    var digitalShowBox = document.getElementById('digitalShowBox');

    timeBt.addEventListener('click', function () {
      if (analogbutton.getAttribute('data-name') == "analog") {
        analogbutton.textContent = "디지털";
        analogbutton.setAttribute('data-name', 'digital');
        timeView.classList.add('aniChangeAanl');
        timeView.classList.remove('aniChangeDigi');
        main__analog.classList.add('analog_Show');
        titleFont.textContent = '아날로그';
        main__analog.classList.remove('analog_Close');
        analogWatch.classList.remove('analog_Close');
      } else if (analogbutton.getAttribute('data-name') == "digital") {
        timeBt.firstElementChild.textContent = '아날로그';
        analogbutton.setAttribute('data-name', 'analog');
        timeView.classList.remove('aniChangeAanl');
        timeView.classList.add('aniChangeDigi');
        main__analog.classList.remove('analog_Show');
        titleFont.textContent = '디지털';
        main__analog.classList.add('analog_Close');
        main__analog.classList.remove('changeClose');
        analogWatch.classList.add('analog_Close');
      };

      // lab active
      if (timeBt.getAttribute('data-name') == "actLabFun") {
        labNumber++;
        tens < 1 ? labNumber = 0 : false;

        labNumber < 10 ? labNumber = "0" + labNumber : labNumber = labNumber;
        var labRank = document.createElement('p');
        var labInnerRank = document.createElement('span');
        var aby = labInnerRank.innerHTML = "<span>" + '랩 ' + labNumber + "</span>";
        console.log(aby);
        var labTool = aby + ' ' + labMin.textContent + ":" + labSec.textContent + ":" + labTens.textContent;
        labRank.innerHTML = labTool;
        tens > 1 ? labBox__left.prepend(labRank) : false;
        console.log(labNumber);

        if (labBox__left.childElementCount > 13) {
          labBox__left.classList.add('labBoxSendCont');
          var labBoxlastChildLeft = labBox__left.lastElementChild;
          labBox__right.prepend(labBoxlastChildLeft);
          var labBoxlastChildRight = labBox__right.lastElementChild;
          if (labBox__right.childElementCount > 13) {
            labBox__right.classList.add('labBoxSendCont');
            server.prepend(labBoxlastChildRight);
          }
        }
      }
    });

    var luminous = document.getElementById('luminous');
    luminous.addEventListener('click', function () {
      document.body.classList.toggle('luminousMode');
      this.classList.toggle('luminousBt');

      var rec = document.getElementById('rec');
      rec.classList.toggle('lightBet');
    });

    // analog watch


    var analogSec = document.getElementById('analogSec');
    var analogMin = document.getElementById('analogMin');
    var analohHours = document.getElementById('analohHours');
    var analogDay = document.getElementById('analogDay');

    var secChim = setInterval(function () {
      var timeGet = new Date();
      var timeGetDay = timeGet.getDate();
      var timeGetHours = timeGet.getHours();
      var timeGetMin = timeGet.getMinutes();
      var timeGetSec = timeGet.getSeconds();

      if (timeGetHours > 12) timeGetHours = timeGetHours - 12;

      var dh = timeGetHours * 30 + timeGetMin / 2 + 90;
      dh = parseInt(dh);
      var dm = timeGetMin * 6 + 90;
      var ds = timeGetSec * 6 + 90;

      analogSec.style.transform = "rotate(" + ds + "deg)";
      analogMin.style.transform = "rotate(" + dm + "deg)";
      analohHours.style.transform = "rotate(" + dh + "deg)";

      analogDay.textContent = timeGetDay;
    });

    var alamA = document.getElementById('alamA');
    var alam = document.getElementById('alam');
    alam.addEventListener('click', function () {
      alamA.play();
    });

    var alarmBt = document.getElementById('alarmBt');
    var watch__footer = document.getElementById('watch__footer');
    var alarm__container = document.getElementById('alarm__container');

    var snoozeBt = document.getElementById('snoozeBt');
    var dismissBt = document.getElementById('dismissBt');

    alarmBt.addEventListener('click', function () {
      // if(alarmBt.getAttribute('data-name')=='close'){
      //   main__digital.classList.add('alarmClose');
      //   main__analog.classList.add('alarmClose');
      //   watch__footer.classList.add('alarmClose');
      //   alarmBt.setAttribute('data-name','open');

      // }else{
      //   main__digital.classList.remove('alarmClose');
      //   main__analog.classList.remove('alarmClose');
      //   watch__footer.classList.remove('alarmClose');
      //   alarmBt.setAttribute('data-name','close');
      // }
      main__digital.classList.toggle('alarmClose');
      main__analog.classList.toggle('alarmClose');
      watch__footer.classList.toggle('alarmClose');
      alarm__container.classList.toggle('alarmClose');
      snoozeBt.addEventListener('click', function () {
        alamA.pause();
      });
    });

    /*button*/
    var clickButton = document.getElementById("clickButton");
    var body = document.getElementsByTagName("body")[0];
    var wifiIcon = document.getElementById("wifi-icon");
    var wifiLabel = document.getElementById("wifiLabel");

    clickButton.addEventListener("click", function (e) {
      if (e.target.id == "circleButton") {
        circleButton.classList.toggle("activeButton");
        clickButton.classList.toggle("activeStyle");

        /**/
        body.classList.toggle("changeBody");
        wifiIcon.classList.toggle("activeWifi");
        wifiLabel.classList.toggle("changeLabel");
      }
    });
  }); // domcontent


  /*
  js chart
  */
  var chart = AmCharts.makeChart("chartdiv", {
    "type": "serial",
    "addClassNames": true,
    "theme": "light",
    "autoMargins": false,
    "marginLeft": 30,
    "marginRight": 8,
    "marginTop": 10,
    "marginBottom": 26,
    "balloon": {
      "adjustBorderColor": false,
      "horizontalPadding": 10,
      "verticalPadding": 8,
      "color": "#ffffff"
    },

    "dataProvider": [{
      "year": 2009,
      "income": 23.5,
      "expenses": 21.1
    }, {
      "year": 2010,
      "income": 26.2,
      "expenses": 30.5
    }, {
      "year": 2011,
      "income": 30.1,
      "expenses": 34.9
    }, {
      "year": 2012,
      "income": 29.5,
      "expenses": 31.1
    }, {
      "year": 2013,
      "income": 30.6,
      "expenses": 28.2,
      "dashLengthLine": 5
    }, {
      "year": 2014,
      "income": 34.1,
      "expenses": 32.9,
      "dashLengthColumn": 5,
      "alpha": 0.2,
      "additional": "(projection)"
    }],
    "valueAxes": [{
      "axisAlpha": 0,
      "position": "left"
    }],
    "startDuration": 1,
    "graphs": [{
      "alphaField": "alpha",
      "balloonText": "<span style='font-size:12px;'>[[title]] in [[category]]:<br><span style='font-size:20px;'>[[value]]</span> [[additional]]</span>",
      "fillAlphas": 1,
      "title": "Income",
      "type": "column",
      "valueField": "income",
      "dashLengthField": "dashLengthColumn"
    }, {
      "id": "graph2",
      "balloonText": "<span style='font-size:12px;'>[[title]] in [[category]]:<br><span style='font-size:20px;'>[[value]]</span> [[additional]]</span>",
      "bullet": "round",
      "lineThickness": 3,
      "bulletSize": 7,
      "bulletBorderAlpha": 1,
      "bulletColor": "#FFFFFF",
      "useLineColorForBulletBorder": true,
      "bulletBorderThickness": 3,
      "fillAlphas": 0,
      "lineAlpha": 1,
      "title": "Expenses",
      "valueField": "expenses",
      "dashLengthField": "dashLengthLine"
    }],
    "categoryField": "year",
    "categoryAxis": {
      "gridPosition": "start",
      "axisAlpha": 0,
      "tickLength": 0
    },
    "export": {
      "enabled": true
    }
  });
}