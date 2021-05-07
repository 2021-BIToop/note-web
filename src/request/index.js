import axios from "axios"

const HOST = "/host"

const base = {
  sign_up: "/sign_up/",
  sign_in: "/sign_in/",
  user: "/user/",
  add_topic: "/add_topic/",
  topic_id: "/topic/",
  topics: "/topics/",
  add_note: "/add_note/",
  note_id: "/note/",
  notes: "/notes/",
}

const request = axios.create({
  baseURL: HOST,
  timeout: 5000,
  withCredentials: true,
})

// 实例，主动检索，通过关键词查找
// export function searchByKeywordApi(query) {
//   return request({
//     url: base.paper,
//     method: 'get',
//     params: query,
//     responseType: 'json'
//   })
// }

export function searchByKeywordApi(query) {
  return request({
    url: base.results,
    method: "get",
    params: query,
    responseType: "json",
  })
}

export function signinApi(query) {
  return request({
    url: base.sign_in,
    method: "post",
    data: query,
    responseType: "json",
  })
}

export function signupApi(query) {
  return request({
    url: base.sign_up,
    method: "post",
    data: query,
    responseType: "json",
  })
}

export function userApi(query) {
  return request({
    url: base.user,
    method: "post",
    params: query,
    responseType: "json",
  })
}

export function topicIdApi(query) {
  return request({
    url: base.topic_id,
    method: "get",
    params: query,
    responseType: "json",
  })
}
