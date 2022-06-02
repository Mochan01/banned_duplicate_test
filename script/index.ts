

window.onload = () => {
  const button = document.getElementById("hoge");
  button?.addEventListener("click", () => {
    const now = Date.now();
    // @ts-ignore
    window.gtag('event', 'aaa', {
      'event_category' : 'bbb',
      'event_label' : now
    });
  });
};
