<template>
    <div id="intelligence-center">
      <header>
        <h1>智能中心</h1>
      </header>
      <section class="mainbox">
        <!-- 环境得分 鱼群检测 -->
        <div class="column">
          <div class="envir-score-alarm block">
            <div class="envir-score">
              <h2>海洋牧场环境感知得分</h2>
            </div>
            <div class="envir-alarm">
              <hr class="custom-hr">
              <h3>预警</h3>
            </div>
          </div>
          <div class="fish-detect block">
            <div class="fish-detect-data">
              <h2>网衣/鱼群检测</h2>
            </div>
            <div class="fish-alarm">
              <hr class="custom-hr">
            </div>
          </div>
        </div>
        <!-- 图像识别 实时数据 -->
        <div class="column">
          <div class="video block">
            <div class="three-video">
              <div class="video-col1">
                <div class="v1">
                  <h3>识别效果</h3>
                  <p>视频1</p>
                </div>
              </div>
              <div class="video-col2">
                <div class="v2">
                  <h3>左目镜头</h3>
                  <p>视频2</p>
                </div>
                <div class="v3">
                  <h3>右目镜头</h3>
                  <p>视频2</p>
                </div>
              </div>
            </div>
            <div class="video-button">
              <ul class="choseVideo">
                <li><button class="round-button">&lt;</button></li>
                <li>视频1</li>
                <li>视频2</li>
                <li>视频3</li>
                <li>视频4</li>
                <li><button class="round-button">&gt;</button></li>
              </ul>
            </div>
          </div>
          <div class="rt-data block">
            <h3>实时数据</h3>
            <div class="panel">
              <div class="panel-ele">
                <span>编号</span>
                <img src="" alt="">
              </div>
              <div class="panel-ele">
                <span>鱼种</span>
              </div>
              <div class="panel-ele">
                <span>体长</span>
                <img src="" alt="">
              </div>
              <div class="panel-ele">
                <span>体重</span>
                <img src="" alt="">
              </div>
              <div class="panel-ele">
                <span>疑似患病</span>
                <img src="" alt="">
              </div>
              <div class="panel-ele">
                <span>鱼群异常</span>
                <img src="" alt="">
              </div>
              <div class="panel-ele">
                <span>轨迹追踪</span>
                <img src="" alt="">
              </div>
              <div class="panel-ele">
                <span>轨迹分析</span>
                <img src="" alt="">
              </div>
            </div>
          </div>
        </div>
        <!-- AI决策 气象数据 -->
        <div class="column">
          <div class="ai block">
            <h2>AI决策</h2>
            <p>温度：<span>10~20</span></p>
            <p>光照：<span>10~20</span></p>
            <p>溶解度：<span>10~20</span></p>
            <p>pH：<span>10~20</span></p>
            <p>盐度：<span>10~20</span></p>
            <hr class="custom-hr">
            <h3>提示：</h3>
          </div>
          <div class="weather block">
            <h2>气象数据</h2>
            <p>温度：<span>10~20</span></p>
            <p>风力：<span>10~20</span></p>
            <p>湿度：<span>10~20</span></p>
            <p>空气质量：<span>10~20</span></p>
            <hr class="custom-hr">
            <h3>预警：</h3>
          </div>
        </div>
      </section>
    </div>
</template>

<script>
export default {
  name: 'IntelligenceCenter',
  // 组件的其他代码...
  mounted () {
    this.loadExternalScript('js/flexible.js')
  }
}
</script>

<style scoped>
/* 组件样式 */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #intelligence-center {
    /* background: url(~@/assets/bg.jpg) no-repeat top center; */
    background-image: url('~@/assets/visual/bg4.jpg'); /* 设置背景图片 */
    background-size: cover; /* 让背景图片铺满整个容器 */
    background-repeat: no-repeat; /* 不重复显示背景图片 */
    height: 100vh;
  }
  header {
    position: relative;
    height: 3.25rem;
    background: url(~@/assets/head_bg.png) no-repeat;
    background-size: 100% 100%;
  }
  header h1 {
    font-size: 1.25rem;
    color: white;
    text-align: center;
    line-height: 3.25rem;
  }

  .block {
    margin: 0.60rem;
    border: 3px solid rgba(12, 58, 224, 0.652);
    border-radius: 10px;
  }
  h2 {
    border-bottom: 3px solid rgba(12, 58, 224, 0.652);
    text-align: center;
    font-size: 20px;
    margin: 0;
  }
  h3 {
    text-align: left;
    margin-left: 40px;
    font-weight: normal;
  }
  .custom-hr {
    border-color: rgba(12, 58, 224, 0.652); /* 设置横线的颜色为红色 */
  }

  .mainbox {
    display: flex;
    min-width: 1024px;
    max-width: 1920px;
    margin: 0 auto;
    padding: .125rem .125rem 0;
    height: 95%;
    color: white;
  }
  .mainbox .column {
    flex: 3;
    height: 95%;
  }
  .mainbox .column:nth-child(2) {
    flex: 6;
  }

  .envir-score-alarm {
    height: 59%;
  }
  .envir-score {
    height: 75%;
  }
  .envir-alarm {
    height: 20%;
  }
  .fish-detect {
    height: 40%;
  }
  .fish-detect-data {
    height: 75%;
  }
  .fish-alarm {
    height: 20%;
  }

  .video {
    height: 59%;
  }
  .three-video {
    height: 90%;
    display: flex;
  }
  .video-col1 {
    flex: 5;
  }
  .video-col2 {
    flex: 3;
  }
  .v2 {
    height: 50%;
  }
  .v3 {
    height: 50%;
  }
  .rt-data {
    height: 40%;
  }

  .ai {
    height: 55%;
  }
  .weather {
    height: 44%;
  }

  .panel-ele {
    border-radius: 10px;
    background-color: rgb(47, 138, 174);
    color: white;
    font-size: 15px;
    margin: 5px;
    height: 90%;

    display: flex; /* 使用 flex 布局 */
    justify-content: center; /* 水平居中对齐 */
    align-items: center; /* 垂直居中对齐 */
  }
  .panel {
    display: grid;
    grid-template-rows: 50% 50%;
    grid-template-columns: 25% 25% 25% 25%;
    grid-gap: 0; /* 元素之间的间距为零 */
    justify-content: start; /* 元素从左上角开始布局 */
    align-content: start; /* 元素从左上角开始布局 */
    height: 90%;
  }

  ul.choseVideo{
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  ul.choseVideo>li {
      float: left;
      display: block;
      text-align: center;
      padding: 4px 16px;
      text-decoration: none;
      font-size:small;
      border-radius: 10px;
  }
  ul.choseVideo>li:hover {
    background-color: #a4cdff;
  }
  .round-button {
    width: 20px; /* 设置按钮的宽度 */
    height: 20px; /* 设置按钮的高度 */
    border-radius: 50%; /* 设置圆形按钮的圆角半径为按钮宽度/2 */
    background-color: #007bff; /* 设置按钮的背景颜色 */
    color: white; /* 设置按钮的文本颜色 */
    border: none; /* 移除按钮的边框 */
    cursor: pointer; /* 设置鼠标悬停时的光标形状为手型 */
    font-size: 12px; /* 设置按钮的字体大小 */
  }

  /* 当鼠标悬停在按钮上时改变背景颜色 */
  .round-button:hover {
    background-color: #0056b3;
  }

</style>
