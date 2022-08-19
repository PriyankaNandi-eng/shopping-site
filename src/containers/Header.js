import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <nav class="navbar fixed-top bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/"><h2>DREAMS COLLECTION</h2></Link>
  </div>
</nav>
  );
};

export default Header;
