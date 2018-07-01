window.addEventListener('DOMContentLoaded', function () {

  const securityCheckList = [
    {
      securityLevel: '사용불가',
      cotnent: ': 비밀번호 재작성 필요',
      contentInfo: '6~16자의 영문 대소문자, 숫자 및 특수문자 사용',
      securityPer: 10,
    },
    {
      securityLevel: '보안불안',
      cotnent: ' : 안전한 비밀번호를 권장',
      contentInfo: '보다 안전한 비밀번호를 사용하길 권장합니다.',
      securityPer: 33,
    },
    {
      securityLevel: '보안적정',
      cotnent: ' : 안전하게 사용 가능',
      contentInfo: '안전하게 사용하실 수 있는 비밀번호 입니다.',
      securityPer: 66,
    },
    {
      securityLevel: '보안높음',
      cotnent: ' : 예측하기 힘든 비밀번호',
      contentInfo: '예측하기 힘든 비밀번호로 더욱 안전합니다.',
      securityPer: 95,
    },
  ]

  const submitForm = document.getElementById('submitForm');
  const signupPassword = document.getElementById('signupPassword');
  const securityBar = document.getElementById('securityBar');
  const securityTextBox = document.getElementById('securityTextBox');

  const securityTitle = document.getElementById('securityTitle');
  const securitySubInfo = document.getElementById('securitySubInfo');
  const securityTitleInner = document.getElementById('securityTitleInner');

  const securityBox = document.getElementById('securityBox');
  const secCheckBox = document.getElementById('secCheckBox');
  const securityCheckPassword = document.getElementById('securityCheckPassword');

  signupPassword.addEventListener('keyup', function () {
    securityBox.classList.add('sec_show_Box');
    let strLen = signupPassword.value.length + 1;
    let sreValue = signupPassword.value;
    let pattern = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,16}$/;
    let secData = securityCheckList[0];
    try {
      if (pattern.test(sreValue)) {
        console.log('true')
        if (strLen > 5 && strLen < 10) {
          secData = securityCheckList[1];
          securityBar.style.background = 'orange';
          securityBar.style.width = secData.securityPer + '%';
          securityTitle.innerHTML = secData.securityLevel;
          securityTitleInner.innerHTML = secData.cotnent;
          securitySubInfo.innerHTML = secData.contentInfo
          securityTextBox.style.opacity = 1;
        } else if (strLen > 10 && strLen < 15) {
          secData = securityCheckList[2];
          securityBar.style.background = 'green';
          securityBar.style.width = securityCheckList[2].securityPer + '%';
          securityTitle.innerHTML = secData.securityLevel;
          securityTitleInner.innerHTML = secData.cotnent;
          securitySubInfo.innerHTML = secData.contentInfo
        } else if (strLen > 15) {
          secData = securityCheckList[3];
          securityBar.style.background = 'blue';
          securityBar.style.width = securityCheckList[3].securityPer + '%';
          securityTitle.innerHTML = secData.securityLevel;
          securityTitleInner.innerHTML = secData.cotnent;
          securitySubInfo.innerHTML = secData.contentInfo
        }
      } else {
        securityBar.style.background = 'red';
        securityBar.style.width = secData.securityPer + '%';
        securityTitle.innerHTML = secData.securityLevel;
        securityTitleInner.innerHTML = secData.cotnent;
        securitySubInfo.innerHTML = secData.contentInfo
        securityTextBox.style.opacity = 1;
        console.log('false')
      }
    } catch (e) {
      console.log(e.message)
    }
  })

  securityCheckPassword.addEventListener('keyup', function () {
    if (signupPassword.value === securityCheckPassword.value && securityCheckPassword.value.length > 1) {
      secCheckBox.classList.add('sec_show_Box');
    } else {
      secCheckBox.classList.remove('sec_show_Box');
    }
  })

  submitForm.addEventListener('submit', function (e) {
    if (!(submitForm.check1.checked)) {
      alert('이메일 약관에 체크해주세요.');
      e.preventDefault();
    } else {
      if ((!(submitForm.check2.checked))) {
        alert('서비스 약관에 체크해주세요.');
        e.preventDefault();
      } else {
        console.log('가입!')
      }
    }

    if (/(\w)\1\1\1/.test(signupPassword.value)) {
      e.preventDefault();
      alert('비밀번호에 같은 문자를 4번 사용 할수 없습니다.');
    }
  })
})