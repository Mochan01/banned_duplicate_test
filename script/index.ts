const callback = () => {
  alert();
}

window.onload = () => {

  const elements: HTMLElement[] = [];

  let el: any = document.getElementById("hoge1");
  elements.push(el);

  el = document.getElementById("hoge2");
  elements.push(el);

  const ctx: any = el.getContext("2d");
  const chara = new Image();
  chara.src = "../img/sample_canvas.jpg";  // 画像のURLを指定
  chara.onload = () => {
    ctx.drawImage(chara, 0, 0);
  };

  el = document.getElementById("hoge3");
  elements.push(el);

  for (const el of elements) {
    el.oncontextmenu =  () => {
      return false;
    };
  }



};
