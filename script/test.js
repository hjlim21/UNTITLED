const questions = [
  {
    q: "Q1. 알 수 없는 팝업이 떴다! 당신은?",
    opts: ["냅다 닫는다", "일단 내용부터 읽는다", "무시한다", "캡처한다"],
  },
  {
    q: "Q2. 링크를 클릭했는데 아무 일도 안 일어난다. 당신은?",
    opts: [
      "기다린다",
      "못 기다려. 다시 누른다",
      "인터넷이 끊겼나 확인해본다",
      "창을 꺼버린다",
    ],
  },
  {
    q: 'Q3. "에러가 발생했습니다"라는 문구가 떴다. 당신은?',
    opts: [
      "당황한다",
      "다시 시도해본다",
      "포기하고 컴퓨터를 닫는다",
      "원인을 분석해본다",
    ],
  },
  {
    q: "Q4. 마우스 커서가 갑자기 바뀌었다. 당신은?",
    opts: [
      "컴퓨터를 껐다 켜본다",
      "재밌긴한데, 이거뭐지?",
      "캡처한다",
      "고장인가?",
    ],
  },
  {
    q: "Q5. 클릭 없이 뭔가 자동으로 움직였다! 당신은?",
    opts: [".. 소름", "짱신기", "해킹 의심", "이제 아무렇지도 않다"],
  },
];

const results = [
  "무엇이든 원인을 찾고 해결하려 듭니다. 디지털 탐정!",
  "뭔가 이상해도 태연하게 넘기는 당신, 진정한 생존자!",
  "뭔가 이상하면 먼저 눌러보고 보는 실험정신!",
  "예상 밖 상황엔 움찔! 하지만 귀여운 디지털 초보!",
];

let current = 0;
let answers = [];

function startTest() {
  document.getElementById("intro").classList.add("hidden");
  document.getElementById("question-box").classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  const q = questions[current];
  document.getElementById("question-text").textContent = q.q;

  const optBox = document.getElementById("options");
  optBox.innerHTML = "";

  q.opts.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "btn";
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
  document.getElementById("question-box").classList.add("hidden");
  document.getElementById("result-box").classList.remove("hidden");

  const randomIndex = Math.floor(Math.random() * results.length);
  document.getElementById("result-text").textContent = results[randomIndex];
}

document.addEventListener("click", function (event) {
  if (
    event.target.closest("button") ||
    event.target.closest("a") ||
    event.target.closest("input") ||
    event.target.closest("textarea") ||
    event.target.closest("label") ||
    event.target.closest("#options")
  ) {
    return;
  }
});
