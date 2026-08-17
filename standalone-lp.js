(async()=>{
  const host=document.querySelector('[data-lp-audience][data-lp-format]');
  const source=await fetch('index.html?standalone=20260817',{cache:'no-store'}).then(r=>{if(!r.ok)throw new Error('LP source unavailable');return r.text()});
  const doc=new DOMParser().parseFromString(source,'text/html');
  const style=doc.querySelector('style');
  const script=doc.querySelector('script');
  document.head.append(style.cloneNode(true));
  const override=document.createElement('style');
  override.textContent=`
    *{box-sizing:border-box}html{background:#e7eeec}body{margin:0;overflow-x:hidden;background:#e7eeec;color:#17383e;-webkit-font-smoothing:antialiased}
    .standalone-shell{--lp-gold:#d5a82b;--lp-yellow:#ffe263;--lp-ink:#17383e;width:min(100%,430px);min-height:100vh;margin:0 auto;background:#f7faf9;box-shadow:0 0 44px rgba(17,50,55,.12)}
    .standalone-shell[data-lp-audience="female"]{--lp-gold:#c59a68;--lp-yellow:#f8d8d4;--lp-ink:#633f45}
    .standalone-shell .device{width:100%;height:auto;min-height:100vh;border:0;border-radius:0;box-shadow:none;overflow:visible;background:#f7faf9}
    .standalone-shell .device::before,.standalone-shell .close{display:none!important}
    .standalone-shell .screen{height:auto;min-height:100vh;overflow:visible;padding:14px 20px 0;scroll-behavior:smooth}
    .standalone-shell .question-flow{margin-left:0;margin-right:0}
    .standalone-shell .phone-head{margin:0 0 10px;padding:0 2px 8px;border-bottom:1px solid #d8e4e1;letter-spacing:.02em}.standalone-shell .article-result{margin-bottom:0}
    .standalone-shell .experience-strip{position:relative;z-index:3;margin-left:-20px;margin-right:-20px;padding:12px 16px;border-top:1px solid #ead377;border-bottom:2px solid #d6b641;background:linear-gradient(100deg,#fff8cf,#fffdf0 55%,#fff1a8)}
    .standalone-shell .experience-strip::after{content:"SCROLL";position:absolute;right:12px;bottom:-20px;padding:3px 7px;background:#17383e;color:#fff;font:800 9px/1.4 Arial,sans-serif;letter-spacing:.14em}
    .standalone-shell[data-lp-audience="female"] .experience-strip::after{background:#7c4d54}
    .standalone-shell .key-badges{box-shadow:0 8px 20px rgba(14,48,54,.16)}
    .standalone-shell .sp-lead{position:relative;padding:30px 8px 4px;font-size:16px;line-height:2.05}
    .standalone-shell .sp-lead::before{content:"INNER AGING CARE";display:block;margin-bottom:10px;color:#13807d;font:900 11px/1.2 Arial,sans-serif;letter-spacing:.18em;text-align:center}
    .standalone-shell[data-lp-audience="female"] .sp-lead::before{color:#9b5960}
    .standalone-shell .story-panel{margin-top:28px}.standalone-shell .narrator{margin-top:42px;border-radius:2px;border-color:#d4e2df;border-left:6px solid #147c7b;box-shadow:7px 7px 0 #e3efed}
    .standalone-shell[data-lp-audience="female"] .narrator{border-left-color:#9b5960;box-shadow:7px 7px 0 #f1e4e5}
    .standalone-shell .proof-strip{position:relative;margin-top:34px;margin-bottom:18px;border-color:var(--lp-gold);background:linear-gradient(100deg,#fff4bf,#fffdf1);box-shadow:5px 6px 0 rgba(213,168,43,.18)}
    .standalone-shell .proof-strip::before{content:"回答しながら分かること";position:absolute;left:50%;top:-24px;transform:translateX(-50%) rotate(-1deg);width:max-content;padding:5px 12px;background:var(--lp-ink);color:#fff;font-size:11px;font-weight:900}
    .standalone-shell[data-lp-format="survey"] #begin{margin:18px -4px 12px;width:calc(100% + 8px);min-height:62px;border-radius:4px;border:2px solid #fff;background:linear-gradient(180deg,#e34432,#b9281e);box-shadow:0 5px 0 #7f1d16,0 12px 24px rgba(145,36,26,.24);font-size:17px;letter-spacing:.02em;text-shadow:0 1px 0 rgba(0,0,0,.25)}
    .standalone-shell[data-lp-format="survey"] #begin::after{content:"  ▶"}
    .standalone-shell[data-lp-format="survey"] .question-flow{counter-reset:lpquestion}
    .standalone-shell[data-lp-format="survey"] .question-block{counter-increment:lpquestion;margin:30px -8px 0!important;padding:0 16px 28px!important;border:0!important;border-radius:2px!important;background:linear-gradient(160deg,#fff 0 72%,#edf7f5 72%)!important;box-shadow:0 12px 34px rgba(18,63,66,.15)!important;outline:1px solid #c8dcda;overflow:hidden}
    .standalone-shell[data-lp-format="survey"] .question-block::before,.standalone-shell[data-lp-format="survey"] .question-block::after{display:none!important}
    .standalone-shell .question-visual{display:block;margin:0 -16px 18px;background:var(--lp-ink)}
    .standalone-shell .question-visual svg{display:block;width:100%;height:auto}
    .standalone-shell .sr-only{position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}
    .standalone-shell[data-lp-format="survey"] .question-prompt{display:inline-block;margin:0 0 0 2px;padding:5px 11px;background:var(--lp-yellow);color:var(--lp-ink);font-size:10px;transform:rotate(-1deg)}
    .standalone-shell[data-lp-format="survey"] .question-no{float:right;margin:0;padding:5px 10px!important;background:transparent!important;color:#8b6a15!important;border:1px solid #d7bb64;border-radius:999px!important;font-size:10px!important}
    .standalone-shell[data-lp-format="survey"] .question-block .intro{text-align:center;font-size:12px}
    .standalone-shell[data-lp-format="survey"] .options{counter-reset:lpchoice;gap:11px;margin-top:18px}
    .standalone-shell[data-lp-format="survey"] .option{counter-increment:lpchoice;min-height:58px;padding:13px 42px 13px 54px!important;border:1px solid #b9d3d0!important;border-radius:6px!important;background:#fff!important;box-shadow:0 4px 0 #d8e7e4;font-size:14px;font-weight:800}
    .standalone-shell[data-lp-format="survey"] .option::before{content:counter(lpchoice)!important;left:14px!important;width:28px!important;height:28px!important;border:0!important;background:var(--lp-ink)!important;color:#fff;display:grid;place-items:center;font:900 13px/1 Arial,sans-serif;box-shadow:none!important}
    .standalone-shell[data-lp-format="survey"] .option::after{content:"›";position:absolute;right:16px;top:50%;transform:translateY(-54%);color:var(--lp-gold);font:900 28px/1 Georgia,serif}
    .standalone-shell[data-lp-format="survey"] .option.chosen{border-color:var(--lp-gold)!important;background:#fff8d8!important;box-shadow:0 4px 0 #d4ad36}
    .standalone-shell[data-lp-format="survey"] .answer-feedback{margin:17px -4px 0;padding:14px 16px;border-left:5px solid var(--lp-gold);border-radius:0;background:#fff8d5;color:var(--lp-ink);font-size:13px}
    .standalone-shell[data-lp-format="survey"] .insight-card{position:relative;margin:0 -20px 10px!important;padding:0 20px 20px!important;background:#fff!important}
    .standalone-shell[data-lp-format="survey"] .insight-card::before{content:"ANSWER  /  研究所発想の解説";display:block;margin:0 -20px;padding:9px 14px;background:var(--lp-ink);color:#fff;font:900 11px/1.4 Arial,sans-serif;letter-spacing:.08em;text-align:center}
    .standalone-shell[data-lp-format="survey"] .insight-media{width:calc(100% + 40px)!important;margin:0 -20px!important}
    .standalone-shell[data-lp-format="survey"] .proof-metrics{display:grid;grid-template-columns:repeat(3,1fr);margin:0 -20px;border-top:3px solid var(--lp-gold);border-bottom:1px solid #d7c98f;background:linear-gradient(100deg,#fff4bd,#fffdf1)}
    .standalone-shell[data-lp-format="survey"] .proof-metrics .metric{display:grid;place-items:center;min-height:62px;padding:8px 4px;border-right:1px solid #d9c277;color:var(--lp-ink);font-family:"Yu Mincho","Hiragino Mincho ProN",serif;font-size:14px;font-weight:900;text-align:center}
    .standalone-shell[data-lp-format="survey"] .proof-metrics .metric:last-child{border-right:0}
    .standalone-shell[data-lp-format="survey"] .insight-card p{position:relative;margin:0;padding:20px 18px 8px!important;background:#fff;font-size:15px;line-height:2}
    .standalone-shell[data-lp-format="survey"] .insight-card p::first-letter{font-size:1.5em;color:var(--lp-gold);font-weight:900}
    .standalone-shell[data-lp-format="survey"] .insight-foot{padding:0 18px 8px!important}
    .standalone-shell[data-lp-format="survey"] .next-cue{margin:0 -20px;padding:15px 10px 22px;background:linear-gradient(#fff,#e9f5f3);color:var(--lp-ink);letter-spacing:.05em}
    .standalone-shell .article-offer{margin-left:0;margin-right:0;padding-bottom:26px;border:2px solid #d4b45a;background:linear-gradient(155deg,#173c44,#0d262c);box-shadow:0 12px 30px rgba(7,34,39,.25)}
    .standalone-shell .article-offer::before{content:"研究所発想のご案内";display:inline-block;margin-bottom:8px;padding:5px 12px;background:linear-gradient(90deg,#b7891f,#f3d778,#b7891f);color:#3e2e08;font-size:11px;font-weight:900;letter-spacing:.06em}
    .standalone-shell[data-lp-format="survey"] .article-offer::before{content:"回答者へのご案内"}
    .standalone-shell .article-offer .mock-cta{min-height:60px;border:2px solid #fff;background:linear-gradient(#e54532,#b6251b);box-shadow:0 5px 0 #71180f;font-size:16px}
    .standalone-shell .fine-print{line-height:1.75;background:#f3f5f4}
    @media(max-width:430px){.standalone-shell{width:100%;box-shadow:none}}
  `;
  document.head.append(override);
  const audience=host.dataset.lpAudience;
  const format=host.dataset.lpFormat;
  const boot=`\n audience=${JSON.stringify(audience)};format=${JSON.stringify(format)};step=0;answers=[];document.querySelector('.device').dataset.audience=audience;document.querySelector('.device').dataset.format=format;renderIntro();`;
  Function(script.textContent+boot)();
})().catch(error=>{document.body.innerHTML='<p style="padding:32px;font-family:sans-serif">ページを読み込めませんでした。トップページから再度お試しください。</p>';console.error(error)});
