import Vue from 'vue'
import App from './App.vue'
import channelServ from './services/channel';
async function test() {
  var channels = await channelServ.getChannels();
  console.log(channels);
}
test();
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
