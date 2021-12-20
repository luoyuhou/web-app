import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import request from "../helper/http/fetch";
import { ToastContainer, toast } from "react-toastify";

const User: NextPage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    request({
      url: "/user/",
      method: "GET"
    })
      .then((data) => {
        toast.success(JSON.stringify(data));
        setUsers(data);
      })
      .catch((err) => toast.error("Error", err.message));

  }, []);

  return (
    <div className="container">
      <div>User</div>
      <ul>
        {
          users.map((li: {id: number, name: string}) => {
            return (<li key={li.id}>{li.id} - {li.name}</li>);
          })
        }
      </ul>
      <ToastContainer />
    </div>
  );
};

export default User;