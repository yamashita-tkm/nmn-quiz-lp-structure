(async()=>{
  const host=document.querySelector('[data-lp-audience][data-lp-format]');
  const source=await fetch('index.html?standalone=20260820-02',{cache:'no-store'}).then(r=>{if(!r.ok)throw new Error('LP source unavailable');return r.text()});
  const doc=new DOMParser().parseFromString(source,'text/html');
  const style=doc.querySelector('style');
  const script=doc.querySelector('script');
  document.head.append(style.cloneNode(true));
  const override=document.createElement('style');
  override.textContent=`
    *{box-sizing:border-box}html{background:#f3f8f7}body{margin:0;overflow-x:hidden;background:#f3f8f7;color:#315b5b;-webkit-font-smoothing:antialiased}
    .standalone-shell{--lp-gold:#cbb45f;--lp-yellow:#fff3b4;--lp-ink:#237d79;--lp-aqua:#45bdb5;--lp-pale:#effaf8;--lp-coral:#e9515c;width:min(100%,430px);min-height:100vh;margin:0 auto;background:#fff;box-shadow:0 0 36px rgba(43,126,122,.1);font-family:"Yu Mincho","Hiragino Mincho ProN","Hiragino Mincho Pro",serif;font-weight:400;font-feature-settings:"palt" 1,"kern" 1;font-kerning:normal;letter-spacing:.08em;text-spacing-trim:trim-start}
    .standalone-shell :lang(en),.standalone-shell .latin{font-family:"Adobe Garamond Pro",Garamond,"Times New Roman",serif;font-feature-settings:"kern" 1;letter-spacing:.08em}.standalone-shell strong,.standalone-shell b{font-weight:500}
    .standalone-shell[data-lp-audience="female"]{--lp-gold:#cfb675;--lp-yellow:#fff0c6;--lp-ink:#277f7b;--lp-aqua:#55bfb6;--lp-pale:#f3fbfa;--lp-coral:#e95863}
    .standalone-shell[data-lp-audience="male"][data-lp-format="survey"],.standalone-shell[data-lp-audience="male"][data-lp-format="survey"] *{font-family:-apple-system,BlinkMacSystemFont,"Helvetica Neue","Hiragino Kaku Gothic ProN","Hiragino Sans","Yu Gothic",Meiryo,sans-serif!important}
    .standalone-shell .device{width:100%;height:auto;min-height:100vh;border:0;border-radius:0;box-shadow:none;overflow:visible;background:#fff}
    .standalone-shell .device::before,.standalone-shell .close{display:none!important}
    .standalone-shell .screen{height:auto;min-height:100vh;overflow:visible;padding:14px 20px 0;scroll-behavior:smooth}
    .standalone-shell .question-flow{margin-left:0;margin-right:0}
    .standalone-shell .phone-head{margin:0 0 10px;padding:0 2px 8px;border-bottom:1px solid #d8e4e1;letter-spacing:.02em}.standalone-shell .article-result{margin-bottom:0}
    .standalone-shell .experience-strip{position:relative;z-index:3;margin-left:-20px;margin-right:-20px;padding:12px 16px;border-top:1px solid #ead377;border-bottom:2px solid #d6b641;background:linear-gradient(100deg,#fff8cf,#fffdf0 55%,#fff1a8)}
    .standalone-shell .experience-strip::after{content:"SCROLL";position:absolute;right:12px;bottom:-20px;padding:3px 7px;background:var(--lp-aqua);color:#fff;font:500 9px/1.4 Arial,sans-serif;letter-spacing:.14em}
    .standalone-shell[data-lp-audience="female"] .experience-strip::after{background:var(--lp-aqua)}
    .standalone-shell .key-badges{box-shadow:0 8px 20px rgba(14,48,54,.16)}
    .standalone-shell .sp-lead{position:relative;padding:30px 8px 4px;font-size:16px;line-height:2.05}
    .standalone-shell .sp-lead::before{content:"INNER AGING CARE";display:block;margin-bottom:10px;color:#13807d;font:900 11px/1.2 Arial,sans-serif;letter-spacing:.18em;text-align:center}
    .standalone-shell[data-lp-audience="female"] .sp-lead::before{color:#9b5960}
    .standalone-shell .story-panel{margin-top:28px}.standalone-shell .narrator{margin-top:42px;border-radius:2px;border-color:#d4e2df;border-left:6px solid #147c7b;box-shadow:7px 7px 0 #e3efed}
    .standalone-shell[data-lp-audience="female"] .narrator{border-left-color:#9b5960;box-shadow:7px 7px 0 #f1e4e5}
    .standalone-shell .proof-strip{position:relative;margin-top:34px;margin-bottom:18px;border-color:var(--lp-gold);background:linear-gradient(100deg,#fff4bf,#fffdf1);box-shadow:5px 6px 0 rgba(213,168,43,.18)}
    .standalone-shell .proof-strip::before{content:"回答しながら分かること";position:absolute;left:50%;top:-24px;transform:translateX(-50%) rotate(-1deg);width:max-content;padding:5px 12px;background:var(--lp-ink);color:#fff;font-size:11px;font-weight:900}
    .standalone-shell[data-lp-format="survey"] #begin{margin:18px -4px 12px;width:calc(100% + 8px);min-height:62px;border-radius:999px;border:3px solid #fff;background:linear-gradient(180deg,#f46c72,var(--lp-coral));box-shadow:0 5px 0 #bd3741,0 12px 24px rgba(215,70,80,.2);font-size:17px;letter-spacing:.08em;text-shadow:0 1px 0 rgba(0,0,0,.18)}
    .standalone-shell[data-lp-format="survey"] #begin::after{content:"  ▶"}
    .standalone-shell[data-lp-audience="male"][data-lp-format="survey"] #screen>.intro-age-note{display:block!important;margin:-5px 0 15px!important;padding:0!important;background:#fff;color:#555!important;font-size:11px!important;font-weight:400;line-height:1.5;text-align:center}
    .standalone-shell[data-lp-audience="male"][data-lp-format="survey"] #begin[hidden]+.intro-age-note{display:none}
    .standalone-shell[data-lp-audience="male"][data-lp-format="survey"] .intro-hook{margin:0 -20px;padding:28px 24px 24px;background:linear-gradient(180deg,#eef9f8,#fff);color:#315f61;text-align:center}
    .standalone-shell .intro-hook-kicker{display:inline-block;margin-bottom:13px;padding:5px 10px;border:1px solid #67bdb8;background:#fff;color:#197b79;font-size:11px;font-weight:500;letter-spacing:.08em}
    .standalone-shell .intro-hook>strong{display:block;color:#183f42;font-size:24px;font-weight:500;line-height:1.65;letter-spacing:.08em}.standalone-shell .intro-hook>p{margin:14px 0 0;font-size:14px;line-height:2}.standalone-shell .intro-hook>p+p{margin-top:10px}.standalone-shell .intro-hook>b{display:block;padding:12px;border-top:1px solid #cfb65b;border-bottom:1px solid #cfb65b;color:#247f7c;font-size:15px;font-weight:500;line-height:1.75}
    .standalone-shell[data-lp-format="survey"] .question-flow{counter-reset:lpquestion}
    .standalone-shell[data-lp-format="survey"] .question-block{counter-increment:lpquestion;margin:0 -20px!important;padding:0 20px 30px!important;border:0!important;border-radius:0!important;background:linear-gradient(180deg,#fff 0 78%,var(--lp-pale) 100%)!important;box-shadow:none!important;outline:0;overflow:hidden}
    .standalone-shell[data-lp-format="survey"] .question-block::before,.standalone-shell[data-lp-format="survey"] .question-block::after{display:none!important}
    .standalone-shell .question-visual{display:block;margin:0 -20px 18px;background:var(--lp-pale)}
    .standalone-shell .question-visual svg{display:block;width:100%;height:auto}
    .standalone-shell .question-visual.question-image-only img{display:block;width:100%;height:auto;min-height:0;max-height:none;object-fit:contain}
    .standalone-shell .sr-only{position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}
    .standalone-shell[data-lp-format="survey"] .question-prompt{display:inline-block;margin:0 0 0 2px;padding:5px 11px;background:var(--lp-yellow);color:var(--lp-ink);font-size:10px;transform:rotate(-1deg)}
    .standalone-shell[data-lp-format="survey"] .question-no{float:right;margin:0;padding:5px 10px!important;background:transparent!important;color:#8b6a15!important;border:1px solid #d7bb64;border-radius:999px!important;font-size:10px!important}
    .standalone-shell[data-lp-format="survey"] .question-block .intro{text-align:center;font-size:12px}
    .standalone-shell[data-lp-format="survey"] .options{counter-reset:lpchoice;gap:11px;margin-top:18px}
    .standalone-shell[data-lp-format="survey"] .option{counter-increment:lpchoice;min-height:58px;padding:13px 42px 13px 54px!important;border:1px solid #9ed8d3!important;border-radius:999px!important;background:#fff!important;box-shadow:0 4px 0 #d8efed;font-size:14px;font-weight:400;line-height:1.75;letter-spacing:.08em;font-feature-settings:"palt" 1,"kern" 1}
    .standalone-shell[data-lp-format="survey"] .option::before{content:counter(lpchoice)!important;left:14px!important;width:28px!important;height:28px!important;border:0!important;background:var(--lp-ink)!important;color:#fff;display:grid;place-items:center;font:900 13px/1 Arial,sans-serif;box-shadow:none!important}
    .standalone-shell[data-lp-format="survey"] .option::after{content:"›";position:absolute;right:16px;top:50%;transform:translateY(-54%);color:var(--lp-gold);font:900 28px/1 Georgia,serif}
    .standalone-shell[data-lp-format="survey"] .option.chosen{border-color:var(--lp-gold)!important;background:#fff8d8!important;box-shadow:0 4px 0 #d4ad36}
    .standalone-shell[data-lp-format="survey"] .answer-feedback{margin:17px -4px 0;padding:14px 16px;border-left:5px solid var(--lp-aqua);border-radius:0;background:#effaf8;color:var(--lp-ink);font-size:13px}
    .standalone-shell[data-lp-format="survey"] .insight-card{position:relative;margin:0 -20px 10px!important;padding:0 20px 20px!important;background:#fff!important}
    .standalone-shell[data-lp-format="survey"] .insight-card::before{content:"ANSWER  /  研究所発想の解説";display:block;margin:0 -20px;padding:10px 14px;background:var(--lp-aqua);color:#fff;font:500 11px/1.4 Arial,sans-serif;letter-spacing:.08em;text-align:center}
    .standalone-shell[data-lp-audience="male"][data-lp-format="survey"] .insight-card::before{display:none}
    .standalone-shell[data-lp-audience="male"][data-lp-format="survey"] .read-on-marker{display:block;width:calc(100% + 40px);height:auto;margin:0 -20px;background:#fff}
    .standalone-shell[data-lp-audience="male"][data-lp-format="survey"] .proof-metrics-image{display:block;width:calc(100% + 40px);height:auto;margin:0 -20px;border:0}
    .standalone-shell[data-lp-audience="male"][data-lp-format="survey"] .male-nmn-comparison{display:block;width:100%;height:auto;margin:0;background:#fff}
    .standalone-shell[data-lp-audience="male"][data-lp-format="survey"] .editor-note b.keep-white{color:#fff!important}
    .standalone-shell[data-lp-format="survey"] .insight-media{width:calc(100% + 40px)!important;margin:0 -20px!important}
    .standalone-shell[data-lp-format="survey"] .proof-metrics{display:grid;grid-template-columns:repeat(3,1fr);margin:0 -20px;border-top:3px solid #d7c269;border-bottom:1px solid #ddd3a8;background:linear-gradient(100deg,#fff8d4,#fffef6)}
    .standalone-shell[data-lp-format="survey"] .proof-metrics .metric{display:grid;place-items:center;min-height:62px;padding:8px 4px;border-right:1px solid #d9c277;color:var(--lp-ink);font-family:"Yu Mincho","Hiragino Mincho ProN",serif;font-size:14px;font-weight:500;line-height:1.55;letter-spacing:.08em;text-align:center}
    .standalone-shell[data-lp-format="survey"] .proof-metrics .metric:last-child{border-right:0}
    .standalone-shell[data-lp-format="survey"] .insight-card p{position:relative;margin:0;padding:20px 18px 8px!important;background:#fff;font-size:15px;line-height:2}
    .standalone-shell[data-lp-format="survey"] .insight-card p::first-letter{font-size:1.5em;color:var(--lp-gold);font-weight:500}
    .standalone-shell[data-lp-audience="male"][data-lp-format="survey"] .insight-card p::first-letter{font-size:inherit;color:inherit;font-weight:inherit}
    .standalone-shell[data-lp-format="survey"] .insight-card p strong,.standalone-shell[data-lp-format="survey"] .answer-feedback strong{display:inline;padding:.04em .22em;border:1px solid currentColor;background:transparent;font-weight:500;box-decoration-break:clone;-webkit-box-decoration-break:clone}
    .standalone-shell[data-lp-format="survey"] .insight-foot{padding:0 18px 8px!important}
    .standalone-shell[data-lp-format="survey"] .next-cue{margin:0 -20px;padding:15px 10px 22px;background:linear-gradient(#fff,var(--lp-pale));color:var(--lp-ink);letter-spacing:.08em}
    .standalone-shell .article-offer{margin-left:0;margin-right:0;padding-bottom:26px;border:2px solid #d5c47a;background:linear-gradient(155deg,#42bcb3,#238d89);box-shadow:0 12px 30px rgba(41,145,139,.2)}
    .standalone-shell .article-offer::before{content:"研究所発想のご案内";display:inline-block;margin-bottom:8px;padding:5px 12px;background:linear-gradient(90deg,#b7891f,#f3d778,#b7891f);color:#3e2e08;font-size:11px;font-weight:900;letter-spacing:.06em}
    .standalone-shell[data-lp-format="survey"] .article-offer::before{content:"回答者へのご案内"}
    .standalone-shell .article-offer .mock-cta{min-height:60px;border:3px solid #fff;border-radius:999px;background:linear-gradient(#f56b73,var(--lp-coral));box-shadow:0 5px 0 #b7353e;font-size:16px}
    .standalone-shell .fine-print{line-height:1.75;background:#f3f5f4}
    .standalone-shell .official-flow{margin:0 -20px;background:#fff}.standalone-shell .official-flow img{display:block;width:100%;height:auto}.standalone-shell .brand-canvas{display:block;width:100%;height:auto;background:#effaf8}.standalone-shell .official-flow+.intro{margin:0;padding:20px;background:#fff;text-align:center}.standalone-shell .article-proof{margin:0 -20px!important}.standalone-shell .article-proof .insight-media{width:100%!important;margin:0!important;aspect-ratio:auto!important}.standalone-shell .article-proof p{margin:0!important;padding:18px 22px!important}.standalone-shell[data-lp-format="survey"] .official-flow{margin-bottom:0}.standalone-shell[data-lp-format="survey"] .question-flow{margin-top:0}
    .standalone-shell .official-offer{margin:0!important;padding:0!important;border:0!important;border-radius:0!important;background:#fff!important;box-shadow:none!important}.standalone-shell .official-offer::before,.standalone-shell .official-offer::after{display:none!important}.standalone-shell .official-offer>img,.standalone-shell .official-cta img{display:block;width:100%;height:auto}.standalone-shell .official-cta{display:block;width:100%;padding:0;border:0;background:#fff;cursor:pointer}.standalone-shell .official-offer p{margin:0;padding:12px 20px 22px!important;background:#fff;color:#6b7775!important;font-size:10px!important;line-height:1.7}
    .standalone-shell .official-offer>.article-search-warning{display:block;width:100%!important;height:auto!important;margin:0!important;padding:0 12px 24px;box-sizing:border-box;background:#fff;object-fit:contain}
    .standalone-shell .official-site-footer{position:relative;margin:0;padding:58px 20px 0;background:#fff;color:#111;text-align:center}
    .standalone-shell .official-page-top{position:absolute;top:12px;right:18px;display:flex;align-items:center;gap:6px;color:#111;text-decoration:none;font-size:11px!important}
    .standalone-shell .official-page-top>span{font-size:11px!important}
    .standalone-shell .official-site-footer nav{border-top:1px solid #ddd;border-bottom:1px solid #ddd}
    .standalone-shell .official-site-footer nav a{display:flex;align-items:center;justify-content:space-between;min-height:48px;padding:0 16px;border-bottom:1px solid #e5e5e5;color:#111!important;font-size:12px!important;text-decoration:none;text-align:left}
    .standalone-shell .official-site-footer nav a:last-child{border-bottom:0}.standalone-shell .official-site-footer nav a::after{content:"›";font-size:22px;color:#777}
    .standalone-shell .official-site-footer>p{margin:0;padding:22px 8px;background:#f4f4f4;color:#333!important;font:400 10px/1.6 Arial,sans-serif!important;letter-spacing:.03em}
    @media(max-width:430px){.standalone-shell{width:100%;box-shadow:none}}
  `;
  document.head.append(override);
  const continuity=document.createElement('style');
  continuity.textContent=`
    .standalone-shell .official-flow{display:block;line-height:0;font-size:0}
    .standalone-shell .official-flow img,.standalone-shell .insight-media,.standalone-shell .article-proof img,.standalone-shell .official-offer>img,.standalone-shell .copy-baked>img{display:block;width:100%!important;height:auto!important;max-height:none!important;aspect-ratio:auto!important;object-fit:contain!important;object-position:center!important;margin-top:0!important;margin-bottom:0!important;border:0!important}
    .standalone-shell .question-visual{height:auto!important;overflow:visible!important;line-height:0}
    .standalone-shell .question-visual svg{display:block;width:100%!important;height:auto!important;overflow:visible}
    .standalone-shell .brand-canvas{display:block;margin:0!important}
    .standalone-shell .phone-head,.standalone-shell .mini-progress,.standalone-shell #screen>small,.standalone-shell .experience-strip{display:none!important}
    .standalone-shell .question-visual svg rect[x="152"],.standalone-shell .question-visual svg text[x="277"],.standalone-shell .question-visual svg line,.standalone-shell .question-visual svg text[y="580"],.standalone-shell .question-no{display:none!important}
    .standalone-shell .consumer-story-hero{position:relative;margin:0 -20px;overflow:hidden;background:#234f4d;color:#fff}
    .standalone-shell .consumer-story-hero>img{display:block;width:100%;height:auto;min-height:540px;object-fit:cover;object-position:center}
    .standalone-shell .consumer-hero-shade{position:absolute;inset:0;background:linear-gradient(180deg,rgba(247,250,249,0) 18%,rgba(47,103,101,.46) 100%)}
    .standalone-shell .consumer-hero-copy{position:absolute;left:0;right:0;bottom:0;padding:34px 26px 30px;text-align:center;text-shadow:0 2px 12px rgba(0,0,0,.42)}
    .standalone-shell .consumer-hero-copy small{display:inline-block;padding:5px 11px;border:1px solid rgba(255,255,255,.8);border-radius:999px;font:500 10px/1.4 Arial,sans-serif;letter-spacing:.12em}
    .standalone-shell .consumer-hero-copy h1{margin:13px 0 10px;font-size:29px;font-weight:500;line-height:1.55;letter-spacing:.08em}
    .standalone-shell .consumer-hero-copy p{margin:0;font-size:13px;line-height:1.9;letter-spacing:.06em}
    .standalone-shell[data-lp-audience="male"][data-lp-format="survey"] .male-survey-image-hero{min-height:0;background:#fff;line-height:0}
    .standalone-shell[data-lp-audience="male"][data-lp-format="survey"] .male-survey-image-hero>.male-survey-fv-image{position:relative;display:block;width:100%;height:auto;min-height:0;max-height:none;object-fit:contain}
    .standalone-shell[data-lp-audience="male"][data-lp-format="survey"] .male-survey-image-hero>.male-survey-pr{display:block;margin:0;padding:6px 10px 7px;background:#fff;color:#555!important;font-size:10px!important;font-weight:400;line-height:1.4;letter-spacing:.02em;text-align:right}
    .standalone-shell[data-lp-audience="male"][data-lp-format="survey"] .male-survey-lab-hero{min-height:690px;background:#eef8fb;color:#267c82}
    .standalone-shell[data-lp-audience="male"][data-lp-format="survey"] .male-survey-lab-bg{position:absolute;inset:0;width:100%;height:100%;min-height:0;object-fit:cover;object-position:center}
    .standalone-shell .male-survey-brand{position:relative;z-index:2;margin:0 -1px;padding:17px 18px 15px;background:linear-gradient(100deg,#3996df,#35bbb5);color:#fff;text-align:center;text-shadow:0 1px 5px rgba(14,104,137,.18)}
    .standalone-shell .male-survey-brand span{display:block;font-size:14px;line-height:1.4}.standalone-shell .male-survey-brand strong{display:block;font-size:21px;line-height:1.55;letter-spacing:.1em}
    .standalone-shell .male-survey-copy{position:relative;z-index:2;padding:25px 18px 0;text-align:center;text-shadow:0 1px 0 #fff,0 0 12px rgba(255,255,255,.95)}
    .standalone-shell .male-survey-copy small{display:inline-block;padding:5px 12px;border:1px solid #4ebbc1;border-radius:999px;background:rgba(255,255,255,.84);font:500 11px/1.4 Arial,sans-serif;letter-spacing:.1em}
    .standalone-shell .male-survey-copy h1{margin:12px 0 6px;color:#227c82;font-size:29px;font-weight:500;line-height:1.5;letter-spacing:.08em}.standalone-shell .male-survey-copy p{margin:0;color:#426d70;font-size:12px;line-height:1.8}
    .standalone-shell .consumer-story-hero>.male-survey-pack{position:absolute;z-index:2;left:50%;top:310px;width:38%;height:auto;min-height:0;max-height:285px;object-fit:contain;transform:translateX(-50%);filter:drop-shadow(0 15px 17px rgba(36,114,132,.19))}
    .standalone-shell .male-survey-offer{position:absolute;z-index:3;left:14px;right:14px;bottom:15px;display:grid;grid-template-columns:auto auto 1fr auto;align-items:end;gap:5px;padding:11px 9px;border:1px solid rgba(255,255,255,.9);background:rgba(247,253,254,.9);box-shadow:0 8px 22px rgba(43,136,153,.13);font-family:-apple-system,BlinkMacSystemFont,"Hiragino Sans",sans-serif;letter-spacing:0;text-align:center}
    .standalone-shell .male-survey-offer>span{align-self:center;color:#456b6e;font-size:10px;font-weight:700}.standalone-shell .male-survey-offer>strong{color:#ed4760;font:400 40px/1 Georgia,serif}.standalone-shell .male-survey-offer>strong small{font:700 10px/1.2 Arial,sans-serif}.standalone-shell .male-survey-offer>b{color:#ed4760;font:700 34px/1 Arial,sans-serif;white-space:nowrap}.standalone-shell .male-survey-offer>b small{font-size:10px}.standalone-shell .male-survey-offer>em{align-self:center;padding:7px 5px;border:1px solid #d3aa3d;background:#fff;color:#a77e12;font-size:10px;font-style:normal;font-weight:700;line-height:1.2}
    .standalone-shell .consumer-offer{margin:0 -20px!important;padding:28px 22px 30px!important;border:0!important;border-radius:0!important;background:linear-gradient(180deg,#effaf8,#fff 44%,#e5f7f4)!important;color:var(--lp-ink)!important;text-align:center;box-shadow:none!important}
    .standalone-shell .consumer-offer::before,.standalone-shell .consumer-offer::after{display:none!important}
    .standalone-shell .consumer-offer-lead small{color:#8a6b18;font-size:11px}.standalone-shell .consumer-offer-lead h3{margin:9px 0 18px;font-size:23px;font-weight:500;line-height:1.65}
    .standalone-shell .consumer-pack{display:block;width:44%;height:auto;margin:0 auto 14px;filter:drop-shadow(0 12px 16px rgba(27,91,88,.16))}
    .standalone-shell .consumer-price{padding:16px 12px;border-top:1px solid #d9c16b;border-bottom:1px solid #d9c16b;background:#fffdf3}
    .standalone-shell .consumer-price>span{display:block;color:#8a6510;font-size:12px}.standalone-shell .consumer-price strong{display:block;color:#e24d58;font:500 42px/1.25 Georgia,serif}.standalone-shell .consumer-price strong small{font:500 13px/1.4 "Yu Mincho",serif}.standalone-shell .consumer-price p{margin:5px 0 0!important;padding:0!important;background:none!important;color:#526b69!important;font-size:11px!important}
    .standalone-shell .consumer-offer .mock-cta{margin-top:18px;min-height:62px;border:3px solid #fff;border-radius:999px;background:linear-gradient(#f56b73,#e9515c);box-shadow:0 5px 0 #b7353e;color:#fff;font-size:16px}
    .standalone-shell .consumer-offer-note{margin:14px 0 0!important;padding:0!important;background:none!important;color:#687977!important;font-size:10px!important;line-height:1.8!important}
    .standalone-shell[data-lp-audience="male"][data-lp-format="survey"] .voice-dosage-note{display:block;margin:-16px 0 22px;padding:0 0 0 5px;color:#555!important;font-size:11px!important;font-weight:400;line-height:1.5;text-align:left}
  `;
  document.head.append(continuity);
  const audience=host.dataset.lpAudience;
  const format=host.dataset.lpFormat;
  const boot=`\n audience=${JSON.stringify(audience)};format=${JSON.stringify(format)};step=0;answers=[];document.querySelector('.device').dataset.audience=audience;document.querySelector('.device').dataset.format=format;renderIntro();`;
  Function(script.textContent+boot)();
  history.replaceState(null,'',location.pathname);
  window.scrollTo({top:0,left:0,behavior:'auto'});
  document.documentElement.scrollTop=0;
  document.body.scrollTop=0;
})().catch(error=>{document.body.innerHTML='<p style="padding:32px;font-family:sans-serif">ページを読み込めませんでした。トップページから再度お試しください。</p>';console.error(error)});
