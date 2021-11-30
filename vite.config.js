import { defineConfig } from "vite";

export default defineConfig({
	esbuild: {
		jsxInject: 'import WJS from "/src/wavejs"',
		jsxFactory: "WJS.h",
		jsxFragment: "WJS.f",
		exclude: "./src/wavejs/",
	},
});
