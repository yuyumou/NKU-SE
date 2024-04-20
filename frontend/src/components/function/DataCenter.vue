<template>
    <div id="data-center">
      <header>
        <h1>数据中心</h1>
      </header>
      <section class="mainbox">
        <!-- 数据总量 硬件信息统计 数据中心分布 数据类型统计 -->
        <div class="column">
          <!-- 数据总量 硬件信息统计 数据中心分布 -->
          <div class="inline-row">
            <!-- 数据总量 硬件信息统计 -->
            <div class="inline-column">
              <div class="total-data block">
                <h3>数据总量</h3>
                <div class="total-data-b">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div class="hw-info block">
                <div class="hw-info-row1">
                  <div class="total-process">
                    进程总量
                  </div>
                  <div class="disk">
                    磁盘
                  </div>
                </div>
                <div class="hw-info-row2">
                  CPU运行状态，内存运行状态，GPU运行状态
                </div>
              </div>
            </div>
            <!-- 数据中心分布 -->
            <div class="center-distri">
              数据中心分布
            </div>
          </div>
          <!-- 数据类型统计 -->
          <div class="inline-row block">
            <div class="col1">
              数据类型统计1
            </div>
            <div class="col2">
              数据类型统计2
            </div>
            <div class="col3">
              数据类型统计3
            </div>
          </div>
        </div>
        <!-- 传感器信息 数据库交互设计 -->
        <div class="column block">
          <div class="row1">
            <div class="trans-time">
              <p>平均传输时长</p>
              <p>02:45</p>
            </div>
            <div class="proce-time">
              <p>平均处理时长</p>
              <p>00:02</p>
            </div>
          </div>
          <div class="row2">
            传感器信息2
          </div>
          <div class="row3">
            数据库交互设计
          </div>
        </div>
      </section>
    </div>
  </template>

<script>
export default {
  name: 'DataCenter',
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
  #data-center {
    /* background: url(~@/assets/bg.jpg) no-repeat top center; */
    background-color: darkblue;
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
    margin: 0.625rem;
    border: 3px solid rgba(12, 58, 224, 0.652);
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
    flex: 9;
    height: 95%;
  }
  .mainbox .column:nth-child(2) {
    flex: 3;
  }
  .mainbox .column .inline-row {
    display: flex;
    height: 55%;
  }
  .mainbox .column .inline-row:nth-child(2) {
    display: flex;
    height: 45%;
  }
  .mainbox .column .inline-row .inline-column {
    flex: 4;
  }
  .mainbox .column .inline-row .center-distri {
    flex :5;
  }
  .mainbox .column .inline-row .inline-column .total-data {
    height: 25%;
  }
  .mainbox .column .inline-row .inline-column .hw-info {
    height: 69%;
  }
  .mainbox .column .inline-row .inline-column .hw-info .hw-info-row1 {
    display: flex;
    height: 50%;
  }
  .mainbox .column .inline-row .inline-column .hw-info div {
    flex: 3;
  }
  .mainbox .column .inline-row .inline-column .hw-info .hw-info-row2 {
    height: 45%;
  }
  .mainbox .column .inline-row .col1 {
    flex: 3;
  }
  .mainbox .column .inline-row .col2 {
    flex: 3;
  }
  .mainbox .column .inline-row .col3 {
    flex: 3;
  }
  .mainbox .column:nth-child(2) .row1 {
    height: 20%;
    display: flex;
  }
  .mainbox .column:nth-child(2) .row1 .trans-time {
    flex: 3;
  }
  .mainbox .column:nth-child(2) .row1 .proce-time {
    flex: 3;
  }
  .mainbox .column:nth-child(2) .row2 {
    height: 50%;
  }
  .mainbox .column:nth-child(2) .row3 {
    height: 30%;
  }
</style>
