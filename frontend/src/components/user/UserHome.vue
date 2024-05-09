<template>
  <div class="main">
    <div class="hero" id="hero">
    <h2 class="hero_header">海洋牧场监测 <span class="light">可视化系统</span></h2>
    <p class="tagline">Foison is just a website away</p>
  </div>
  <!-- About Section -->
  <div class="about" id="about">
    <h2>About</h2>
    <p class="text_column">中国在全球渔业养殖中具有重要地位。然而，目前我国水产养殖系统存在一系列问题。国外采用现代水质传感器技术和在线监控系统来全面监控养殖环境，并通过自动化养殖设备实现环境控制，提高效率，对环境起到积极作用。为了应对这些问题，我们响应中国在十四五发展构建“物联网+海洋牧场”的规划，建立海洋牧场监测可视化系统。</p>
    <img :src="bg1" alt="" width="474" height="167" padding-left="25px"/>
  </div>
  <!-- Stats Gallery Section -->
  <div class="gallery">
    <div class="thumbnail">
      <h1 class="stats">超过114514名</h1>
      <h4>渔户认可</h4>
    </div>
    <div class="thumbnail">
      <h1 class="stats">每年191斤</h1>
      <h4>亩产增加</h4>
    </div>
    <div class="thumbnail">
      <h1 class="stats">累积9810万</h1>
      <h4>鱼苗健康成长</h4>
    </div>
  </div>
  <!-- Parallax Section -->
  <section class="banner">
    <h2 class="parallax">专业渔场监测服务</h2>
    <p class="parallax_description">基于物联网、大数据、云计算等现代信息技术，建立全面、实时、智能的养殖监控系统，精确控制养殖环境，提高效率，减少病害的发生。</p>
  </section>
  <!-- More Info Section -->
  <footer>
    <article class="footer_column">
      <h3>产品试用</h3>
      <img :src="cd1" alt="" width="400" height="200" class="cards"/>
      <p>新用户可以享受我们为期7天的系统使用服务，使用虚拟仿真的渔场熟悉系统操作，体验可视化系统的强力功能。</p>
    </article>
    <article class="footer_column">
      <h3>上门安装</h3>
      <img :src="cd2" alt="" width="400" height="200" class="cards"/>
      <p>购买并留下您的联系方式和渔场地址，我们就会为每您提供上门安装传感器并配置网络的服务。首次购买即得7年保修期。</p>
    </article>
  </footer>
  </div>

</template>

<script>
/* eslint-disable */
import bg1 from '@/assets/home/bg.jpg'
import cd1 from '@/assets/home/card1.jpg'
import cd2 from '@/assets/home/card2.jpg'
export default {
  name: 'Main',
  data () {
    return {
      bg1,cd1,cd2
    }
  },
}
</script>

