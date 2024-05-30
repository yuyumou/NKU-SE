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
                  <div class="total-data-b1">
                    <p>1000</p>
                  </div>
                  <div class="total-data-b2">
                    <p>今日新增</p>
                    <p>8</p>
                  </div>
                  <div class="total-data-b3">
                    <p>今日处理</p>
                    <p>8</p>
                  </div>
                </div>
              </div>
              <div class="hw-info block">
                <div class="hw-info-row1">
                  <div class="total-process">
                    <h3>进程总量</h3>
                    <div class="total-process-num">
                      1024
                    </div>
                  </div>
                  <div class="disk">
                    <h3>磁盘</h3>
                    <div id="disk-chart"></div>
                  </div>
                </div>
                <div class="hw-info-row2">
                  <div id="cpu-chart"></div>
                  <div id="mem-chart"></div>
                  <div id="gpu-chart"></div>
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
            <div>
      <input v-model="queryProvince" placeholder="输入省份名称进行查询" />
      <button @click="searchData">查询</button>
    </div>
    <div v-if="results.length">
      <h3>查询结果</h3>
      <ul>
        <li v-for="result in results" :key="result.time">
          省份: {{ result.province }}, 河流: {{ result.river_section }}, 质量: {{ result.quality_type }}, 时间: {{ new Date(result.time).toLocaleString() }}
        </li>
      </ul>
    </div>
          </div>
        </div>
      </section>
    </div>
  </template>

<script>
import * as echarts from 'echarts'
import axios from 'axios'

export default {
  name: 'DataCenter',
  data () {
    return {
      queryProvince: '', // 用于绑定输入框的数据
      results: [] // 用于存储查询结果的数组
    }
  },
  methods: {
    async searchData () {
      try {
        const response = await axios.post('http://localhost:3000/aquadata_get', {
          province: this.queryProvince
        })
        this.results = response.data
        console.log('查询成功')
        console.log('查询响应:', response.data)
      } catch (error) {
        console.log('reaching here')
        console.error('Error fetching data:', error)
        alert('查询出错，请查看控制台了解详情。')
      }
    }
  },
  // 组件的其他代码...
  mounted () {
    var diskChart = echarts.init(document.getElementById('disk-chart'))
    var cpuChart = echarts.init(document.getElementById('cpu-chart'))
    var memChart = echarts.init(document.getElementById('mem-chart'))
    var gpuChart = echarts.init(document.getElementById('gpu-chart'))

    var optionDiskChart = {
      grid: {
        left: '0%',
        right: '0%',
        bottom: '0%',
        containLabel: false
      },
      tooltip: {
        trigger: 'item', // 设置提示信息的触发方式为悬停在数据项上
        formatter: '{b}: {c}GB ({d}%)' // 设置提示信息的格式，其中 {a} 表示系列名称，{b} 表示数据项名称，{c} 表示数据项值，{d} 表示百分比
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            {value: 1048, name: '已占用', itemStyle: { color: '#1f77b4' }},
            {value: 735, name: '未占用', itemStyle: { color: '#808080' }}
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }
    var optionCpuChart = {
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
        data: ['CPU运行状态'],
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
            color: '#0000FF'
          },
          barGategoryGap: 50,
          barWidth: 15,
          showBackground: true,
          backgroundStyle: {
            borderRadius: 10
          },
          label: {
            show: true,
            position: 'right',
            formatter: '{c}%'
          }
        }
      ]
    }
    var optionMemChart = {
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
        data: ['内存运行状态'],
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
          data: [50],
          itemStyle: {
            barBorderRadius: 20,
            color: '#800080'
          },
          barGategoryGap: 50,
          barWidth: 15,
          showBackground: true,
          backgroundStyle: {
            borderRadius: 10
          },
          label: {
            show: true,
            position: 'right',
            formatter: '{c}%'
          }
        }
      ]
    }
    var optionGpuChart = {
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
        data: ['GPU运行状态'],
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
            color: '#FFA500'
          },
          barGategoryGap: 50,
          barWidth: 15,
          showBackground: true,
          backgroundStyle: {
            borderRadius: 10
          },
          label: {
            show: true,
            position: 'right',
            formatter: '{c}%'
          }
        }
      ]
    }
    diskChart.setOption(optionDiskChart)
    cpuChart.setOption(optionCpuChart)
    memChart.setOption(optionMemChart)
    gpuChart.setOption(optionGpuChart)

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
    background-image: url('~@/assets/visual/bg3.png'); /* 设置背景图片 */
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
  .total-data-b {
    display: flex;
    padding: 10px
  }
  .total-data-b1 {
    flex: 6;
    font-size: 40px;
    border: solid skyblue 2px;
    margin-left: 50px;
    margin-right: 50px;
  }
  .total-data-b2 {
    padding: 5px;
    flex: 2;
  }
  .total-data-b3 {
    padding: 5px;
    flex: 2;
  }

  .total-process-num {
    padding: 20px;
    font-size: 4rem;
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

  #disk-chart {
    height: 80%;
    width: 100%;
  }
  #cpu-chart {
    height: 30%;
    width: 100%;
  }
  #mem-chart {
    height: 30%;
    width: 100%;
  }
  #gpu-chart {
    height: 30%;
    width: 100%;
  }
</style>
