import React from "react";

const Jumbotron = ({ children }) =>
  <div className="jumbotron jumbotron-fluid">
  	<div class="container container-fluid">
    {children}
   
     <a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Login</a>
   				<br />

			<a href="#" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Sign-up</a>
	</div>
  </div>;

export default Jumbotron;
