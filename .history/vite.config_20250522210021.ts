import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { paraglideVitePlugin } from '@inlang/paraglide-js';

export default defineConfig({
	plugins: [
		paraglideVitePlugin({ 
			project: './project.inlang', 
			outdir: './src/lib/paraglide',
			strategy: ['url', 'cookie', , "baseLocale"],
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
						["en", "/about"],
						["fr", "/a_propos"]
					]
				},
				{
					pattern: "/blog",
					localized: [
						["en", "/blog"],
						["fr", "/blog/fr"]
					]
				},
				{
					pattern: "/blog_alt",
					localized: [
						["en", "/blog_alt"],
						["fr", "/blog_alt/fr"]
					]
				},
				{
					pattern: "/blog_alt/:slug",
					localized: [
						["en", "/blog_alt/:slug"],
						["fr", "/blog_alt/fr/:slug"]
					]
				},
				{
					pattern: "/contact",
					localized: [
						["en", "/contact"],
						["fr", "/contact/fr"]
					]
				},
			]
		}),
		sveltekit(), 
		tailwindcss()]
});
