import React from "react";

const Jumbotron = ({ children }) =>
  <div className="jumbotron jumbotron-fluid">
  	<div class="container container-fluid">
    {children}
    <button type="button" class="btn btn-primary">Primary</button>
     <a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Primary link</a>
   				<br />
   				
			<a href="#" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Link</a>
	</div>
  </div>;

export default Jumbotron;