<style scoped>
body {
	font-family: source-sans-pro;
	background-color: #f2f2f2;
	margin-top: 0px;
	margin-right: 0px;
	margin-bottom: 0px;
	margin-left: 0px;
	font-style: normal;
	font-weight: 200;
}
/* Container */
.container {
	width: 90%;
	margin-left: auto;
	margin-right: auto;
	height: 1000px;
	background-color: #FFFFFF;
}
/* Navigation */
header {
	width: 100%;
	height: 5%;
	background-color: #52bad5;
	border-bottom: 1px solid #2C9AB7;
}
.logo {
	color: #fff;
	font-weight: bold;
	text-align: undefined;
	width: 10%;
	float: left;
	margin-top: 15px;
	margin-left: 25px;
	letter-spacing: 4px;
}
nav {
	float: right;
	width: 50%;
	text-align: right;
	margin-right: 25px;
}
header nav ul {
	list-style: none;
	float: right;
}
nav ul li {
	float: left;
	color: #FFFFFF;
	font-size: 14px;
	text-align: left;
	margin-right: 25px;
	letter-spacing: 2px;
	font-weight: bold;
	transition: all 0.3s linear;
}
ul li a {
	color: #FFFFFF;
	text-decoration: none;
}
ul li:hover a {
	color: #2C9AB7;
}
.hero_header {
	color: #FFFFFF;
	text-align: center;
	margin-top: 0px;
	margin-right: 0px;
	margin-bottom: 0px;
	margin-left: 0px;
	letter-spacing: 4px;
}
/* Hero Section */
.hero {
/*    background-color: #146BE4;*/
    padding-top: 150px;
    padding-bottom: 150px;
	background-image: url("../../assets/home/parallax.png");
	background-attachment: fixed;
	background-size: cover;
	background-repeat: no-repeat;
}
.light {
    font-weight: bold;
    color: #7BC024;
}
.tagline {
	text-align: center;
	color: #FFFFFF;
	margin-top: 4px;
	font-weight: lighter;
	text-transform: uppercase;
	letter-spacing: 1px;
}
/* About Section */
.text_column {
	width: 45%;
	text-align: justify;
	font-weight: lighter;
	line-height: 25px;
	float: left;
	padding-left: 20px;
	padding-right: 20px;
	color: #A3A3A3;
}
.about_pic{
	width: 45%;
}
.about {
	padding-left: 25px;
	padding-right: 25px;
	padding-top: 35px;
	padding-bottom: 35px;
	display: inline-block;
	background-color: #FFFFFF;
	margin-top: 0px;
}
/* Stats Gallery */
.stats {
	color: #717070;
	margin-bottom: 5px;
}
.gallery {
	clear: both;
	display: inline-block;
	width: 100%;
	background-color: #FFFFFF;
	/* [disabled]min-width: 400px;
*/
	padding-bottom: 35px;
	padding-top: 0px;
	margin-top: -5px;
	margin-bottom: 0px;
}
.thumbnail {
	width: 33.33333333333333%;
	text-align: center;
	float: left;
	margin-top: 35px;
}
.gallery .thumbnail h4 {
	margin-top: 5px;
	margin-right: 5px;
	margin-bottom: 5px;
	margin-left: 5px;
	color: #52BAD5;
}
.gallery .thumbnail p {
	margin-top: 0px;
	margin-right: 0px;
	margin-bottom: 0px;
	margin-left: 0px;
	color: #A3A3A3;
}
/* Parallax Section */
.banner {
	background-color: #2D9AB7;
	background-image: url(../../assets/home/parallax.png);
	height: 400px;
	background-attachment: fixed;
	background-size: cover;
	background-repeat: no-repeat;
}
.parallax {
	color: #FFFFFF;
	text-align: right;
	padding-right: 100px;
	padding-top: 110px;
	letter-spacing: 2px;
	margin-top: 0px;
}
.parallax_description {
	color: #FFFFFF;
	text-align: right;
	padding-right: 100px;
	width: 30%;
	float: right;
	font-weight: lighter;
	line-height: 23px;
	margin-top: 0px;
	margin-right: 0px;
	margin-bottom: 0px;
	margin-left: 0px;
}
/* More info */
footer {
	background-color: #FFFFFF;
	padding-bottom: 35px;
}
.footer_column {
	width: 50%;
	text-align: center;
	padding-top: 30px;
	float: left;
}
footer .footer_column h3 {
	color: #B3B3B3;
	text-align: center;
}
footer .footer_column p {
	color: #717070;
	background-color: #FFFFFF;
}
.cards {
	width: 100%;
	height: auto;
	max-width: 400px;
	max-height: 200px;
}
footer .footer_column p {
	padding-left: 30px;
	padding-right: 30px;
	text-align: justify;
	line-height: 25px;
	font-weight: lighter;
	margin-left: 20px;
	margin-right: 20px;
}
.button {
	width: 200px;
	margin-top: 40px;
	margin-right: auto;
	margin-bottom: auto;
	margin-left: auto;
	padding-top: 20px;
	padding-right: 10px;
	padding-bottom: 20px;
	padding-left: 10px;
	text-align: center;
	vertical-align: middle;
	border-radius: 0px;
	text-transform: uppercase;
	font-weight: bold;
	letter-spacing: 2px;
	border: 3px solid #FFFFFF;
	color: #FFFFFF;
	transition: all 0.3s linear;
}
.button:hover {
	background-color: #FEFEFE;
	color: #C4C4C4;
	cursor: pointer;
}
.copyright {
	text-align: center;
	padding-top: 20px;
	padding-bottom: 20px;
	background-color: #717070;
	color: #FFFFFF;
	text-transform: uppercase;
	font-weight: lighter;
	letter-spacing: 2px;
	border-top-width: 2px;
}
.footer_banner {
	background-color: #B3B3B3;
	padding-top: 60px;
	padding-bottom: 60PX;
	margin-bottom: 0px;
	background-image: url(../../assets/home/pattern.png);
	background-repeat: repeat;
}
footer {
	display: inline-block;
}
.hidden {
	display: none;
}

