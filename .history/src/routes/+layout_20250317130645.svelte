<script lang="ts">
	let { children } = $props();
	import "../app.css";
</script>
	
<div class="navbar bg-base-100 shadow-sm content-center">
	<div class="navbar-start flex mx-12">
		<a href="/" class="btn btn-ghost text-xl">Prototype Website</a>
	</div>
	<div class="navbar-end flex mx-12 content-center">
		<ul class="menu menu-horizontal px-5 content-center">
			<li><a href="/">Home</a></li>
			<li><a href="/">Games</a></li>
			<li><a href="/">About</a></li>
			<li><a href="/">Blog</a></li>
			<li><a href="/">Contact</a></li>
		</ul>
		<ul class="menu menu-horizontal bg-base-200 rounded-box">
			<li>
			  <a class="tooltip">
				<svg xmlns="http://www.w3.org/2000/svg" 
				width="24" height="24" viewBox="0 0 24 24" 
				fill="none" stroke="currentColor" 
				stroke-width="2" 
				stroke-linecap="round" 
				stroke-linejoin="round" 
				class="feather feather-youtube">
				<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
				<polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
				</svg>
			  </a>
			</li>
			<li>
			  <a class="tooltip">
				<svg xmlns="http://www.w3.org/2000/svg" 
				width="24" 
				height="24" 
				viewBox="0 0 24 24" 
				fill="none" 
				stroke="currentColor" 
				stroke-width="2" 
				stroke-linecap="round" 
				stroke-linejoin="round" 
				class="feather feather-instagram">
					<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
					<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
					<line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
				</svg>
			  </a>
			</li>
			<li>
			  <a class="tooltip">
				<svg
				  xmlns="http://www.w3.org/2000/svg"
				  class="h-5 w-5"
				  fill="none"
				  viewBox="0 0 24 24"
				  stroke="currentColor">
				  <path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
				</svg>
			  </a>
			</li>
		  </ul>
	</div>
</div>

{@render children()}