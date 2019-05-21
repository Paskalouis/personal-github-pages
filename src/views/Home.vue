<template>
  <div id="Home">
    <preloader ref="preloader"></preloader>
    <section id='intro'>
      <div class='intro-overlay'></div>
      <div class='intro-content row' style='margin-right: 0;'>
        <div class='col-md-6 ml-5 mb-5 mr-5' style='margin-top: 128px !important;'>
          <h5 id='welcome1'> Hello Universe !</h5>
          <h2 id='welcome2'>I am Paskalouis Patressi</h2>
          <h5 id='welcome3' style='color: #77646d !important;'>Full-stack Developer</h5>
          <span id='find-out-button' class="button stroke" @click.prevent="scrollTo('about')">Find out more!</span>
        </div>
      </div>
    </section>

    <!-- <bubble-throb /> -->
    <div class='container p-3 row' style='height: 640px;' id="about">
      <!-- <div class='col-md-12 row'>
        <div class='col-md-6'>

        </div>
      </div> -->
      <div class='col-md-12 row'>
        <line-chart
          v-if="chartDataLoaded"
          :chartdata="myContributions"
          :options="{}" />
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import Preloader from '@/components/Preloader.vue';
import ChartLine from '@/components/ChartLine.vue';
// import BubbleThrob from '@/components/BubbleThrob.vue';
import anime from 'animejs';
import TweenMax from "gsap/TweenMax";
import { mapState, mapActions, mapGetters } from 'vuex';
import { setTimeout } from 'timers';

export default {
  name: 'Home',
  components: {
    Preloader,
    'line-chart': ChartLine,
    // BubbleThrob,
  },
  data() {
    return {
      // chartDataLoaded: false,
    }
  },
  computed: {
    ...mapGetters('gitInfo', {
      myGitInfo: 'getMyGitInfo',
      myContributions: 'getMyContributions',
      chartDataLoaded: 'getChartDataLoaded',
    })
  },
  mounted() {
    this.$refs.preloader.fadeOut();
    anime({
      targets: '#welcome1',
      translateX: 300,
      duration: 1500
    });
    anime({
      targets: '#welcome2',
      translateX: -300,
      duration: 1500
    });
    anime({
      targets: '#welcome3',
      translateX: 300,
      duration: 1500
    });
    // TweenMax.from("#welcome1", 3, {x:300, opacity:0, scale:0.5});
    // TweenMax.from("#welcome2", 3, {x:-300, opacity:0, scale:0.5});
    // TweenMax.from("#welcome3", 3, {x:300, opacity:0, scale:0.5});
    this.$store.dispatch('gitInfo/getMyContributions');
  },
  methods: {
    ...mapActions({
      setChartDataLoaded: 'gitInfo/setChartDataLoaded',
    }),
    scrollTo(target) {
      let $target = $(`#${target}`);
      $('html, body').stop().animate({
        'scrollTop': $target.offset().top
      }, 800, 'swing');
    },
    // toggleChart(value) {
    //   setTimeout(() => this.setChartDataLoaded(value), 800);
    // }
  }
}

</script>

<style scoped>
#intro {
  background: #151515 url(../assets/business-code.jpg) no-repeat center bottom;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  height: 100%;
  min-height: 720px;
  display: table;
  position: relative;
  text-align: center;
}
</style>
