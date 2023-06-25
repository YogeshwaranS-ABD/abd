let nav = `
	<nav>
		<div>
			<div class="logo"> 
				<a href="index.html">
					ABD&ensp;<img src="static/img/logo.png" alt="ABD" height="45px" width="45px">
				</a>
			</div>
			<ul>
				<a href="index.html"><li>Home</li></a>
				<a href="index.html"><li>Trending</li></a>
				<a href="index.html"><li>Search</li></a>
				<a href="about.html"><li>About</li></a>
				<a href="login.html" class="login"><li>Login</li></a>
			</ul>
		</div>
	</nav>
`

let nav2 = `

<nav class="navbar">
    <div>
        <a href="index.html" class="logo"><span>ABD</span>  <img src="static/img/logo.png" alt="LOGO"></a>
    </div>
    <div class="list">
        <span>
            <a href="index.html">Home</a>
        </span>
        <span>
            <a href="#">Features</a>
        </span>
        <span>
            <a href="#">Gallery</a>
        </span>
        <span >
            <a href="login.html">Login</a>
        </span>
    </div>
</nav>
`

let nav3 = `
  <section class="top-nav">
    <div>
      <a href="index.html" class="logo"><span>ABD</span>  <img src="static/img/logo.png" alt="LOGO" width="40px"></a>
    </div>
    <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
  </label>
    <ul class="menu">
      <li><a href="index.html">Home</a></li>
      <li><a href="#">Features</a></li>
      <li><a href="#">Gallery</a></li>
      <li><a href="login.html">Login</a></li>
    </ul>
  </section>
`

document.write(nav3);