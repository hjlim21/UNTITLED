// $(document).ready(function () {
//   const texts = ['UNTITLED', 'FFF'];
//   let index = 0;

//   $('#switchTextBtn').click(function () {
//     const currentText = $(this).find('span').text();

//     if (currentText === 'FFF') {
//       alert(
//         '이름 붙일 수 없는 시도들, 정의하기 이전의 생각들, 디자인의 기록입니다.'
//       );
//       window.location.href = 'welcome.html';
//       return;
//     }

//     index = (index + 1) % texts.length;
//     $(this).find('span').text(texts[index]);
//   });
// });
$(document).ready(function () {
  const texts = ['UNTITLED', 'FFF'];
  let index = 0;

  $('#switchTextBtn').click(function () {
    const currentText = $(this).find('span').text().trim();

    if (currentText === 'FFF') {
      alert(
        '이름 붙일 수 없는 시도들, 정의하기 이전의 생각들, 디자인의 기록입니다.'
      );
      window.location.href = 'welcome.html'; // 경로 확인 필수!
      return;
    }

    index = (index + 1) % texts.length;
    $(this).find('span').text(texts[index]);
  });
});
