$(document).ready(function () {
  const texts = ['UNTITLED', 'FFF'];
  let index = 0;

  $('#switchTextBtn').click(function () {
    const currentText = $(this).find('span').text();

    if (currentText === 'FFF') {
      alert('2025 상명대학교 커뮤니케이션디자인전공 과제전 주간');
      window.location.href = 'welcome.html';
      return;
    }

    index = (index + 1) % texts.length;
    $(this).find('span').text(texts[index]);
  });
});
