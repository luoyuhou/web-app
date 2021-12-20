import type { NextPage } from "next";
import React from "react";
import request from "../helper/http/fetch";
import { toast } from "react-toastify";

const Home: NextPage = ({ }) => {
  return (
    <div>
      <h1>Home</h1>
      {/*<p>{user}</p>*/}
    </div>
  );
};

// Home.getInitialProps = async({ req, res }) => {
//
// };

export default Home;
