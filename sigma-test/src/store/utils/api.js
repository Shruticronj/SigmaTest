import axios from "./axios";

class ApiJunction {
  makeRequest(params) {
    // let token = params.token || local.getItem('token')
    // axios.interceptors.request.use(setHeaders(token));
    // axios.defaults.headers.common["Authorization"] = `Bearer 
    // `;
    // axios.defaults.headers.common["Content-Type"] = `application/json`;
    // return axios[params.method](params.url, params.body)
    if (params.method === "get") {
      return axios.get(params.url, { params: params.params });
    } else {
      return { success: false, msg: "No method provided, get, post?" };
    }
  }
}

export default new ApiJunction();
