import Home from './views/Home/index.vue'
import Workbench from './views/Workbench/index.vue'
import ErrorPage from './views/Error/index.vue'

export default {
  '/': Home,
  '/workbench': Workbench,
  // '*': () => ErrorPage
}