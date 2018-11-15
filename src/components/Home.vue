<template>
  <div class="content">
    <div class="panel cancel-margin-right">
      <div class="panel-header">
        <ul>
          <li v-for="li in liItems" v-text="li.text" @click="changeChecked(li.text)" :class="['nav-li',{status:li.isChecked}]"></li>
        </ul>
      </div>
      <div class="panel-content">
        <div class="div-li" v-for="title in homeData">

        </div>
      </div>
    </div>
    <div class="sidebar hide">

    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods:{
    changeChecked(li){},
  },
  computed:{
    homeData(){
      return this.$store.state.homeData
    },
  },
  mounted(){
    this.$store.dispatch('getHomeData',{
      page:1,
      tab:'all'
    });
  },
  data () {
    return {
      liItems: [
				{ text: '全部', isChecked: true, tab: 'all' },
				{ text: '精华', isChecked: false, tab: 'good' },
				{ text: '分享', isChecked: false, tab: 'share' },
				{ text: '问答', isChecked: false, tab: 'ask' },
				{ text: '招聘', isChecked: false, tab: 'job' }
			],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
