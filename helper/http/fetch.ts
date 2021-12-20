const fetch = require("isomorphic-fetch");

interface RequestData {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  headers?: Record<string, any>;
  body?: any;
}

const request: (data: RequestData) => Promise<any> = (data: RequestData) => {
  return fetch("/api/" + data.url, {
    ...data
  }).then(async (response: Response) => {
    if (response.redirected) {
      window.location.replace(response.url);
      return;
    }
    if (response.status !== 200) {
      return Promise.reject(await response.text());
    }
    return Promise.resolve(await response.json());
  });
};

export default request;