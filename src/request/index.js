import axios from "axios"

const HOST = "/host"
// const HOST = "http://10.1.139.94/"

const base = {
  sign_up: "/sign_up/",
  sign_in: "/sign_in/",
  user: "/user/",
  add_topic: "/add_topic/",
  topic_id: "/topic/",
  topics: "/topic_list/",
  update_topic: "/update_topic/",
  add_note: "/add_note/",
  note_id: "/note/",
  notes: "/note_list/",
}

const request = axios.create({
  baseURL: HOST,
  timeout: 5000,
  withCredentials: false,
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
    method: "get",
    params: { username: query },
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

export function addTopicApi(query) {
  return request({
    url: base.add_topic,
    method: "post",
    data: query,
    responseType: "json",
  })
}

export function topicListApi(query) {
  return request({
    url: base.topics,
    method: "get",
    params: query,
    responseType: "json",
  })
}

export function noteListApi(query) {
  return request({
    url: base.notes,
    method: "get",
    params: query,
    responseType: "json",
  })
}

export function addNoteApi(query) {
  return request({
    url: base.add_note,
    method: "post",
    data: query,
    responseType: "json",
  })
}

export function updateTopicApi(query) {
  return request({
    url: base.update_topic,
    method: "post",
    data: query,
    responseType: "json",
  })
}
