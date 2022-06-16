

window.onload = () => {
  /*
  const el = document.getElementById("puyo");
  setTimeout(() => {
    if (!el) return;
    el.innerText = "hogehogehoge";
  }, 3000)
  */

  // @ts-ignore
  dataLayer.push({
    'event': 'event_puyo',
    'puyo': 'hogehogehoge'
  });
};
