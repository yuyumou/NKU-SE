<template>
  <div class="main">
    <div class="carousel-container">
      <transition-group name="carousel-slide" tag="div">
        <img :src="current_photo" alt="photo" key="k" class="carousel-slide-item">
        <!-- <div v-for="(photo,index) in photos" :key="index" class="carousel-slide-item"> -->
          <!-- <img v-if="index === currentIndex" :src="photo" alt="photo" /> -->
        <!-- </div> -->
      </transition-group>
    </div>
  </div>

</template>

<script>
/* eslint-disable */
import bg1 from '@/assets/home_bg.jpeg'
import bg3 from '@/assets/home_bg2.jpg'
import bg2 from '@/assets/home_bg3.jpeg'
export default {
  name: 'Main',
  data () {
    return {
      photo_num: 3,
      photos: [
        bg1,
        bg2,
        bg3,
      ],
      current_photo: null,
      currentIndex: 0,
      intervalId: null,
    }
  },
  mounted () {
    //this.start[auto](https://geek.csdn.net/educolumn/0ed23d107a440608894f63cac98e73fb?spm=1055.2569.3001.10083)Slide();
    console.log(this.photos)
    this.startSlide()
    this.currentIndex = 0
    this.current_photo = this.photos[this.currentIndex]
  },
  beforeUnmount () {
  },
  created () {
    console.log(this.photos)
  },
  methods: {
    startSlide(){
      this.intervalId = setInterval(() => {
        this.slideRight()
      }, 3000)
    },
    stopAutoSlide(){
      clearInterval(this.intervalId)
    },
    slideLeft(){
      this.currentIndex = (this.currentIndex - 1 + this.photo_num) % this.photo_num
      this.current_photo = this.photos[this.currentIndex]
    },
    slideRight(){
      this.currentIndex = (this.currentIndex + 1) % this.photo_num
      this.current_photo = this.photos[this.currentIndex]
    },
    getCurrent(){
      console.log(this.photos[this.currentIndex])
      return this.photos[this.currentIndex]
    }
  }
}
</script>

<style scoped>
  .carousel-container{
    width: 100%;
    overflow: hidden;
  }

  .carousel-slide-item {
    float: left;
    width: 100%;
  }

  .carousel-slide-enter-active {
    transition: transform 1.5s
  }
  .carousel-slide-leave-active {
    transition: transform 1.5s
  }
  .carousel-slide-enter {
    transform: translateX(100%);
  }
  .carousel-slide-leave-to {
    transform: translateX(-100%);
  }
</style>
