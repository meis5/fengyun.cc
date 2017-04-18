import conf from '../../conf/conf'

const { resourcesPath } = conf

export default `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
  <meta name="description" content="" />
  <meta name="author" content="" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

  <title>风云网络官网</title>
  <link href="//cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
  <link href="${resourcesPath}/plugins/vegas/jquery.vegas.min.css" rel="stylesheet" />
  <link href="//cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
  <link href="${resourcesPath}/css/style.css" rel="stylesheet" />
  <style>
    body {
      font-family: "Helvetica Neue", Arial, "Hiragino Sans GB", "Hiragino Sans GB W3", "Microsoft YaHei", "Wenquanyi Micro Hei", sans-serif;
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      letter-spacing: 1px;
      color: #fff;
    }

    p {
      padding: 20px;
    }

    section {
      padding: 50px 20px 25px 20px;
    }

    h2 {
      font-size: 60px;
    }

    p {
      line-height: 30px;
      margin-bottom: 35px;
    }

    hr {
      border-top: 1px solid rgb(27, 106, 131);
      margin: 0px 100px 0px 100px
    }

    .navbar-inverse {
      background-color: rgb(27, 106, 131);
      border-color: transparent;
    }

    .navbar-inverse .navbar-nav > .active > a, .navbar-inverse .navbar-nav > .active > a:hover, .navbar-inverse .navbar-nav > .active > a:focus {
      background-color: transparent;
      border-bottom: 4px solid rgba(0, 231, 222, 0.72);
    }

    .navbar-inverse .navbar-nav > li > a {
      color: #FFF;
      font-size: 13px;
      font-weight: 800;
      padding: 10px;
      letter-spacing: 2px;
      margin: 10px 5px 10px 5px;
    }

    .navbar-inverse .navbar-brand {
      color: #FFF;
    }

    .copyrights {
      text-indent: -9999px;
      height: 0;
      line-height: 0;
      font-size: 0;
      overflow: hidden;
    }

    #home {
      text-align: center;
      padding-bottom: 50px;
    }

    #home i {
      margin: 5px;
    }

    #home h1 {
      text-transform: uppercase;
      padding-top: 120px;
      font-size: 60px;
      font-weight: 900;
      color: #fff;
      line-height: 80px;
      padding-bottom: 5px;
    }

    #carousel-slider {
      color: #fff;
      min-height: 420px;
      padding: 30px 20px 5px 20px;
    }

    .carousel-control.left {
      left: 0;
      right: auto;
      background-repeat: repeat-x;
      background-image: linear-gradient(to left, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, 0) 100%) !important;
    }

    .carousel-control.right {
      right: 0;
      left: auto;
      background-repeat: repeat-x;
      background-image: linear-gradient(to right, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, 0) 100%) !important;
    }

    .carousel-indicators li {
      border: 5px solid #FFF;
      width: 20px;
      height: 20px;
    }

    .carousel-indicators .active {
      border: 5px solid rgba(0, 231, 222, 0.72);
      width: 20px;
      height: 20px;
      background-color: transparent;
    }

    .custom-btn-1 {
      border-radius: 0;
      background-color: transparent;
      border: 2px solid rgba(0, 231, 222, 0.72);
      margin: 5px;
      color: #fff;
    }

    .custom-btn-1:hover {
      color: #fff;
      background-color: rgba(0, 0, 0, 0.42);
    }

    #contact .form-control {
      background-color: transparent;
    }

    #contact label {
      padding: 15px;
    }

    .footer {
      text-align: right;
      color: #fff;
      background-color: rgb(27, 106, 131);
      padding: 20px;
    }

    .carousel-inner .item {
      padding-top: 100px;
    }

    .vegas-overlay {
      display: none;
    }
    
    .navbar-brand {
      display: block;
      height: 50px;
      padding-top: 5px;
    }
    
    @media (min-width: 768px) {
      .navbar-brand {
        display: block;
        height: 64px;
        padding-top: 12px;
      }
    }
  </style>
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
  <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
  <![endif]-->

</head>
<body data-spy="scroll" data-target="#menu">
  <div class="navbar navbar-inverse navbar-fixed-top scrollclass" id="menu">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#"><img src="${resourcesPath}/img/logo.png" alt="" style="max-height:40px;" /></a>
      </div>
      <div class="navbar-collapse collapse">
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#home">首页</a></li>
          <li><a href="#about">关于</a></li>
          <li><a href="#services">服务</a></li>
          <li><a href="#contact">联系</a></li>
        </ul>
      </div>
    </div>
  </div>
  <!--NAVBAR SECTION END-->
  <div id="home">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 ">
          <div id="carousel-slider" data-ride="carousel" class="carousel slide">
            <div class="carousel-inner">
              <div class="item active">
                <img src="${resourcesPath}/img/banner-text-1.png" alt="">
              </div>
              <div class="item">
                <img src="${resourcesPath}/img/banner-text-2.png" alt="">
              </div>
              <div class="item">
                <img src="${resourcesPath}/img/banner-text-3.png" alt="">
              </div>
            </div>
            <!--INDICATORS-->
            <ol class="carousel-indicators">
              <li data-target="#carousel-slider" data-slide-to="0" class="active"></li>
              <li data-target="#carousel-slider" data-slide-to="1" class=""></li>
              <li data-target="#carousel-slider" data-slide-to="2" class=""></li>
            </ol>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2  scrollclass">
          <p>
            我之所以写作，不是我有才华，而是我有感情
            等待是这个世界上最极致的煎熬，我不舍得你等我
          </p>
          <br />
          <a href="#about" class="btn  btn-lg custom-btn-1"><i class="fa fa-home"></i>关于</a>
          <a href="#services" class="btn  btn-lg custom-btn-1"><i class="fa fa-comments-o"></i>服务</a>
          <a href="#contact" class="btn btn-lg custom-btn-1"><i class="fa fa-globe"></i>联系</a>
        </div>
      </div>
    </div>
  </div>
  <!--HOME SECTION END-->
  <hr />
  <section id="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2  text-center">
          <h2>关于我们</h2>
          <p>
            成都风云兄弟网络科技有限公司（风云兄弟）成立于2016年, 位于互联网行业前线城市——成都。风云兄弟致力为用户提供“有感情”、
            “可信耐”和“欢乐的”产品，以专注的精神和独特的创意设计能力，通过自主研发向广大提供服务
          </p>
        </div>
      </div>
      <div class="row ">
        <div class="col-lg-4 col-md-4 col-sm-4">
          <div class="media">
            <div class="pull-left">
              <i class=" fa fa-fax fa-4x"></i>
            </div>
            <div class="media-body">
              <h3 class="media-heading">百分百的服务态度</h3>
              <p>
                秉承急顾客所需，想顾客之所求，认认真真地为用户办好每件事，无论事情大小，
                均要给顾客一个圆满的结果或答复，即使顾客提出的服务要求不属于自己岗位的服务，
                也主动与有关部门联系，切实解决顾客疑难问题，把解决顾客之需当作工作中最重要的事
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4">
          <div class="media">
            <div class="pull-left">
              <i class="fa fa-history fa-4x "></i>
            </div>
            <div class="media-body">
              <h3 class="media-heading">全方位·可持续</h3>
              <p>
                以用户为核心，以创新为目标将不断的提供多线产品，所有的合作伙伴均可优先参与进入我们的项目之中，
                加入我们的创客项目，成就自我，贡献社会
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4">
          <div class="media">
            <div class="pull-left">
              <i class="fa fa-graduation-cap fa-4x  "></i>
            </div>
            <div class="media-body">
              <h3 class="media-heading">团队简介</h3>
              <p>
                团队均是在互联网行业工作已经5—10年经验，具有很强的研发能力，团队也在不断扩大中，
                如果你是一个有梦想的青年留言加入，我们会第一时间与您取得联系
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row ">
        <div class="col-lg-4 col-md-4 col-sm-4">
          <div class="media">
            <div class="pull-left">
              <i class=" fa fa-paper-plane-o fa-4x"></i>
            </div>
            <div class="media-body">
              <h3 class="media-heading">开放式创新</h3>
              <p>
                主题以“好点子要落地”为用户、合作伙伴提供一个可靠、可信、可托付的创业平台，
                将有梦想的人的梦想作为团队所有人的梦想为有志之士服务到底
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4">
          <div class="media">
            <div class="pull-left">
              <i class="fa fa-bullhorn fa-4x "></i>
            </div>
            <div class="media-body">
              <h3 class="media-heading">郑重承诺</h3>
              <p>
                以务实、创新、不空谈，请非诚之士绕道而行
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4">
          <div class="media">
            <div class="pull-left">
              <i class="fa fa-folder-open-o fa-4x  "></i>
            </div>
            <div class="media-body">
              <h3 class="media-heading">资源共享</h3>
              <p>
                公司的资源是绝对共享的，我们一直认为无论是资源还是技能，
                对于拥有者而言因为私有化而没有得到充分利用，我们就是要将其得到更广阔的价值。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <hr />
  <section id="services">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2  text-center">
          <h2>服务</h2>
          <p>
            我们尊崇极客精神和创新精神，并且始终如一地关注和满足用户的需求，
            不妄自菲薄的宣扬自己一定能做到什么，只专注于市场需求和用户需求为导向去服务市场，
            以一种谦卑的心态去做好我们的服务。
          </p>
        </div>
      </div>
      <div class="row ">
        <div class="col-lg-6 col-md-6 col-sm-6">
          <div class="media">
            <div class="pull-left">
              <i class="fa fa-lock fa-4x "></i>
            </div>
            <div class="media-body">
              <h3 class="media-heading">安全服务</h3>
              <p>
                坚持保护用户的所有权益
                坚持保护用户的所有隐私
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6">
          <div class="media">
            <div class="pull-left">
              <i class="fa fa-quote-right fa-4x  "></i>
            </div>
            <div class="media-body">
              <h3 class="media-heading">服务文化</h3>
              <p>
                少许诺，多兑现
                认准了，就去做；不跟风，不动摇
                证明自己，用结果说话
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row ">
        <div class="col-lg-6 col-md-6 col-sm-6">
          <div class="media">
            <div class="pull-left">
              <i class="fa fa-road fa-4x "></i>
            </div>
            <div class="media-body">
              <h3 class="media-heading">梦想服务</h3>
              <p>
                我们因梦想而伟大，所有的成功者都是大梦想家：在冬夜的火堆旁，在阴天的雨雾中，
                梦想着未来。而光明和希望总是降临在那些真心相信梦想一定会成真的人身上。
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6">
          <div class="media">
            <div class="pull-left">
              <i class="fa fa-retweet fa-4x  "></i>
            </div>
            <div class="media-body">
              <h3 class="media-heading">服务体系</h3>
              <p>
                让产品简单，再简单
                给最自由的空间
                让产品极致的呈现
                让梦想落地生花
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <hr />
  <section id="contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2  text-center">
          <h2>联系我们</h2>
        </div>
      </div>
      <div class="row ">
        <div class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 text-center">
          <form>
            <label>称呼</label>
            <div class="form-group">
              <input type="text" class="form-control" required="required" />
            </div>
            <label>电子邮件</label>
            <div class="form-group">
              <input type="text" class="form-control" required="required" />
            </div>
            <label>你的留言</label>
            <div class="form-group">
              <textarea name="message" id="message" required="required" class="form-control" style="min-height:120px;"></textarea>
            </div>
            <div class="form-group">
              <button type="submit" class="btn custom-btn-1 btn-block">确认提交</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <div class="footer" style="font-size: 12px">
    &copy; 2016-2017 fengyun.cc 风云兄弟 版权所有 ICP证：蜀ICP备17001579号-1
  </div>
  <script src="//cdn.bootcss.com/jquery/1.10.2/jquery.min.js"></script>
  <script src="//cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script src="${resourcesPath}/plugins/vegas/jquery.vegas.min.js"></script>
  <script src="//cdn.bootcss.com/jquery-easing/1.4.1/jquery.easing.min.js"></script>
  <script>
    (function ($) {
      var mainApp = {
        main_fun: function () {
          $('#carousel-slider').carousel({
            interval: 3000
          });
          $(function () {
            $('.scrollclass a').bind('click', function (event) {
              var $anchor = $(this);
              $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
              }, 1200, 'easeInOutExpo');
              event.preventDefault();
            });
          });
          $(function () {
            $.vegas('slideshow', {
              backgrounds: [
                { src: '${resourcesPath}/img/1.jpg', fade: 1000, delay: 9000 },
                { src: '${resourcesPath}/img/2.jpg', fade: 1000, delay: 9000 },
              ]
            })('overlay', {
              src: '${resourcesPath}/plugins/vegas/overlays/03.png'
            });
          });
        },
        initialization: function () {
          mainApp.main_fun();
        }
      }
      $(document).ready(function () {
        mainApp.main_fun();
      });
    }(jQuery));
  </script>
</body>
</html>
`
