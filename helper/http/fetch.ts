const fetch = require("isomorphic-fetch");

interface RequestData {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  headers?: Record<string, any>;
  body?: any;
}

const request: (data: RequestData) => Promise<any> = (data: RequestData) => {
  return fetch(process.env.NEXT_PUBLIC_BACKEND_URL + data.url, {
    ...data
  });
};

export default request;