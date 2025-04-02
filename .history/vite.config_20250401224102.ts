import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { paraglideVitePlugin } from '@inlang/paraglide-js';

export default defineConfig({
	plugins: [
		paraglideVitePlugin({ 
			project: './project.inlang', 
			outdir: './src/lib/paraglide',
			strategy: ['url', 'cookie'],
			urlPatterns: [
				{
					pattern: "/",
					localized: [
						["en", "/"],
						["fr", "/fr"],
					]
				},
				{
					pattern: "/games",
					localized: [
						["en", "/games"],
						["fr", "/jeu"],
					]
				},
				{
					pattern: "/about",
					localized: [
						["en", "/games"],
						["fr", "/a_propos"]
					]
				},
				{
					pattern: "/:path(.*)?",
					localized: [
						["en", "/:path(.*)?"],
						["fr", "/:path(.*)?"],
					],
				},
			]
		}),
		sveltekit(), 
		tailwindcss()]
});
