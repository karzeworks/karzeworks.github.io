// 全站共用的外觀切換：在 <head> 同步載入，先套用已保存的外觀避免閃爍；
// 頁面上任何帶 data-theme-toggle 的按鈕都會變成「系統 → 淺色 → 深色」的切換鈕。
(() => {
  const KEY = "theme";
  const MODES = ["system", "light", "dark"];
  const LABEL = { system: "系統", light: "淺色", dark: "深色" };
  const ICON = {
    system: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 4a8 8 0 0 1 0 16z" fill="currentColor"/></svg>',
    light: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.5" fill="currentColor"/><g stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M5.3 18.7l1.8-1.8M16.9 7.1l1.8-1.8"/></g></svg>',
    dark: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z" fill="currentColor"/></svg>',
  };
  const root = document.documentElement;

  let saved = null;
  try { saved = localStorage.getItem(KEY); } catch { /* storage 不可用時就跟隨系統 */ }
  let mode = MODES.includes(saved) ? saved : "system";

  const apply = () => {
    if (mode === "system") delete root.dataset.theme;
    else root.dataset.theme = mode;
  };
  apply();

  const render = (btn) => {
    btn.innerHTML = `${ICON[mode]}<span>${LABEL[mode]}</span>`;
    btn.setAttribute("aria-label", `外觀：${LABEL[mode]}，點擊切換`);
    btn.title = `外觀：${LABEL[mode]}`;
  };

  document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("[data-theme-toggle]");
    buttons.forEach((btn) => {
      render(btn);
      btn.addEventListener("click", () => {
        mode = MODES[(MODES.indexOf(mode) + 1) % MODES.length];
        try {
          if (mode === "system") localStorage.removeItem(KEY);
          else localStorage.setItem(KEY, mode);
        } catch { /* ignore */ }
        apply();
        buttons.forEach(render);
      });
    });
  });
})();
