import { createStore } from "vuex"
import { setTocken, removeTocken, getTocken } from "./storage"
import { signinApi, userApi } from "request"

export default createStore({
  state: {
    has_login: getTocken("has_login"),
    username: getTocken("username"),
    password: getTocken("password"),
  },
  getters: {
    hasLogin(state) {
      return state.has_login != ""
    },
    username(state) {
      return state.username
    },
  },
  mutations: {
    changeStatus(state, form) {
      for (let key in form) {
        state[key] = form[key]
      }
    },
    forget(state, data) {
      this.commit("changeStatus", data.states)
      removeTocken(data.keys)
    },
  },
  actions: {
    login(context, form) {
      return new Promise((resolve, reject) => {
        signinApi(form)
          .then((res) => {
            if (parseInt(res.status / 100) === 2) {
              userApi(form.username)
                .then((user) => {
                  context.commit("changeStatus", {
                    has_login: user.uid,
                    username: form.username,
                    password: form.password,
                  })
                  setTocken({
                    has_login: user.uid,
                    username: form.username,
                    password: form.password,
                  })
                  resolve(res)
                })
                .catch((error) => {
                  console.log(error)
                  reject(error)
                })
            } else {
              reject("login failed")
            }
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    logout(context) {
      context.commit("forget", {
        states: {
          has_login: "",
          username: "",
          password: "",
        },
        keys: ["has_login", "username", "password"],
      })
    },
  },
  modules: {},
})
