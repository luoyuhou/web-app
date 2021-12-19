import type { NextPage } from "next";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import request from "../helper/http/fetch";
import { toast } from "react-toastify";

const Login: NextPage = () => {
  useEffect(() => {
    request({
      url: "/user/login",
      method: "GET",
    }).then((data) => {
      console.log("data", data);
    });
  }, []);
  const { register, handleSubmit } = useForm();
  const onSubmit = (e: Record<string, string>) => {
    request({
      url: "/user/login",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(e),
    }).then((data) => {
      console.log("login", data);
    }).catch((err) => toast(err.message));
  };
  return (
    <div className="position-absolute top-0 bottom-0 h-100 w-100">
      <div className="h-100 d-flex flex-column justify-content-center">
        <div className="row container m-auto">
          <img src="/login-bg.jpg" className="col-lg-6 col-md-12" alt=""/>
          <div className="col-lg-6 col-md-12">
            <form className="container border bg-light pt-5" style={{ height: "380px" }} onSubmit={handleSubmit(onSubmit)}>
              <div className="h-100 d-flex flex-column justify-content-lg-center">
                <div>
                  <label form="username">Username:</label>
                  <input id="username" className="form-control" required {...register("username")} />
                </div>
                <br/>
                <div>
                  <label form="password">Password:</label>
                  <input type="password" id="password" className="form-control" required {...register("password")} />
                </div>
                <br/>
                <br/>
                <div style={{ textAlign: "right" }}>
                  <input type="submit" value="Submit" className="btn btn-success"/>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;