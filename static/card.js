var lorem = `
	Lorem Ipsum is simply dummy text of the printing and typesetting industry.
	Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
	when an unknown printer took a galley of type and scrambled it to make a type specimen book.
	It has survived not only five centuries, but also the leap into electronic typesetting,
	remaining essentially unchanged.
	It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
	and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
`
var p = [["ABD", lorem, "Hiroshima"],["CDQ", lorem, "Subara"],["VKA", lorem, "Tokyo"]];

for(let i=0; i<p.length; i++){
	let card = ` 
	<a href="#" class="crd">
	<div class="col">
		<div class="card h-100 crd1">
		    <div class="card-body">
		        <h4 class="card-title"> ${p[i][0]} </h4>
		        <p class="card-text">
		          ${p[i][1]}
		        </p>
		      </div>
		      <div class="card-footer foot">
		        <small class="text-muted">
		        	<b>${p[i][2]}</b>
		        </small>
		      </div>
		    </div>
		  </div>
	</a>
`
	document.write(card);
	document.write("<br><br>");
}