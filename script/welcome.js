document.addEventListener("DOMContentLoaded", () => {
  const intBtn = document.querySelector(".btn");
  const messageBox = document.getElementById("message");

  intBtn.addEventListener("click", () => {
    messageBox.innerHTML =  `
    <p>커뮤니케이션디자인 전공의 다양한 수업에서 시작된 과제들을 모았습니다.</p>
    <p>이름 붙일 수 없는 시도와 고민의 결과물들이 한자리에 모인, 되짚어볼 수 있도록 만든 디자인들의 기록입니다.</p>
    <p>전시장 안팎에서, 커디 학생들의 생각과 시도를 자유롭게 감상해보세요.</p>
  `;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const intBtn = document.querySelector(".btn.visite");
  const messageBox = document.getElementById("message");

  intBtn.addEventListener("click", () => {
    messageBox.innerHTML = `
    <p>.</p>
  `;
  });
});
