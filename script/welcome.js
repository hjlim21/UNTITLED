document.addEventListener('DOMContentLoaded', () => {
  const intBtn = document.querySelector('.btn.int');
  const messageBox = document.getElementById('message');

  intBtn.addEventListener('click', () => {
    messageBox.textContent = '상명대학교 커뮤니케이션디자인전공 과제전';
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const intBtn = document.querySelector('.btn.visite');
  const messageBox = document.getElementById('message');

  intBtn.addEventListener('click', () => {
    messageBox.textContent =
      '과제전에 오신 여러분들 하이염 저희의 관람 포인트는 응애응애 입니다';
  });
});
