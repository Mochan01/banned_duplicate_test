

window.onload = () => {
  const el = document.getElementById("puyo");

  // @ts-ignore
  dataLayer.push({
    'event': 'event_puyo',
    // @ts-ignore
    'puyo': "あああああああああああああああ"
  });

  /*
  setTimeout(() => {
    if (!el) return;
    el.innerText = "hogehogehoge";
  }, 3000)

  setTimeout(() => {
    if (!el) return;
    el.innerText = "puyopuyopuyo";
  }, 5000)
  */
};
