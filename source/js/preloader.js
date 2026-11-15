(function () {
  var root = document.documentElement;
  root.classList.add('pl-lock');

  function build() {
    var wrap = document.createElement('div');
    wrap.id = 'pl-overlay';
    wrap.innerHTML =
      '<div class="pl-inner">' +
      '<img class="pl-avatar" src="/images/avatar.jpg" alt="">' +
      "<div class=\"pl-name\">Sunny-Onion's blog</div>" +
      '</div>';
    document.body.appendChild(wrap);
  }

  if (document.body) {
    build();
  } else {
    document.addEventListener('DOMContentLoaded', build);
  }

  var done = false;
  function reveal() {
    if (done) return;
    done = true;
    var el = document.getElementById('pl-overlay');
    root.classList.remove('pl-lock');
    if (!el) return;
    el.classList.add('pl-done');
    setTimeout(function () {
      if (el.parentNode) el.parentNode.removeChild(el);
    }, 700);
  }

  window.addEventListener('load', function () {
    setTimeout(reveal, 450);
  });

  // 兜底：6 秒内一定显示内容，防止卡住
  setTimeout(reveal, 6000);
})();
