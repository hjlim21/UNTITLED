const questions = [
  {
    q: 'Q1. 아래 버튼 중 하나를 누르세요.',
    opts: ['이름 없음', '누르지 마시오', '이미 눌림', '이건 뭘까?'],
  },
  {
    q: 'Q2. 마우스 커서가 두 개가 되었다. 당신은?',
    opts: ['둘 다 움직임', '꺼버림', '스샷 저장', '좀 멋있음'],
  },
  {
    q: 'Q3. 버튼을 눌렀더니 아무 일도 없었다. 당신은?',
    opts: ['다시 누름', '다른 버튼도 누름', '포기', '멍함'],
  },
  {
    q: 'Q4. 당신의 커서는 어떤가요?',
    opts: ['휘갈긴 선', '눈동자', '내 손', '사라지는 고양이'],
  },
  {
    q: 'Q5. 클릭 없이 이동할 수 있다면?',
    opts: ['해본다', '일부러 클릭', '원하지 않아', '그냥 닫음'],
  },
];

const results = [
  '당신은 버그를 키우는 사람입니다.',
  '당신은 커서의 환영을 좇는 사람입니다.',
  '당신은 이름 없는 상태로 존재합니다.',
  '당신은 인터페이스를 이탈하는 모험가입니다.',
];

let current = 0;
let answers = [];

function startTest() {
  document.getElementById('intro').classList.add('hidden');
  document.getElementById('question-box').classList.remove('hidden');
  showQuestion();
}

function showQuestion() {
  const q = questions[current];
  document.getElementById('question-text').textContent = q.q;
  const optBox = document.getElementById('options');
  optBox.innerHTML = '';
  q.opts.forEach((opt) => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.onclick = () => {
      answers.push(opt);
      current++;
      if (current < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    };
    optBox.appendChild(btn);
  });
}

function showResult() {
  document.getElementById('question-box').classList.add('hidden');
  document.getElementById('result-box').classList.remove('hidden');
  const idx = answers.length % results.length;
  document.getElementById('result-text').textContent = results[idx];
}

document.addEventListener('click', function (event) {
  if (
    event.target.closest('button') ||
    event.target.closest('a') ||
    event.target.closest('input') ||
    event.target.closest('#options')
  ) {
    return;
  }

  history.back();
});
