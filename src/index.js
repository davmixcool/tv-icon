import IconBang from './IconBang.vue'
import IconCheck from './IconCheck.vue'
import IconInfo from './IconInfo.vue'
import IconTimes from './IconTimes.vue'
import IconSpinner from './IconSpinner.vue'
import IconDenied from './IconDenied'


const IconList = {
  IconBang: IconBang,
  IconCheck: IconCheck,
  IconInfo: IconInfo,
  IconTimes: IconTimes,
  IconSpinner: IconSpinner,
  IconDenied: IconDenied,
}

export default {
  install (Vue, options = {}) {
    for (var key in IconList) {
      Vue.component(key, IconList[key])
    }
  }
}

export {
  IconBang,
  IconCheck,
  IconInfo,
  IconTimes,
  IconSpinner,
  IconDenied,
}
