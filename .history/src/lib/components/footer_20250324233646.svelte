<script>
	import { m } from "../paraglide/messages";
	import { setLocale } from "../paraglide/runtime.js";
</script>

<div>
	<footer class="footer sm:footer-horizontal bg-slate-900 text-neutral-content p-12">
		<nav class="md:place-self-center md:justify-self-start mx-12">
			<h6 class="footer-title">{m.legal()}</h6>
			<a href="/" class="link link-hover">{m.column_legal_press()}</a>
			<a href="/" class="link link-hover">Privacy policy</a>
			<a href="/" class="link link-hover">Press Kit</a>
		</nav>
		<nav class="md:place-self-center md:justify-self-end mx-12">
			<h6 class="footer-title">Socials</h6>
			<ul class="menu menu-horizontal bg-slate-800 rounded-box">
				<li>
					<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D" aria-label="Youtube">
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
				  <a href="https://www.youtube.com/watch?v=3BFTio5296w&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D" aria-label="Youtube">
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
				  <a href="https://www.youtube.com/watch?v=XGxIE1hr0w4&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D" aria-label="Youtube">
					<svg xmlns="http://www.w3.org/2000/svg" 
					width="24" 
					height="24" 
					viewBox="0 0 24 24" 
					fill="none" 
					stroke="currentColor" 
					stroke-width="2" 
					stroke-linecap="round"
					stroke-linejoin="round" 
					class="feather feather-twitter">
					<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
					</svg>
				  </a>
				</li>
			  </ul>
		</nav>
	</footer>
	<footer class="footer sm:footer-horizontal footer-center bg-slate-900 text-base-content p-4">
		<aside>
			<p>Copyright © {new Date().getFullYear()} - All right reserved by ProWebber Ltd</p>
		</aside>
	</footer>
</div>