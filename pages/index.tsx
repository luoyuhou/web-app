import type { NextPage } from "next";
import React, {useEffect} from "react";
import request from "../helper/http/fetch";
import { toast } from "react-toastify";

const Home: NextPage = () => {
  useEffect(() => {
    request({
      url: "/order/123",
      method: "GET"
    }).then((data) => {
      console.log("data", data);
    }).catch((err) => toast(err.message));
  }, []);
  return (
    <div>
      <div>Home</div>
    </div>
  );
};

export default Home;
