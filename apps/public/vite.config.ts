import { defineConfig } from 'vite';
import pluginSolid from 'vite-plugin-solid';
import pluginUno from 'unocss/vite';

export default defineConfig({
	build: {
		target: 'esnext',
	},
	plugins: [pluginSolid(), pluginUno()],
	server: {
		port: 3000,
	},
});
