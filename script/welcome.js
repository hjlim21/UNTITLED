document.addEventListener('DOMContentLoaded', () => {
  const intBtn = document.querySelector('.btn.int');
  const messageBox = document.getElementById('message');

  intBtn.addEventListener('click', () => {
    messageBox.textContent = '상명대학교 커뮤니케이션디자인전공 과제전';
  });
});
