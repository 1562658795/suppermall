import { request } from "./request";
export function getHomeMultidata() {
  return request({
    url: "/home/multidata",
    mothed: "get"
  });
}
export function getHomeGoods(type, page) {
  return request({
    url: "/home/data",
    params: {
      type,
      page
    },
    mothed: "get"
  });
}
