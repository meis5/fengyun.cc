import conf from '../../conf/conf'

const { resourcesPath } = conf

export default `
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

  <title>天天大贰</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      position: relative;
    }

    img {
      display: block;
    }

    .bg-img {
      width: 100%;
      margin: 0 auto;
    }

    .launch-btn {
      display: none;
      position: absolute;
      width: 100%;
      bottom: 180px;
      text-align: center;
    }

    .launch-btn-img {
      width: 80%;
      display: inline-block;
      vertical-align: top;
    }

    .dl-btn {
      position: absolute;
      width: 100%;
      bottom: 440px;
      text-align: center;
    }

    .dl-btn-img {
      width: 80%;
      display: inline-block;
      vertical-align: top;
    }

    .dl-btn .dl-btn-img-grey {
      display: none;
    }
    
    #weixin-tip img {
      display: inline-block;
    }

  </style>
</head>
<body>
  <img src="${resourcesPath}/bg.png" class="bg-img" alt="">
  <a class="launch-btn" href="http://ttd2.fengyun.cc/#">
    <img class="launch-btn-img" src="${resourcesPath}/launch_game_btn.PNG" alt="">
  </a>
  <a class="dl-btn" href="http://ttd2.fengyun.cc/#">
    <img class="dl-btn-img" src="${resourcesPath}/dl_btn.PNG" alt="">
  </a>
  <script type="text/javascript">
    var eventType = 'ontouchstart' in window || navigator.maxTouchPoints ? 'touchstart' : 'click'; 
  
    function is_weixin() {
      var ua = navigator.userAgent.toLowerCase();
      if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
      } else {
        return false;
      }
    }
    var isWeixin = is_weixin();
    var winHeight = typeof window.innerHeight != 'undefined' ? window.innerHeight : document.documentElement.clientHeight;
    function loadHtml() {
      var div = document.createElement('div');
      div.id = 'weixin-tip';
      div.innerHTML = '<p><img src="${resourcesPath}/live_weixin.png" alt="微信打开"/></p>';
      document.body.appendChild(div);
    }

    function loadStyleText(cssText) {
      var style = document.createElement('style');
      style.rel = 'stylesheet';
      style.type = 'text/css';
      try {
        style.appendChild(document.createTextNode(cssText));
      } catch (e) {
        style.styleSheet.cssText = cssText; //ie9以下
      }
      var head = document.getElementsByTagName("head")[0]; //head标签之间加上style样式
      head.appendChild(style);
    }
    var cssText = "#weixin-tip{position: fixed; left:0; top:0; background: rgba(0,0,0,0.8); filter:alpha(opacity=80); width: 100%; height:100%; z-index: 100;} #weixin-tip p{text-align: right; margin-top: 10%; padding:0 5%;}";

    var dl = document.getElementsByClassName('dl-btn')[0];
    dl.addEventListener(eventType, function (e) {
      e.preventDefault()
      var ua = navigator.userAgent.toLowerCase();
      if (/iphone|ipad|ipod/.test(ua)) {
        window.location = 'https://fir.im/16q5'
      } else if (/android/.test(ua)) {
        if (isWeixin) {
          loadHtml();
          loadStyleText(cssText);
        } else {
          window.location = 'http://zgamedaerdown.oss-cn-shanghai.aliyuncs.com/daer.apk';
        }
      } else {
      }
    });
  </script>
</body>
</html>
`
