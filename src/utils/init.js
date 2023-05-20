import store from '../redux/store'
import * as loginActions from '../redux/actions/login'

if (localStorage.getItem("goodlive")) {
  let goodlive = localStorage.getItem("goodlive")
  store.dispatch(loginActions.setLogin(JSON.parse(goodlive)))
}