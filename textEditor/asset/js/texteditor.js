window.addEventListener('DOMContentLoaded', function () {

  let target = document.getElementById('target');
  let itl = document.getElementById('itl');
  let strong = document.getElementById('bold');
  let underline = document.getElementById('underline');
  let alignLeft = document.getElementById('alignLeft');
  let alignMiddle = document.getElementById('alignMiddle');
  let alignRight = document.getElementById('alignRight');


  //click 시 버튼 효과
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
    let dataName = document.getElementsByTagName('button');

    for (var i = 0, item; item = dataName[i]; i++) {
      if (dataName[i].getAttribute('data-name')) {
        let targetBt = dataName[i];

        targetBt.addEventListener('click', function () {

          if (targetBt.getAttribute('name') == 'alignBt') {
            let alignTg = this.getAttribute('data-name');
            clickBox.call(this);
            target.classList.toggle(alignTg);
            this.value;

          } else {
            clickBox.call(this);
            let game = this.getAttribute('data-name');
            effect(game);
          }
        })
      }
    }
  })()

  function effect(name) {
    document.execCommand(name);
    this.value;
  }

})