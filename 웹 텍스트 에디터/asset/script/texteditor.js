'use strict';

window.addEventListener('DOMContentLoaded', function () {

  var target = document.getElementById('target');
  var itl = document.getElementById('itl');
  var strong = document.getElementById('bold');
  var underline = document.getElementById('underline');
  var alignLeft = document.getElementById('alignLeft');
  var alignMiddle = document.getElementById('alignMiddle');
  var alignRight = document.getElementById('alignRight');

  // button click effect
  function clickBox() {
    if (this.value == 'disabled') {
      this.classList.add('btActive');
      this.value = 'active';
    } else {
      this.classList.remove('btActive');
      this.value = 'disabled';
    }
    target.focus();
  }

  (function () {
    var dataName = document.getElementsByTagName('button');

    for (var i = 0, item; item = dataName[i]; i++) {
      if (dataName[i].getAttribute('data-name')) {
        (function () {
          var targetBt = dataName[i];

          targetBt.addEventListener('click', function () {

            if (targetBt.getAttribute('name') == 'alignBt') {
              var alignTg = this.getAttribute('data-name');
              clickBox.call(this);
              target.classList.toggle(alignTg);
              this.value;
            } else {
              clickBox.call(this);
              var game = this.getAttribute('data-name');
              effect(game);
            }
          });
        })();
      }
    }
  })();

  function effect(name) {
    document.execCommand(name);
    this.value;
  }

  var fileUpload = document.getElementById('fileUpload');
  var photo = document.getElementById('photo');
  var inputImg = document.getElementsByClassName('inputImg');
  var inputImgCount = -1;

  fileUpload.addEventListener('change', function () {
    var fileList = fileUpload.files;
    var reader = new FileReader();
    reader.readAsDataURL(fileList[0]);
    reader.onload = function () {
      var newImgTag = document.createElement('img');
      inputImgCount++;

      newImgTag.setAttribute('class', 'inputImg');
      newImgTag.setAttribute('src', '');
      target.append(newImgTag);
      document.getElementsByClassName('inputImg')[inputImgCount].src = reader.result;
      target.focus();
    };
  });

  target.addEventListener('drag', function () {
    console.log('hh');
  });

  var viewSource = document.getElementById('viewSource');
  var paraViewsource = function paraViewsource() {
    viewSource.addEventListener('mouseover', function (e) {

      console.log('ff');
    });
  };

  paraViewsource();
});