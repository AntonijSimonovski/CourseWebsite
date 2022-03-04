import React from "react";
import logo from "./pittLogo.png";
import { Link } from "react-router-dom";

class Body extends React.Component {
  render() {
    return (
      <div>
        <img src={logo} className="images" alt="Pitt logo" />
        <main role="main" className="inner cover">
          <h1 className="heading">Professor Name</h1>
          <p className="text">
            University of Pittsburgh - School of Computing and Information
          </p>
          <p className="text">Email: johndoe@random.com</p>
          <br></br>
          <p className="text">
            <Link className="mybtn" to="/IntermediateProgramming">
              Class 1
            </Link>
            <Link className="mybtn" to="DataStructures">
              Class 2
            </Link>
          </p>
        </main>
      </div>
    );
  }
}

export default Body;
