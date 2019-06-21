import axios from "axios";

axios.interceptors.response.use(
  res => {
    return res;
  },
  err => {
    //catches if the session ended!
    console.log(err);
    if (window.location.href.indexOf("login") < 1)
      window.location.href = "/login";
    return Promise.reject(err);
  }
);
axios.interceptors.request.use(req => {
  req.headers = {
    Authorization: `Bearer ${localStorage.token}`,
    "Content-Type": "Application/json"
  };
  return req;
});

const networking = {
  get(url) {
    return new Promise((success, error) => {
      axios({
        method: "get",
        url: url
      }).then(res => success(res.data), err => error(err));
    });
  },
  put(url, data) {
    return new Promise((success, error) => {
      axios({
        method: "put",
        url: url,
        data: JSON.stringify(data)
      }).then(res => success(res.data), err => error(err));
    });
  },
  patch(url, data) {
    return new Promise((success, error) => {
      axios({
        method: "patch",
        url: url,
        data: JSON.stringify(data)
      }).then(res => success(res.data), err => error(err));
    });
  },
  post(url, data) {
    return new Promise((success, error) => {
      axios({
        method: "post",
        url: url,
        data: JSON.stringify(data)
      }).then(res => success(res.data), err => error(err));
    });
  },
  delete(url) {
    return new Promise((success, error) => {
      axios({
        method: "delete",
        url: url
      }).then(res => success(res.data), err => error(err));
    });
  }
};

export default networking;
