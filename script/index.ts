

window.onload = () => {
  const el = document.getElementById("puyo");
  setTimeout(() => {
    if (!el) return;
    el.innerText = "hogehogehoge";
  }, 3000)

  setTimeout(() => {
    if (!el) return;
    el.innerText = "puyopuyopuyo";
  }, 5000)
};
