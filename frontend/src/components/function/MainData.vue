<template>
    <div id="main-data">
      <header>
        <h1>主要信息</h1>
      </header>
      <section class="mainbox">
        <!-- 监控视频 -->
        <div class="column block">
          <h2>监控视频</h2>
          <div class="video">
            <ul class="guidebar">
              <li><button class="round-button">&lt;</button></li>
              <li>视频1</li>
              <li>视频2</li>
              <li>视频3</li>
              <li>视频4</li>
              <li><button class="round-button">&gt;</button></li>
            </ul>
            <p>这里有一个视频！</p>
          </div>
          <div class="addfunc">
            <div class="addfuncEle">
              <span>摄像机&nbsp;</span>
              <input type="checkbox" class="checke">
              <br>
              <br>
              <img src="~@/assets/摄像机.jpg" alt="">
            </div>
            <div class="addfuncEle">
              <span>灯光&nbsp;&nbsp;</span>
              <input type="checkbox" class="checke">
              <br>
              <br>
              <img src="~@/assets/灯光.jpg" alt="">
            </div>
            <div class="addfuncEle">
              <span>清洁刷&nbsp;</span>
              <input type="checkbox" class="checke">
              <br>
              <br>
              <img src="~@/assets/清洁刷.jpg" alt="">
            </div>
            <div class="addfuncEle">
              <span>视频回放</span>
              <br>
              <br>
              <img src="~@/assets/视频回放.jpg" alt="">
            </div>
            <div class="addfuncEle">
              <span>视频同时播放</span>
              <br>
              <br>
              <img src="~@/assets/视频同时播放.jpg" alt="">
            </div>
            <div class="addfuncEle">
              <span>云台摄像机</span>
              <br>
              <br>
              <img src="~@/assets/云台摄像机.jpg" alt="">
            </div>
          </div>
        </div>
        <!-- 水文气象 海洋牧场位置显示 -->
        <div class="column">
          <div class="row1 block">
            <h2>水文气象</h2>
            <!-- <p>电池电压（V）<span>0.00</span></p>
            <p>盐度（‰）<span>0.00</span></p>
            <p>溶解氧（mg/L）<span>0.00</span></p>
            <p>浊度（NTU）<span>0.00</span></p>
            <p>pH  <span>0.00</span></p>
            <p>水温（℃）<span>0.00</span></p> -->
            <div id="vol-chart"></div>
            <div id="salt-chart"></div>
            <div id="oxy-chart"></div>
            <div id="turb-chart"></div>
            <div id="ph-chart"></div>
            <div id="temp-chart"></div>
          </div>
          <div class="row2 block">
            <h2>定位</h2>
          </div>
        </div>
        <!-- 历史记录 设备状态 -->
        <div class="column">
          <div class="history block">
            <h2>历史记录</h2>
            <p>统计时间：
              <input type="date" name="date" id="date" value="" />
              <input type="time" name="date" id="time" value="" />
              至
              <input type="date" name="date" id="date" value="" />
              <input type="time" name="date" id="time" value="" />
              <button>查询</button>
            </p>
            <br>
            <ul class="guidebar">
              <li class="timescale">过去一天</li>
              <li class="timescale">过去一周</li>
              <li class="timescale">过去一月</li>
              <li class="timescale">过去一年</li>
              <li>
                <select id="mySelect">
                  <option value="option1">电池电压</option>
                  <option value="option1">盐度</option>
                  <option value="option3">溶解度</option>
                  <option value="option2">浊度</option>
                  <option value="option2">ph</option>
                  <option value="option2">水温</option>
                </select>
              </li>
            </ul>
            <div id="history-chart"></div>
          </div>
          <div class="dev-state block">
            <h2>设备状态</h2>
            <ul class="guidebar">
              <li class="timescale">主控</li>
              <li class="timescale">时间校准</li>
              <li class="timescale">通道</li>
              <li class="timescale">告警</li>
            </ul>
            <ul class="state">
              <li>设备ID：<span>8D19C331</span></li>
              <li>主控状态
                <ul>
                  <li>版本：<span>V0.1.1</span></li>
                  <li>温度：<span>39.64℃</span></li>
                </ul>
              </li>
              <li>次控状态
                <ul>
                  <li>连接：<span>断开</span></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'MainData',
  // 组件的其他代码...
  mounted () {
    // 基于准备好的dom，初始化echarts实例
    var volChart = echarts.init(document.getElementById('vol-chart'))
    var saltChart = echarts.init(document.getElementById('salt-chart'))
    var oxyChart = echarts.init(document.getElementById('oxy-chart'))
    var turbChart = echarts.init(document.getElementById('turb-chart'))
    var phChart = echarts.init(document.getElementById('ph-chart'))
    var tempChart = echarts.init(document.getElementById('temp-chart'))
    var historyChart = echarts.init(document.getElementById('history-chart'))

    // 指定图表的配置项和数据
    var optionVolChart = {
      grid: {
        left: '25%',
        right: '10%',
        bottom: '100%',
        containLabel: false
      },
      xAxis: {
        show: false,
        max: 40
      },
      yAxis: {
        type: 'category',
        data: ['电池电压（V）'],
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#fff'
        }
      },
      series: [
        {
          name: 'val',
          type: 'bar',
          data: [20],
          itemStyle: {
            barBorderRadius: 20,
            color: '#90EE90'
          },
          barGategoryGap: 50,
          barWidth: 15,
          showBackground: true,
          backgroundStyle: {
            borderRadius: 10
          },
          label: {
            show: true,
            position: 'right'
          }
        }
      ]
    }
    var optionSaltChart = {
      grid: {
        left: '25%',
        right: '10%',
        bottom: '100%',
        containLabel: false
      },
      xAxis: {
        show: false,
        max: 1000
      },
      yAxis: {
        type: 'category',
        data: ['盐度（‰）'],
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#fff'
        }
      },
      series: [
        {
          name: 'val',
          type: 'bar',
          data: [30],
          itemStyle: {
            barBorderRadius: 20,
            color: '#90EE90'
          },
          barGategoryGap: 50,
          barWidth: 15,
          showBackground: true,
          backgroundStyle: {
            borderRadius: 10
          },
          label: {
            show: true,
            position: 'right'
          }
        }
      ]
    }
    var optionOxyChart = {
      grid: {
        left: '25%',
        right: '10%',
        bottom: '100%',
        containLabel: false
      },
      xAxis: {
        show: false,
        max: 100
      },
      yAxis: {
        type: 'category',
        data: ['溶解氧（mg/L）'],
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#fff'
        }
      },
      series: [
        {
          name: 'val',
          type: 'bar',
          data: [0],
          itemStyle: {
            barBorderRadius: 20,
            color: '#90EE90'
          },
          barGategoryGap: 50,
          barWidth: 15,
          showBackground: true,
          backgroundStyle: {
            borderRadius: 10
          },
          label: {
            show: true,
            position: 'right'
          }
        }
      ]
    }
    var optionTurbChart = {
      grid: {
        left: '25%',
        right: '10%',
        bottom: '100%',
        containLabel: false
      },
      xAxis: {
        show: false,
        max: 10
      },
      yAxis: {
        type: 'category',
        data: ['浊度（NTU）'],
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#fff'
        }
      },
      series: [
        {
          name: 'val',
          type: 'bar',
          data: [2.03],
          itemStyle: {
            barBorderRadius: 20,
            color: '#90EE90'
          },
          barGategoryGap: 50,
          barWidth: 15,
          showBackground: true,
          backgroundStyle: {
            borderRadius: 10
          },
          label: {
            show: true,
            position: 'right'
          }
        }
      ]
    }
    var optionPhChart = {
      grid: {
        left: '25%',
        right: '10%',
        bottom: '100%',
        containLabel: false
      },
      xAxis: {
        show: false,
        max: 14
      },
      yAxis: {
        type: 'category',
        data: ['pH'],
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#fff'
        }
      },
      series: [
        {
          name: 'val',
          type: 'bar',
          data: [8.37],
          itemStyle: {
            barBorderRadius: 20,
            color: '#90EE90'
          },
          barGategoryGap: 50,
          barWidth: 15,
          showBackground: true,
          backgroundStyle: {
            borderRadius: 10
          },
          label: {
            show: true,
            position: 'right'
          }
        }
      ]
    }
    var optionTempChart = {
      grid: {
        left: '25%',
        right: '10%',
        bottom: '100%',
        containLabel: false
      },
      xAxis: {
        show: false,
        max: 50
      },
      yAxis: {
        type: 'category',
        data: ['水温（℃）'],
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#fff'
        }
      },
      series: [
        {
          name: 'val',
          type: 'bar',
          data: [15],
          itemStyle: {
            barBorderRadius: 20,
            color: '#90EE90'
          },
          barGategoryGap: 50,
          barWidth: 15,
          showBackground: true,
          backgroundStyle: {
            borderRadius: 10
          },
          label: {
            show: true,
            position: 'right'
          }
        }
      ]
    }
    var optionHistoryChart = {
      grid: {
        left: '5%',
        right: '5%',
        bottom: '0%',
        containLabel: true
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      toolbox: {
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      legend: {
        data: ['Evaporation', 'Precipitation', 'Temperature']
      },
      xAxis: [
        {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisPointer: {
            type: 'shadow'
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: 'Precipitation',
          min: 0,
          max: 250,
          interval: 50,
          axisLabel: {
            formatter: '{value} ml'
          }
        },
        {
          type: 'value',
          name: 'Temperature',
          min: 0,
          max: 25,
          interval: 5,
          axisLabel: {
            formatter: '{value} °C'
          }
        }
      ],
      series: [
        {
          name: 'Evaporation',
          type: 'bar',
          tooltip: {
            valueFormatter: function (value) {
              return value + ' ml'
            }
          },
          data: [
            2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
          ]
        },
        {
          name: 'Precipitation',
          type: 'bar',
          tooltip: {
            valueFormatter: function (value) {
              return value + ' ml'
            }
          },
          data: [
            2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
          ]
        },
        {
          name: 'Temperature',
          type: 'line',
          yAxisIndex: 1,
          tooltip: {
            valueFormatter: function (value) {
              return value + ' °C'
            }
          },
          data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
      ]
    }

    // 使用刚指定的配置项和数据显示图表。
    volChart.setOption(optionVolChart)
    saltChart.setOption(optionSaltChart)
    oxyChart.setOption(optionOxyChart)
    turbChart.setOption(optionTurbChart)
    phChart.setOption(optionPhChart)
    tempChart.setOption(optionTempChart)
    historyChart.setOption(optionHistoryChart)

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
  #main-data {
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
    flex: 9;
    height: 95%;
  }
  .mainbox .column .video {
    height: 60%;
  }
  .mainbox .column .addfunc {
    height: 35%;
  }
  ul.guidebar{
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    display: flex; /* 使用 Flexbox 布局 */
    justify-content: center; /* 子元素水平居中 */
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
  }
  ul.guidebar>li:hover {
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

  .checke{
    position: relative;
    bottom: 0;
    -webkit-appearance: none;
    width:40px;
    height:20px;
    line-height: 44px;
    background: #eeeeee98;
    border-radius: 30px;
    outline: none;
    margin: 0;
  }

  .checke:before{
    position: absolute;
    left: 0;
    content: '';
    width: 50%;
    height: 100%;
    border-radius: 50%;
    background: #eee;
    box-shadow: 0px 0px 5px #ddd;
  }
  .checke:checked{
    background: rgb(5, 207, 5);
  }
  .checke:checked:before{
    left:50%;
  }
  .addfuncEle {
    border-radius: 10px;
    background-color: #234EB6;
    color: white;
    font-size: 15px;
    margin: 5px;
    height: 90%;
    padding: 1.775rem;
  }
  .addfunc {
    display: grid;
    grid-template-rows: 50% 50%;
    grid-template-columns: 33% 33% 33%;
    grid-gap: 0; /* 元素之间的间距为零 */
    justify-content: start; /* 元素从左上角开始布局 */
    align-content: start; /* 元素从左上角开始布局 */
  }

  .mainbox .column .row1 {
    height: 45%;
  }
  .mainbox .column .row2 {
    height: 53%;
  }
  .mainbox .column .history {
    height: 58%
  }
  .mainbox .column .dev-state {
    height: 40%
  }

  #vol-chart {
    width: 100%;
    height: 15%;
    padding: 0;
    margin: 0;
  }
  #salt-chart {
    width: 100%;
    height: 15%;
  }
  #oxy-chart {
    width: 100%;
    height: 15%;
  }
  #turb-chart {
    width: 100%;
    height: 15%;
  }
  #ph-chart {
    width: 100%;
    height: 15%;
  }
  #temp-chart {
    width: 100%;
    height: 15%;
  }
  #history-chart {
    width: 100%;
    height: 70%;
  }
  ul.state {
    text-align: left;
    list-style-type: none;
    padding-left: 20px; /* 调整父级列表的左侧内边距 */
  }

  ul.state > li {
    margin-bottom: 10px; /* 调整每个列表项之间的间距 */
  }

  ul.state ul {
    padding-left: 20px; /* 调整子级列表的左侧内边距 */
  }

</style>
