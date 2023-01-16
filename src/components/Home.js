import React from "react";
import { Link } from "react-router-dom";
import logo from "../media/landing.svg";
import "./Home.scss";

function Home({ user }) {
  console.log(user);
  return (
    <div class="container-sm">
      <div class="row">
        <div class="col">
          <h1 class=" call-text">Get the right job you deserve</h1>
          <Link to="/create-resume" class="btn btn-outline-danger custom">
            CREATE RESUME NOW
          </Link>
        </div>
        <div class="col call-image">
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
