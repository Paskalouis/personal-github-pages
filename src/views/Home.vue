<template>
  <div id="Home">
    <preloader ref="preloader"></preloader>
    <section id='intro'>
      <div class='intro-overlay'></div>
      <div class='intro-content'>
        <div class='row'>
          <div class='col-md-6 ml-5 mb-5 mr-5' style='margin-top: 128px !important;'>
            <h5> Hello Universe !</h5>
            <h2>I am Paskalouis Patressi</h2>
            <h5 style='color: #77646d !important;'>Full-stack Developer</h5>
            <span class="button stroke" @click.prevent="scrollTo('about')">Find out more!</span>
          </div>
        </div>
      </div>
    </section>

    <div class='container p-3' id="about">
      <div class='row'>
        <div class='col-md-12 row'>
          <div class='col-md-6'>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th colspan=3 style='text-align: center;'>
                    Front End
                  </th>
                </tr>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Repository URL</th>
                </tr>
              </thead>
              <tbody>

              </tbody>
            </table>
          </div>
          <div class='col-md-6'>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th colspan=3 style='text-align: center;'>
                    Back End
                  </th>
                </tr>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Repository URL</th>
                </tr>
              </thead>
              <tbody>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import Preloader from '@/components/Preloader.vue';
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  name: 'Home',
  components: {
    Preloader,
  },
  data() {
    return {
      selectedTribe: '',
      isLoading: false
    }
  },
  computed: {
    ...mapGetters('repository', {
      repositoryList: 'getRepositoryList',
      repositoryListFE: 'getRepositoryListFE',
      repositoryListBE: 'getRepositoryListBE'
    })
  },
  mounted() {
    this.$refs.preloader.fadeOut();
  },
  methods: {
    scrollTo(target) {
      let $target = $(`#${target}`);
      $('html, body').stop().animate({
        'scrollTop': $target.offset().top
      }, 800, 'swing');
    }
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
