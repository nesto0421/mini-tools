function makeNickname() {
  const names = ["불꽃호랑이", "새벽감성", "코딩요정", "블루문"];
  const pick = names[Math.floor(Math.random() * names.length)];
  document.getElementById("result").innerText = pick;
}
