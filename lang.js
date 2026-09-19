// Đổi ngôn ngữ hiển thị. Mặc định đi theo ngôn ngữ trình duyệt, tiếng Việt
// cho máy dùng tiếng Việt, còn lại tiếng Anh — Apple duyệt app bằng tiếng Anh.
(function () {
  var saved = null;
  try {
    saved = localStorage.getItem('lang');
  } catch (e) {
    // Trình duyệt chặn storage thì cứ đi theo ngôn ngữ máy.
  }

  var initial =
    saved || ((navigator.language || 'en').slice(0, 2) === 'vi' ? 'vi' : 'en');

  function apply(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-lang]').forEach(function (el) {
      el.classList.toggle('on', el.dataset.lang === lang);
    });
    document.querySelectorAll('.langbar button').forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.dataset.set === lang));
    });
    try {
      localStorage.setItem('lang', lang);
    } catch (e) {
      // Không lưu được thì thôi, lần sau lại theo ngôn ngữ máy.
    }
  }

  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.langbar button');
    if (btn) apply(btn.dataset.set);
  });

  apply(initial);
})();
