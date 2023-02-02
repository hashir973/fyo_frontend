
import axios from "axios";
// imports
import { methodType } from "../config/methodType";
import { domain } from "./_domain";

const apiClient = axios.create({
  baseURL: "https://my-link",
  withCredentials: false,
  accesscontrolalloworigin: "*",
  accesscontrolallowMethods: "GET, POST, PUT, DELETE, PATCH, OPTIONS",
});

const callApi = async (url, method, data = {}) => {
  var _url = `${domain}${url}`;
  var _model = {
    url: _url,
    method,
  };
  if (method === methodType.PUT || method === methodType.POST) {
    _model = { ..._model, data };
  }
  var res = await axios(_model);
  return res.status === 200 ? res.data : { isOk: false, message: "Something went wrong." };
};

export { callApi };
