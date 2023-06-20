var p = [["ABD", 20, "Hiroshima"],["CDQ", 20, "Subara"],["VKA", 20, "Tokyo"],["ABD", 20, "Hiroshima"],["CDQ", 20, "Subara"],["VKA", 20, "Tokyo"]];
for(let i=0; i<p.length; i++){
	let card = ` 
	<div class="col">
		<div class="card h-100">
		    <div class="card-body">
		        <h5 class="card-title"> ${p[i][0]} </h5>
		        <p class="card-text">
		          ${p[i][1]}
		        </p>
		      </div>
		      <div class="card-footer foot">
		        <small class="text-muted">
		        	<p>${p[i][2]}</p>
		        	<form method="POST">
				    		<center>
							  	<a href="p2.html">
							  		<button class="btn btn-primary" onclick=cardDetails >
							  			Submit
							  		</button>
							  	</a>
				    		</center>
				    </form>
		        </small>
		      </div>
		    </div>
		  </div>
`
	document.write(card);
	document.write("<br><br>");
}