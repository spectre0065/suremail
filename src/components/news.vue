<template lang="html">
  <div class="container">
      <div class="banner">
          <img v-bind:src="banner" />
      </div>
      <div class="main-warpper">
        <div class="main-part">
          <div class="main-title">
            <img v-bind:src="title1" />
          </div>
          <div class="part1">
            <div class="par1-item">
              <img :src= "news1" />
              <div class="title">
                 <router-link to="components/news/newsdetail.vue">手机中存在的安全隐患，我们应该怎样避免</router-link>
                 <span>2017.10.12</span>
              </div>
            </div>
            <div class="par1-item">
              <img :src= "news2" />
              <div class="title">
                <span>信息安全保护的政策出台</span>
                <span>2017.10.11</span>
              </div>
            </div>
            <div class="par1-item">
              <img :src= "news3" />
              <div class="title">
                <span>关于信息安全的培训工作</span>
                <span>2017.10.10</span>
              </div>
            </div>
            <div class="par1-item" v-for="item in newsPic">
              <div class="bg">
                <img :src= "item.url" />
              </div>
              <div class="title-summary">
                <a class="item-title">Suremail安全邮件网页端2.0</a>
                <a class="item-summary">本次版本发布在网页端。优化了电子邮件收发和个人通讯录功能。</a>
                <div><a  class="item-more">更多详情</a><span class="item-date">2017.10.7</span></div>
              </div>

            </div>

          </div>
          <div class="part2">
            <div class="part2-title">
              <img v-bind:src="title2" />
            </div>
            <div class="part2-item" v-for="item in bg">
              <div class="par2-item-bg">
                <img :src="item.url" />
              </div>
              <div class="part2-item-desc">
                <div class="part2-item-date">
                  {{ item.date }}
                </div>
                <div class="part2-item-summary">
                  <div class="part2-item-title">Suremail安全邮件网页端2.0</div>
                  <div class="part2-item-summary">本次版本发布在网页端。
                    优化了电子邮件收发和个人通讯录功能。本次版本发布在网页端。
                      优化了电子邮件收发和个人通讯录功能。本次版本发布在网页端。
                        优化了电子邮件收发和个人通讯录功能。本次版本发布在网页端。
                          优化了电子邮件收发和个人通讯录功能。本次版本发布在网页端。
                            优化了电子邮件收发和个人通讯录功能。本次版本发布在网页端。
                              优化了电子邮件收发和个人通讯录功能。</div>
                  <div class="part2-item-more">更多详情</div>
                </div>
              </div>
            </div>
            <div class="pagination">
              <ul>
                <li>第一页</li>
                <li>1</li>
                <li>2</li>
                <li>NEXT</li>
                <li>最后一页</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="side-part">
          <div class="side-part1">
            <div class="side-title">
              <img v-bind:src="title3" />
            </div>
            <div class="side-part1-item">
              <Icon type="arrow-right-b"></Icon>
              <span>邮件安全存在的五大威胁...</span>
            </div>
            <div class="side-part1-item">
              <Icon type="arrow-right-b"></Icon>
              <span>邮件安全存在的五大威胁...</span>
            </div>
            <div class="side-part1-item">
              <Icon type="arrow-right-b"></Icon>
              <span>邮件安全存在的五大威胁...</span>
            </div>
            <div class="side-part1-item">
              <Icon type="arrow-right-b"></Icon>
              <span>邮件安全存在的五大威胁...</span>
            </div>
            <div class="side-part1-item">
              <Icon type="arrow-right-b"></Icon>
              <span>邮件安全存在的五大威胁...</span>
            </div>
            <div class="side-part1-item">
              <Icon type="arrow-right-b"></Icon>
              <span>邮件安全存在的五大威胁...</span>
            </div>
            <div class="side-part1-item">
              <Icon type="arrow-right-b"></Icon>
              <span>邮件安全存在的五大威胁...</span>
            </div>
          </div>
          <div class="side-part2">
            <div class="side-title">
              <img v-bind:src="title4" />
            </div>
            <div class="side-part2-year">
              2017
            </div>
            <div class="side-part2-item">
              <Icon type="arrow-right-b"></Icon>
              <span>2017年10月</span>
            </div>
            <div class="side-part2-item">
              <Icon type="arrow-right-b"></Icon>
              <span>2017年9月</span>
            </div>
            <div class="side-part2-item">
              <Icon type="arrow-right-b"></Icon>
              <span>2017年8月</span>
            </div>
            <div class="side-part2-item">
              <Icon type="arrow-right-b"></Icon>
              <span>2017年7月</span>
            </div>
            <div class="side-part2-item">
              <Icon type="arrow-right-b"></Icon>
              <span>2017年6月</span>
            </div>
            <div class="side-part2-item">
              <Icon type="arrow-right-b"></Icon>
              <span>2017年5月</span>
            </div>
            <div class="side-part2-item">
              <Icon type="arrow-right-b"></Icon>
              <span>2017年4月</span>
            </div>
            <div class="side-part2-item">
              <Icon type="arrow-right-b"></Icon>
              <span>2017年3月</span>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import banner from '../assets/img/news/banner.png'
