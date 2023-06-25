
for(let i=1; i<=6; i++){
	let card = ` 
	<a href="#" class="crd">
		<div class="col">
			<div class="card h-100">
			    <img src="static/img/trend/${i}.jpg" width="100%" class="im">
			</div>
		</div>
	</a>
`
	document.write(card);
	document.write("<br><br>");
}