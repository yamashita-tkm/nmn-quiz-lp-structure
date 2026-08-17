(async()=>{
  const host=document.querySelector('[data-lp-audience][data-lp-format]');
  const source=await fetch('index.html?standalone=20260817',{cache:'no-store'}).then(r=>{if(!r.ok)throw new Error('LP source unavailable');return r.text()});
  const doc=new DOMParser().parseFromString(source,'text/html');
  const style=doc.querySelector('style');
  const script=doc.querySelector('script');
  document.head.append(style.cloneNode(true));
  const override=document.createElement('style');
  override.textContent=`
    *{box-sizing:border-box}html{background:#eef2f1}body{margin:0;overflow-x:hidden;background:#eef2f1}
    .standalone-shell{width:min(100%,430px);min-height:100vh;margin:0 auto;background:#f7faf9;box-shadow:0 0 44px rgba(17,50,55,.12)}
    .standalone-shell .device{width:100%;height:auto;min-height:100vh;border:0;border-radius:0;box-shadow:none;overflow:visible;background:#f7faf9}
    .standalone-shell .device::before,.standalone-shell .close{display:none!important}
    .standalone-shell .screen{height:auto;min-height:100vh;overflow:visible;padding:18px 20px 0;scroll-behavior:smooth}
    .standalone-shell .question-flow{margin-left:0;margin-right:0}
    .standalone-shell .phone-head{margin-bottom:12px;padding-top:0}.standalone-shell .article-result{margin-bottom:0}
    @media(max-width:430px){.standalone-shell{width:100%;box-shadow:none}}
  `;
  document.head.append(override);
  const audience=host.dataset.lpAudience;
  const format=host.dataset.lpFormat;
  const boot=`\n audience=${JSON.stringify(audience)};format=${JSON.stringify(format)};step=0;answers=[];document.querySelector('.device').dataset.audience=audience;document.querySelector('.device').dataset.format=format;renderIntro();`;
  Function(script.textContent+boot)();
})().catch(error=>{document.body.innerHTML='<p style="padding:32px;font-family:sans-serif">ページを読み込めませんでした。トップページから再度お試しください。</p>';console.error(error)});
