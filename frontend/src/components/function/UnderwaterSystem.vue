<template>
    <div id="underwater-system">
      <header>
        <h1>水下系统</h1>
      </header>
      <section class="mainbox">
        <!-- 鱼群数量 环境得分 历史数据 -->
        <div class="column">
          <div class="fish-num block">
            <h2>鱼群数量</h2>
            <p>总量：<span>1111</span></p>
            <p>今日新增：<span>1</span></p>
            <p>今日死亡：<span>100</span></p>
          </div>
          <div class="envir-score block">
            <h2>海洋牧场环境感知得分</h2>
            <div id="score-chart"></div>
          </div>
          <div class="history block">
            <h2>鱼群个体数量历史曲线</h2>
            <div id="history-chart"></div>
          </div>
        </div>
        <!-- 总信息 鱼群属性分布 -->
        <div class="column">
          <div class="total-data">
            <div class="total-data-show">
              <div class="total-data-show1">
                <div class="show1-up">
                  <div class="data-block">
                    <p>鱼种</p>
                    <p>50+</p>
                  </div>
                </div>
                <div class="show1-down">
                  <div class="show1-down1">
                    <div class="data-block">
                      <p>鱼苗</p>
                      <p>500尾</p>
                    </div>
                  </div>
                  <div class="show1-down2">
                    <div class="data-block">
                      <p>生长</p>
                      <p>600尾</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="total-data-show2" id="total-data-show2">
              </div>
              <div class="total-data-show3">
                <div class="show3-up">
                  <div class="data-block">
                    <p>鱼种</p>
                    <p>50+</p>
                  </div>
                </div>
                <div class="show3-down">
                  <div class="show3-down1">
                    <div class="data-block">
                      <p>鱼苗</p>
                      <p>500尾</p>
                    </div>
                  </div>
                  <div class="show3-down2">
                    <div class="data-block">
                      <p>生长</p>
                      <p>600尾</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="total-data-number">
              <div class="data-block">
                <p>已保障养殖鱼群</p>
                <p>15000尾</p>
              </div>
            </div>
          </div>
          <div class="attr-distri block">
            <h2>鱼群属性分布曲线</h2>
            <div class="attr-distri-up">
              <div class="attr-distri-chart">
                <div id="attr-distri-chart"></div>
              </div>
              <div class="attr-distri-chose">
                <ul class="guidebar">
                  <li>鱼重量</li>
                  <li>鱼尺寸</li>
                  <li>鱼生命</li>
                </ul>
              </div>
            </div>
            <div class="attr-distri-down">
              <ul class="guidebar2">
                  <li>鱼类A</li>
                  <li>鱼类B</li>
                  <li>鱼类C</li>
                  <li>鱼类D</li>
                  <li>鱼类E</li>
                  <li>鱼类F</li>
                </ul>
            </div>
          </div>
        </div>
        <!-- 网箱信息 水底传感器 鱼群种类占比 -->
        <div class="column">
          <div class="net-data block">
            <h2>网箱信息</h2>
            <p>网箱长度：<span>100</span>m</p>
            <p>网箱宽度：<span>100</span>m</p>
            <p>网箱深度：<span>100</span>m</p>
            <p>网箱经度：<span>100</span></p>
            <p>网箱纬度：<span>100</span></p>
          </div>
          <div class="sensor block">
            <h2>水底传感器</h2>
            <p>运行时间：<span>100</span>h</p>
            <p>下次检修：<span>25</span>天后</p>
            <p>保修过期：<span></span></p>
          </div>
          <div class="type block">
            <h2>鱼群种类占比</h2>
            <div id="type-chart"></div>
          </div>
        </div>
      </section>
    </div>
  </template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'UnderwaterSystem',
  // 组件的其他代码...
  mounted () {
    var scoreChart = echarts.init(document.getElementById('score-chart'))
    var historyChart = echarts.init(document.getElementById('history-chart'))
    var totalDataChart = echarts.init(document.getElementById('total-data-show2'))
    var attrChart = echarts.init(document.getElementById('attr-distri-chart'))
    var typeChart = echarts.init(document.getElementById('type-chart'))

    var optionScoreChart = {
      series: [
        {
          type: 'gauge',
          startAngle: 180,
          endAngle: 0,
          center: ['50%', '75%'],
          radius: '90%',
          min: 0,
          max: 1,
          splitNumber: 8,
          axisLine: {
            lineStyle: {
              width: 4,
              color: [
                [0.25, '#FF6E76'],
                [0.5, '#FDDD60'],
                [0.75, '#58D9F9'],
                [1, '#7CFFB2']
              ]
            }
          },
          pointer: {
            icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
            length: '12%',
            width: 10,
            offsetCenter: [0, '-60%'],
            itemStyle: {
              color: 'auto'
            }
          },
          axisTick: {
            length: 12,
            lineStyle: {
              color: 'auto',
              width: 1
            }
          },
          splitLine: {
            length: 10,
            lineStyle: {
              color: 'auto',
              width: 3
            }
          },
          axisLabel: {
            color: '#fff',
            fontSize: 12,
            distance: -40,
            rotate: 'tangential',
            formatter: function (value) {
              if (value === 0.875) {
                return '舒适'
              } else if (value === 0.625) {
                return '正常'
              } else if (value === 0.375) {
                return '隐患'
              } else if (value === 0.125) {
                return '危险'
              }
              return ''
            }
          },
          title: {
            offsetCenter: [0, '-10%'],
            fontSize: 20
          },
          detail: {
            fontSize: 20,
            offsetCenter: [0, '-15%'],
            valueAnimation: true,
            formatter: function (value) {
              return Math.round(value * 100) + ''
            },
            color: 'inherit'
          },
          data: [
            {
              value: 0.7
            }
          ]
        }
      ]
    }
    var optionHistoryChart = {
      grid: {
        left: '0%',
        right: '10%',
        bottom: '10%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: true
        }
      ]
    }
    var optionTotalDataChart = {
      series: [
        {
          type: 'gauge',
          max: 100000000,
          splitNumber: 6,
          axisLine: {
            lineStyle: {
              width: 10,
              color: [
                [0.3, '#67e0e3'],
                [0.7, '#37a2da'],
                [1, '#fd666d']
              ]
            }
          },
          pointer: {
            itemStyle: {
              color: 'auto'
            }
          },
          axisTick: {
            distance: -0,
            length: 8,
            lineStyle: {
              color: '#fff',
              width: 2
            }
          },
          splitLine: {
            distance: -0,
            length: 10,
            lineStyle: {
              color: '#fff',
              width: 4
            }
          },
          axisLabel: {
            color: 'inherit',
            distance: 10,
            fontSize: 0
          },
          detail: {
            valueAnimation: true,
            fontSize: 20,
            offsetCenter: [0, '65%'],
            formatter: '{value}',
            color: 'inherit'
          },
          data: [
            {
              value: 15000000
            }
          ]
        }
      ]
    }
    var optionAttrChart = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: true
        }
      ]
    }
    var optionTypeChart = {
      tooltip: {
        trigger: 'item'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 10,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ]
        }
      ]
    }
    scoreChart.setOption(optionScoreChart)
    historyChart.setOption(optionHistoryChart)
    totalDataChart.setOption(optionTotalDataChart)
    attrChart.setOption(optionAttrChart)
    typeChart.setOption(optionTypeChart)
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
  #underwater-system {
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
    margin: 0.60rem;
    border: 3px solid rgba(12, 58, 224, 0.652);
    border-radius: 10px;
  }
  .data-block {
    border: 2px solid rgba(12, 58, 224, 0.652);
  }
  h2 {
    border-bottom: 3px solid rgba(12, 58, 224, 0.652);
    text-align: center;
    font-size: 20px;
    margin: 0;
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
    flex: 9;
  }

  .fish-num {
    height: 20%;
  }
  .envir-score {
    height: 40%;
  }
  .history {
    height: 39%;
  }

  .total-data {
    height: 50%;
  }
  .total-data-show {
    display: flex;
    height: 80%;
  }
  .total-data-show div {
    flex: 3;
  }
  .total-data-show1 {
    padding-left: 20px; /* 左侧 padding */
    padding-right: 20px; /* 右侧 padding */
  }
  .total-data-show3 {
    padding-left: 20px; /* 左侧 padding */
    padding-right: 20px; /* 右侧 padding */
  }

  .show1-up {
    height: 50%;
    width: 100%;
    padding: 80px;
  }
  .show1-down {
    height: 50%;
    width: 100%;
    display: flex;
  }
  .show1-down1 {
    flex: 3;
    margin: 5px;
  }
  .show1-down2 {
    flex: 3;
    margin: 5px;
  }

  .show3-up {
    height: 50%;
    width: 100%;
    padding: 80px;
  }
  .show3-down {
    height: 50%;
    width: 100%;
    display: flex;
  }
  .show3-down1 {
    flex: 3;
    margin: 5px;
  }
  .show3-down2 {
    flex: 3;
    margin: 5px;
  }
  .total-data-number {
    padding-left: 40px; /* 左侧 padding */
    padding-right: 40px; /* 右侧 padding */
  }

  .attr-distri {
    height: 51%;
  }
  .attr-distri-up {
    display: flex;
    height: 80%;
  }
  .attr-distri-chart {
    flex: 10;
  }
  .attr-distri-chose {
    flex: 1;
  }
  ul.guidebar{
    list-style-type:none;
    margin:0;
    padding:0;
    width: 100%;
  }
  ul.guidebar>li {
      float: left;
      display: block;
      text-align: center;
      padding: 4px 16px;
      text-decoration: none;
      font-size:small;
      border-radius: 10px;
      height: 30px;
      margin-top: 5px;
  }
  ul.guidebar>li:hover {
    background-color: #a4cdff;
  }
  ul.guidebar2{
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    display: flex; /* 使用 Flexbox 布局 */
    justify-content: center; /* 子元素水平居中 */
  }
  ul.guidebar2>li {
      float: left;
      display: block;
      text-align: center;
      padding: 4px 16px;
      text-decoration: none;
      font-size:small;
      border-radius: 10px;
      height: 30px;
  }
  ul.guidebar2>li:hover {
    background-color: #a4cdff;
  }

  .net-data {
    height: 29%;
  }
  .sensor {
    height: 29%;
  }
  .type {
    height: 40%;
  }

  #score-chart {
    height: 80%;
    width: 100%;
  }

  #history-chart {
    height: 80%;
    width: 100%;
  }
  #total-data-show2 {
    height: 100%;
    width: 100%;
  }
  #attr-distri-chart {
    height: 100%;
    width: 100%;
  }
  #type-chart {
    height: 100%;
    width: 100%;
  }
</style>