/* Mobile */
@media (max-width: 320px) {
.logo {
	width: 100%;
	text-align: center;
	margin-top: 13px;
	margin-right: 0px;
	margin-bottom: 0px;
	margin-left: 0px;
}
.container header nav {
	margin-top: 0px;
	margin-right: 0px;
	margin-bottom: 0px;
	margin-left: 0px;
	width: 100%;
	float: none;
	display: none;
}
header nav ul {
}
nav ul li {
	margin-top: 0px;
	margin-right: 0px;
	margin-bottom: 0px;
	margin-left: 0px;
	width: 100%;
	text-align: center;
}
.text_column {
	width: 100%;
	text-align: justify;
	padding-top: 0px;
	padding-right: 0px;
	padding-bottom: 0px;
	padding-left: 0px;
}
.thumbnail {
	width: 100%;
}
.footer_column {
	width: 100%;
	margin-top: 0px;
}
.parallax {
	text-align: center;
	margin-top: 0px;
	margin-right: 0px;
	margin-bottom: 0px;
	margin-left: 0px;
	padding-top: 40%;
	padding-right: 0px;
	padding-bottom: 0px;
	padding-left: 0px;
	width: 100%;
	font-size: 18px;
}
.parallax_description {
	padding-top: 0px;
	padding-right: 0px;
	padding-bottom: 0px;
	padding-left: 0px;
	width: 90%;
	margin-top: 25px;
	margin-right: 0px;
	margin-bottom: 0px;
	margin-left: 12px;
	float: none;
	text-align: center;
}
.banner {
	background-color: #2D9AB7;
	background-image: none;
}
.tagline {
	margin-top: 20px;
	line-height: 22px;
}
.hero_header {
	padding-left: 10px;
	padding-right: 10px;
	line-height: 22px;
	text-align: center;
}
}

/* Small Tablets */
@media (min-width: 321px)and (max-width: 767px) {
.logo {
	width: 100%;
	text-align: center;
	margin-top: 13px;
	margin-right: 0px;
	margin-bottom: 0px;
	margin-left: 0px;
	color: #043745;
}
.container header nav {
	margin-top: 0px;
	margin-right: 0px;
	margin-bottom: 0px;
	margin-left: 0px;
	width: 100%;
	float: none;
	overflow: auto;
	display: inline-block;
	background: #52bad5;
}
header nav ul {
	padding: 0px;
	float: none;
}
nav ul li {
	margin-top: 0px;
	margin-right: 0px;
	margin-bottom: 0px;
	margin-left: 0px;
	width: 100%;
	text-align: center;
	padding-top: 8px;
	padding-bottom: 8px;
}
.text_column {
	width: 100%;
	text-align: left;
	padding-top: 0px;
	padding-right: 0px;
	padding-bottom: 0px;
	padding-left: 0px;
}
.thumbnail {
	width: 100%;
}
.footer_column {
	width: 100%;
	margin-top: 0px;
}
.parallax {
	text-align: center;
	margin-top: 0px;
	margin-right: 0px;
	margin-bottom: 0px;
	margin-left: 0px;
	padding-top: 40%;
	padding-right: 0px;
	padding-bottom: 0px;
	padding-left: 0px;
	width: 100%;
	font-size: 18px;
}
.parallax_description {
	padding-top: 0px;
	padding-right: 0px;
	padding-bottom: 0px;
	padding-left: 0px;
	margin-top: 30%;
	margin-right: 0px;
	margin-bottom: 0px;
	margin-left: 0px;
	float: none;
	width: 100%;
	text-align: center;
}
.thumbnail {
	width: 50%;
}
.parallax {
	margin-top: 0px;
	margin-right: 0px;
	margin-bottom: 0px;
	margin-left: 0px;
	padding-right: 0px;
	padding-bottom: 0px;
	padding-left: 0px;
	padding-top: 20%;
}
.parallax_description {
	margin-top: 0px;
	margin-right: 0px;
	margin-bottom: 0px;
	margin-left: 0px;
	width: 100%;
	padding-top: 30px;
}
.banner {
	padding-left: 20px;
	padding-right: 20px;
}
.footer_column {
	width: 100%;
}
}

/* Small Desktops */
@media (min-width: 768px) and (max-width: 1096px) {
.text_column {
	width: 100%;
}
.thumbnail {
	width: 50%;
}
.text_column {
	width: 100%;
	margin-top: 0px;
	margin-right: 0px;
	margin-bottom: 0px;
	margin-left: 0px;
	padding-top: 0px;
	padding-right: 0px;
	padding-bottom: 0px;
	padding-left: 0px;
}
.banner {
	margin-top: 0px;
	padding-top: 0px;
}
}

</style>