import title1 from '../assets/img/news/title1.png'
import title2 from '../assets/img/news/title2.png'
import title3 from '../assets/img/news/title3.png'
import title4 from '../assets/img/news/title4.png'
import news1 from '../assets/img/news/1.png'
import news2 from '../assets/img/news/2.png'
import news3 from '../assets/img/news/3.png'

import news4 from '../assets/img/news/4.png'
import news5 from '../assets/img/news/5.png'
import news6 from '../assets/img/news/6.png'
import news7 from '../assets/img/news/7.png'

import bg1 from '../assets/img/news/bg1.png'
import bg2 from '../assets/img/news/bg2.png'
import bg3 from '../assets/img/news/bg3.png'
import bg4 from '../assets/img/news/bg4.png'
export default {
  name: 'news',
  data () {
    return {
      banner: banner,
      title1: title1,
      title2: title2,
      title3: title3,
      title4: title4,
      news1: news1,
      news2: news2,
      news3: news3,
      newsPic: [
        {
          name: 'news',
          url: news4
        },
        {
          name: 'news',
          url: news5
        },
        {
          name: 'news',
          url: news6
        },
        {
          name: 'news',
          url: news7
        }
      ],
      bg: [
        {
          name: 'news2',
          date: '2017.10.10',
          url: bg1
        },
        {
          name: 'news2',
          date: '2017.10.9',
          url: bg2
        },
        {
          name: 'news2',
          date: '2017.10.8',
          url: bg3
        },
        {
          name: 'news2',
          date: '2017.10.7',
          url: bg4
        }
      ]
    }
  }
}
</script>

