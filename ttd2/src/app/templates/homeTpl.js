import conf from '../../conf/conf'

const { resourcesPath } = conf

export default `
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

  <title>Title</title>
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
      position: absolute;
      width: 100%;
      bottom: 440px;
      text-align: center;
    }

    .launch-btn-img, .launch-btn-img-grey {
      width: 80%;
      display: inline-block;
      vertical-align: top;
    }

    .launch-btn .launch-btn-img-grey {
      display: none;
    }

    .launch-btn:hover .launch-btn-img, .launch-btn:active .launch-btn-img {
      display: none;
    }

    .launch-btn:hover .launch-btn-img-grey, .launch-btn:active .launch-btn-img-grey {
      display: inline-block;
    }

    .dl-btn {
      position: absolute;
      width: 100%;
      bottom: 180px;
      text-align: center;
    }

    .dl-btn-img, .dl-btn-img-grey {
      width: 80%;
      display: inline-block;
      vertical-align: top;
    }

    .dl-btn .dl-btn-img-grey {
      display: none;
    }

    .dl-btn:hover .dl-btn-img, .dl-btn:active .dl-btn-img {
      display: none;
    }

    .dl-btn:hover .dl-btn-img-grey, .dl-btn:active .dl-btn-img-grey {
      display: inline-block;
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
    <img class="launch-btn-img-grey" src="${resourcesPath}/launch_game_btn_grey.PNG" alt="">
  </a>
  <a class="dl-btn" href="http://ttd2.fengyun.cc/#">
    <img class="dl-btn-img" src="${resourcesPath}/dl_btn.PNG" alt="">
    <img class="dl-btn-img-grey" src="${resourcesPath}/dl_btn_grey.PNG" alt="">
  </a>
  <script type="text/javascript">
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
    dl.addEventListener('click', function (e) {
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
        alert('unknown')
      }
    });
  </script>
</body>
</html>
`
