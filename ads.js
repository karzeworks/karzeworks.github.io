// 廣告設定：AdSense 審核通過後，到「廣告 → 依廣告單元」建立「多媒體廣告」（固定尺寸），
// 把 data-ad-slot 的數字填入 slot；slot 留空的版位不會顯示。
const AD_CLIENT = "ca-pub-7288600499250923";

const AD_SLOTS = [
  // 寬螢幕左右兩側空白處
  { id: "adLeft", slot: "", width: 160, height: 600, media: "(min-width: 1100px)" },
  { id: "adRight", slot: "", width: 160, height: 600, media: "(min-width: 1100px)" },
  // 窄螢幕（手機）放在計算結果下方
  { id: "adBottom", slot: "", width: 300, height: 250, media: "(max-width: 1099px)" },
];

(() => {
  for (const ad of AD_SLOTS) {
    const el = document.getElementById(ad.id);
    if (!el || !/^\d+$/.test(ad.slot) || !matchMedia(ad.media).matches) continue;

    const ins = document.createElement("ins");
    ins.className = "adsbygoogle";
    ins.style.cssText = `display:inline-block;width:${ad.width}px;height:${ad.height}px`;
    ins.dataset.adClient = AD_CLIENT;
    ins.dataset.adSlot = ad.slot;

    el.appendChild(ins);
    el.hidden = false;
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }
})();