<style scoped lang="css">
.main-warpper{
  width: 1200px;
  height: auto;
  /*border:solid;*/
  margin:0 auto;
  padding-top: 80px;
}
.banner>img{
  width: 100%;
  height: 100%;
}
.main-part{
  width: 980px;
  height: auto;
  float: left;
  /*border:solid;*/
}
.main-title{
  margin-bottom: 43px;
}
.main-title>img{
  width: 100%;
  height: 100%;
}
.par1-item{
  position: relative;
}
.par1-item>img{
  width: 100%;
  height: 100%;
}
.par1-item:nth-child(1){
  width: 632px;
  height: 456px;
  margin-right: 22px;
  /*border:solid 1px red;*/
  float: left;
}
.par1-item:nth-child(2),.par1-item:nth-child(3){
  width: 320px;
  height: 218px;
  /*border:solid 1px green;*/
  float: left;
}
.par1-item:nth-child(2){
  margin-bottom: 20px;
}
.par1-item:nth-child(n+4) {
  width: 230px;
  height:295px;
  float: left;
  margin-top: 30px;
  /*border:solid 1px red;*/
}
.par1-item:nth-child(n+4) .bg>img{
  width: 100%;
  height: 100%;
}
.par1-item:nth-child(4),
.par1-item:nth-child(5),
.par1-item:nth-child(6)
{
  margin-right:18px;
}
.par1-item:nth-child(1) .title{
  width: 100%;
  height: 60px;
  line-height: 60px;
  padding-left: 15px;
  padding-right: 15px;
  position: absolute;
  bottom:0;
  font-family: "思源黑体","黑体";
  font-size: 24px;
  letter-spacing:-2px;
  color:#fff;
  background-color:rgba(160, 160, 160, 0.6);
}
.par1-item:nth-child(2) .title,
.par1-item:nth-child(3) .title
{
  width: 100%;
  height: 30px;
  line-height: 30px;
  padding-left: 10px;
  padding-right: 10px;
  position: absolute;
  bottom:0;
  font-family: "思源黑体","黑体";
  font-size: 16px;
  letter-spacing:0px;
  color:#fff;
  background-color:rgba(160, 160, 160, 0.6);
}
.par1-item .title span:nth-child(2){
  float: right;
}
.item-title{
  font-size:14px;
  font-family: "micro soft yahei";
  color:#555556;
  display: block;
  margin-top:10px;
  margin-bottom: 5px;
}
.item-summary{
  font-size:12px;
  font-family: "micro soft yahei";
  color:#6a6b6c;
  display: block;
  margin-bottom: 15px;
}
.item-more{
  display: block;
  text-decoration: none;
  font-size:14px;
  color:#969696;
  border:solid 1px #9e9fa0;
  width:80px;
  float: left;
  text-align: center;
  border-radius: 10px;
  font-family: "黑体";
  transition: all .2s ease-in-out;
}
.item-more:hover{
  background-color: #9e9fa0;
  color:#fff;
  border:solid 1px #9e9fa0;
}
.item-date{
  display: inline-block;
  float: right;
  color:#c8c9ca;
}
/**/
/*.part2{
  border-bottom: solid 1px #aaa9a9;
  margin-bottom: 20px;
}*/
.part2-title{
  margin-bottom: 70px;
}
.part2-title>img{
  width: 100%;
  height: 100%;
}
.part2-item{
  width: 980px;
  height: 230px;
  margin-bottom: 50px;
  /*border:solid 1px red;*/
}
.par2-item-bg{
  width: 370px;
  height: 230px;
  margin-right: 18px;
  float: left;
}
.par2-item-bg>img{
  width: 100%;
  height: 100%;
}
.part2-item-desc{
  float: left;
  height: 100%;
  width:580px;
  /*border:solid 1px green;*/
}
.part2-item-date{
  width: 142px;
  height: 35px;
  background-color: #000;
  line-height: 35px;
  text-align: center;
  font-family: "黑体";
  font-size: 16px;
  color:#fff;
}
.part2-item-title{
  font-size: 16px;
  font-family: "思源黑体","黑体";
  color: #555556;
  display: block;
  margin-top: 10px;
  margin-bottom: 5px;
}
.part2-item-summary{
  font-size: 14px;
  font-family: "思源黑体","黑体";
  color: #868787;
  display: block;
  margin-bottom: 15px;
}
.part2-item-more{
  display: block;
  text-decoration: none;
  font-size: 14px;
  color: #969696;
  border: solid 1px #9e9fa0;
  width: 80px;
  float: left;
  text-align: center;
  border-radius: 10px;
  font-family: "\9ED1\4F53";
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
}
.part2-item-more:hover{
  background-color: #9e9fa0;
  color:#fff;
  border:solid 1px #9e9fa0;
}
.pagination{
  width: 100%;
  height: 80px;
  padding-top: 40px;
  border-top:solid 1px #aaa9a9;
  padding-bottom: 55px;
}
.pagination ul>li{
  float: left;
  display: inline-block;
  font-size:14px;
  color:#aaa9a9;
  margin-right: 15px;
}
/**/
.side-part{
  width: 190px;
  height: 500px;
  /*border:solid 1px red;*/
  float: right;
}
.side-title{
  margin-bottom: 45px;
}
.side-title>img{
  width: 100%;
  height: 100%;
  display: block;
  margin-top: 5px;
}
.side-part1-item{
  font-size:14px;
  font-family: "思源黑体","黑体";
  color:#bcbcbd;
  padding-top: 5px;
  padding-bottom: 5px;
  transition: all .3s ease-in-out;
  /*border:solid 1px red;*/
}
.side-part1-item:hover,
.side-part2-item:hover
{
  color:#0879d7;
}
.side-title:nth-child(2){
  margin-top: 45px;
}
.side-part2-year{
  font-weight: bold;
  font-size:18px;
  color:#5b5b5c;
  font-style: italic;
}
.side-part2-item{
  font-family: "思源黑体","黑体";
  font-size:16px;
  color:#bcbcbd;
  padding-top: 5px;
  padding-bottom: 5px;
}









</style>
